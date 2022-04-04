import { Injectable, OnInit } from '@angular/core';
import * as _ from 'loadsh';

@Injectable({
  providedIn: 'root'
})
export class CompListService { 
    constructor() {

    }

    componentList = [{ 
        name:'基础',
        title:"基础组件,多为HTML元素组件",
        state: 'default',
        compList: [
            // line有点bug，所以先注释
            // {
            //     name:'连线',
            //     type: 'line',
            //     iconUrl: 'assets/icons/line.svg' 
            // },
            {
                name:'文本',
                type: 'text',
                iconUrl: 'assets/icons/text.svg'
            },{
                name:'单行输入',
                type: 'input',
                iconUrl: 'assets/icons/input.svg'
            },{
                name:'多行输入',
                type: 'textarea',
                iconUrl: 'assets/icons/textarea.svg'
            },{
                name:'按钮',
                type: 'button',
                iconUrl: 'assets/icons/mtbutton.svg'
            },{
                name:'图片',
                type: 'img',
                iconUrl: 'assets/icons/image.svg'
            },{
                name:'视频',
                type: 'video',
                iconUrl: 'assets/icons/video.svg'
            },]
        }, {
            name: 'Chart',
            state: 'module',
            title:"Chart组件,支持数据绑定和接口绑定,支持定制",
            compList: [{
                name:"饼图",
                type:"chart_pie",
                iconUrl: 'assets/icons/bingtu.svg'
            },
            {
                name: "雷达图",
                type:"chart_radar",
                iconUrl:'assets/icons/leidatu.svg'
            },{
                name:'折线',
                type: 'chart_polyline',
                iconUrl: 'assets/icons/zhexian.svg',
                vip_state:true
            },{
                name: '仪表盘',
                type:'chart_gauge',
                iconUrl:'assets/icons/gauge.svg',
                vip_state:true
            }
        ]
    }]

    public getCompList() {
        return this.componentList;
    }
}