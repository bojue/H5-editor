import { Component, OnInit } from "@angular/core";
import { DataBasicComponent } from "../../../comp-basic/data-basic/data-basic.component";

@Component({
  selector: 'app-text-val',
  templateUrl: './text-val.component.html',
  styleUrls: ['./text-val.component.scss']
})
export class TextValComponent extends DataBasicComponent implements OnInit {
  override data_type = 'text_val';
  constructor() { 
    super()
  }

  override ngOnInit() {
    this.initParentData();
  }
}
