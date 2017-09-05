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
var company_component_1 = require("./company.component");
var company_show_component_1 = require("./show/company-show.component");
var company_service_1 = require("./company.service");
var company_routing_1 = require("./company.routing");
var CompanyModule = (function () {
    function CompanyModule() {
    }
    CompanyModule_1 = CompanyModule;
    CompanyModule.forRoot = function () {
        return {
            ngModule: CompanyModule_1,
            providers: [company_service_1.CompanyService]
        };
    };
    CompanyModule = CompanyModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                company_routing_1.companyRouting
            ],
            declarations: [
                company_component_1.CompanyComponent,
                company_show_component_1.CompanyShowComponent
            ],
            providers: [
                company_service_1.CompanyService
            ]
        })
    ], CompanyModule);
    return CompanyModule;
    var CompanyModule_1;
}());
exports.CompanyModule = CompanyModule;
//# sourceMappingURL=company.module.js.map