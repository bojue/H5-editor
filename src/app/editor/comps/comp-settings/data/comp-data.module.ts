import { UploaderComponent } from "./uploader/uploader.component";
import { ButtonValComponent } from "./button-val/button-val.component";
import { TextValComponent } from "./text-val/text-val.component";
import { TextareaValComponent } from "./textarea-val/textarea-val.component";
import { InputValComponent } from "./input-val/input-val.component";
import { ImgValComponent } from "./img-val/img-val.component";
import { ListValComponent } from "./list-val/list-val.component";
import { AudioValComponent } from "./audio-val/audio-val.component";
import { VideoValComponent } from "./video-val/video-val.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CompSettingBasicModule } from "../../comp-basic/comp-setting-basic.module";
import { CodeModule } from "src/app/core/code.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IndexDBService } from 'src/app/core/provider/indexDB/indexDB.service';

const dataComp = [
    UploaderComponent,
    ButtonValComponent,
    TextValComponent,
    TextareaValComponent,
    InputValComponent,
    ImgValComponent,
    ListValComponent,
    AudioValComponent,
    VideoValComponent,
]

@NgModule({
  declarations: [
      [...dataComp]
  ],
  imports: [
    CodeModule,
    FormsModule,
    CommonModule,
    CompSettingBasicModule
  ],
  exports: [
    [...dataComp]
  ],
  providers: [
    IndexDBService
  ],
  bootstrap: [],
  entryComponents:[
    [...dataComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompDataModule { }