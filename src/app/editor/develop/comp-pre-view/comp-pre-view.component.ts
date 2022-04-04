import { Component, OnInit, AfterContentInit, OnDestroy, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { ViewContainRefHostDirective } from '../../directive/view-contain-ref-host.directive';
import { EmitSubService } from 'src/app/core/emitSub/emit-sub.service';
import { Location} from "@angular/common";
import { CompDynamicCreateService } from '../../provider/comp-dynamic-create.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { SettingObjComponent } from '../../model/setting-object.interface';
import { CompStorageLocalService } from '../../provider/comp-storage-local.service';
import { PageObject } from 'src/app/pages/workspace/model/page.model';

@Component({
  selector: 'app-comp-pre-view',
  templateUrl: './comp-pre-view.component.html',
  styleUrls: ['./comp-pre-view.component.scss']
})
export class CompPreViewComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild(ViewContainRefHostDirective, { static: true}) viewContRef: ViewContainRefHostDirective;
  compList: any[];
  pageInfo :any  | {
    width:number,
    height:number
  };
  currentViewContRef:any;
  eventEmitter:any;
  components: any[];
  pageId:number;
  constructor( 
    public localStorageService:CompStorageLocalService,
    public emitSerive: EmitSubService, 
    private elementRef: ElementRef,
    private dynamicService: CompDynamicCreateService,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: Router,
    private location:Location

  ) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.pageInfo = this.localStorageService.getPreViewPageInfo();
    let comps: any = this.localStorageService.getPreViceComponent();
    this.compList = JSON.parse(comps);
    let parentCompList = _.cloneDeep(this.compList);
    this.eventEmitter = this.emitSerive.getEmitEvent().subscribe(res => {
      if(res && res['type'] === 'child-comp') {
        let data = res['data']
        let currentList = _.concat(parentCompList, data);
        this.initViewContRef();
        this.updateCompList(currentList);
      }
    })
  }

  ngOnDestroy() {
     if( this.currentViewContRef) {
       this.currentViewContRef.clear();
     }
  }
  
  ngAfterContentInit() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.updateCompList();
  }

  updateCompList(list?:any[]){
    this.components = this.dynamicService.getCompList( list || this.compList);
    _.map(this.components, (comp)=> {
      this.renderComponent(comp)
    })
  }

  initViewContRef(){
    let len = this.components.length;
    for(let i=0; i < len;i++){
      this.currentViewContRef.clear(i)
    }
  }

  renderComponent(currentComponent: any) {
    let compFactory  = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
    let compRef = this.currentViewContRef.createComponent(compFactory);
    let compInstance = compRef.instance;
    (<SettingObjComponent> compInstance).settingObj = currentComponent.settingObj;
    (compInstance).onChildComponentChange.subscribe((e: any)=> {
      let type = e && e['type'];
      let eventSettingObj = e && e['dynamicData'] && e['dynamicData']['event'];
      if(eventSettingObj) {
        this.eventHandle(type, eventSettingObj)
      }
    })
  }

  eventHandle(type: string, eventObj: any) {
    switch (type) {
      case 'click':
        if(eventObj['routeBool']) {
          console.log("单页面预览状态不支持页面跳转，可以查看页面跳转参数：", eventObj['route'])
        }else if (eventObj[type +'Bool']) {
          console.log("点击事件处理，目前只做了路由处理")
        }
        break;
      default:
        return ;  
    }
  }

  routerLink(url?:string, params?:any) {
    if(url !== undefined && url !== null)  {
      this.route.navigate([url], {queryParams: {pageObj:JSON.stringify(params)}});
    }
  }

  goBack() {
    this.location.back();
  }

}