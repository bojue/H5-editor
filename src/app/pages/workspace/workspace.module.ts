import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from "@angular/core";
import { WorkspaceRoutingModule } from "./workspace.routing.module";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ListComponent } from './project/project-list/list.component';
import { DetailComponent } from './project/project-detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageAddComponent } from './page/page-add/page-add.component';
import { PageEditComponent } from './page/page-edit/page-edit.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';
import { ProjectEditorComponent } from './project/project-editor/project-editor.component';
import { CompConfigService } from "../../editor/provider/comp-config.service";
import { CodeModule } from "../../core/code.module";

const comps = [
  ListComponent,
  DetailComponent,
]

const enterComp = [
  PageAddComponent,
  PageEditComponent,
  ProjectAddComponent,
  ProjectEditorComponent
]

@NgModule({
  declarations: [
    ...comps,
    ...enterComp,
  ],
  imports: [
    CodeModule,
    CommonModule,
    FormsModule,
    NgbModule,
    WorkspaceRoutingModule
  ],
  providers: [
    CompConfigService,
  ],
  bootstrap: [],
  entryComponents:[
    ...enterComp
  ],
  exports: [
    WorkspaceRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class WorkspaceModule { }

