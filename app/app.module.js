"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ExtendedXHRBackend_1 = require("./helper/ExtendedXHRBackend");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var side_bar_component_1 = require("./component/side-bar.component/side-bar.component");
var nav_bar_component_1 = require("./component/nav-bar.component/nav-bar.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var register_service_1 = require("./register/register.service");
var login_service_1 = require("./login/login.service");
var LoggedInGuard_1 = require("./helper/LoggedInGuard");
var company_module_1 = require("./company/company.module");
var group_module_module_1 = require("./group-module/group-module.module");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.appRouting,
                http_1.HttpModule,
                company_module_1.CompanyModule,
                group_module_module_1.GroupModuleModule
            ],
            declarations: [
                app_component_1.AppComponent,
                side_bar_component_1.SideBarComponent,
                nav_bar_component_1.NavBarComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent
            ],
            providers: [
                register_service_1.RegisterService,
                login_service_1.LoginService,
                { provide: http_1.XHRBackend, useClass: ExtendedXHRBackend_1.ExtendedXHRBackend },
                LoggedInGuard_1.LoggedInGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map