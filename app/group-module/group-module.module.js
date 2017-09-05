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
var group_module_component_1 = require("./group-module.component");
var group_module_show_component_1 = require("./show/group-module-show.component");
var group_module_service_1 = require("./group-module.service");
var group_module_routing_1 = require("./group-module.routing");
var GroupModuleModule = (function () {
    function GroupModuleModule() {
    }
    GroupModuleModule_1 = GroupModuleModule;
    GroupModuleModule.forRoot = function () {
        return {
            ngModule: GroupModuleModule_1,
            providers: [group_module_service_1.GroupModuleService]
        };
    };
    GroupModuleModule = GroupModuleModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                group_module_routing_1.groupModuleRouting
            ],
            declarations: [
                group_module_component_1.GroupModuleComponent,
                group_module_show_component_1.GroupModuleShowComponent
            ],
            providers: [
                group_module_service_1.GroupModuleService
            ]
        })
    ], GroupModuleModule);
    return GroupModuleModule;
    var GroupModuleModule_1;
}());
exports.GroupModuleModule = GroupModuleModule;
//# sourceMappingURL=group-module.module.js.map