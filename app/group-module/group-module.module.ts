import { NgModule }       from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { GroupModuleComponent } from './group-module.component';
import { GroupModuleShowComponent } from './show/group-module-show.component';
import { GroupModuleService } from './group-module.service';
import { groupModuleRouting } from './group-module.routing';
import { ModalComponent } from '../component/modal.component/modal.component';



@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
       HttpModule,
      JsonpModule,
      groupModuleRouting
    ],
    declarations: [
      GroupModuleComponent,
      GroupModuleShowComponent,
      ModalComponent
    ],
  
    providers: [
        GroupModuleService
    ]
    
  })
  export class GrupoDeModulos {
    static forRoot() {
      return {
        ngModule: GrupoDeModulos,
        providers: [ GroupModuleService ]
      }
  }
}