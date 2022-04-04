import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxEchartsModule } from "ngx-echarts";
import { CompSettingBasicModule } from "../../comp-basic/comp-setting-basic.module";
import { CodeModule } from '../../../../core/code.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartGuageComponent } from './chart-guage/chart-guage.component';
import { ChartPolylineComponent } from './chart-polyline/chart-polyline.component';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';

const customComp = [
    ChartPieComponent,
    ChartGuageComponent,
    ChartPolylineComponent,
    ChartRadarComponent
]

@NgModule({
  declarations: [
      [...customComp]
  ],
  imports: [
    CodeModule,
    FormsModule,
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    CompSettingBasicModule
  ],
  exports: [
    [...customComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...customComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompBusinessModule { }