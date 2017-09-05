import { NgModule }       from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { GroupModuleComponent } from './group-module.component';
import { GroupModuleShowComponent } from './show/group-module-show.component';
import { GroupModuleService } from './group-module.service';
import { groupModuleRouting } from './group-module.routing';



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
      GroupModuleShowComponent
    ],
  
    providers: [
        GroupModuleService
    ]
    
  })
  export class GroupModuleModule {
    static forRoot() {
      return {
        ngModule: GroupModuleModule,
        providers: [ GroupModuleService ]
      }
  }
}