import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, BrowserXhr} from '@angular/http';
import { ExtendedXHRBackend } from './helper/ExtendedXHRBackend';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';

import { SideBarComponent } from './component/side-bar.component/side-bar.component';
import { NavBarComponent } from './component/nav-bar.component/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';

import { LoginService } from './login/login.service';
import { LoggedInGuard } from './helper/LoggedInGuard';

import { CompanyModule } from './company/company.module';
import { GroupModuleModule } from './group-module/group-module.module';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    HttpModule,
    CompanyModule,
    GroupModuleModule
  ],
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    LoginComponent, 
    HomeComponent,
    RegisterComponent
  ],
  providers: [
    RegisterService,
    LoginService,
    { provide: XHRBackend, useClass: ExtendedXHRBackend },
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }