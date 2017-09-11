import { NgModule }       from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ModuleComponent } from './module.component';
import { ModuleShowComponent } from './show/module-show.component';
import { ModuleService } from './module.service';
import { mModuleRouting } from './module.routing';



@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
       HttpModule,
      JsonpModule,
      mModuleRouting
    ],
    declarations: [
      ModuleComponent,
      ModuleShowComponent
    ],
  
    providers: [
      ModuleService
    ]
    
  })
  export class mModuleCore {
    static forRoot() {
      return {
        ngModule: mModuleCore,
        providers: [ ModuleService ]
      }
  }
}