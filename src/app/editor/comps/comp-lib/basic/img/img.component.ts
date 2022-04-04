import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";
import { SettingObjComponent } from "src/app/editor/model/setting-object.interface";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  override ngOnInit() {
    this.initData();
  }
}
