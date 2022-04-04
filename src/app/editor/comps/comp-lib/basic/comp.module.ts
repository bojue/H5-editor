import { ButtonComponent } from "./button/button.component";

import { CodeModule } from '../../../../core/code.module';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SelectComponent } from "./select/select.component";
import { TextComponent } from "./text/text.component";
import { ImgComponent } from "./img/img.component";
import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { LineComponent } from "./line/line.component";
import { VideoComponent } from "./video/video.component";
import { SwiperComponent } from "./swiper/swiper.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

const basicComp = [
    ButtonComponent,
    SelectComponent,
    TextComponent,
    ImgComponent,
    InputComponent,
    TextareaComponent,
    LineComponent,
    VideoComponent,
    SwiperComponent
]

@NgModule({
  declarations: [
      [...basicComp]
  ],
  imports: [
    CodeModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    [...basicComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...basicComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompBasicModule { }