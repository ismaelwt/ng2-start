import { NgModule }       from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CompanyComponent } from './company.component';
import { CompanyShowComponent } from './show/company-show.component';
import { CompanyService } from './company.service';
import { companyRouting } from './company.routing';



@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
       HttpModule,
      JsonpModule,
      companyRouting
    ],
    declarations: [
      CompanyComponent,
      CompanyShowComponent
    ],
  
    providers: [
        CompanyService
    ]
    
  })
  export class CompanyModule {
    static forRoot() {
      return {
        ngModule: CompanyModule,
        providers: [ CompanyService]
      }
  }
}