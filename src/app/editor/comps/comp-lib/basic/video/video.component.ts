import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../../comp-basic/basic/basic.component';
import { SettingObjComponent } from 'src/app/editor/model/setting-object.interface';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  override ngOnInit() {
    this.initData();
  }
  
  override inputState(event: any) {
    this.settingObj['editeabled'] = true;
  }

}