"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToCompany = function () {
        this.router.navigateByUrl('company');
    };
    HomeComponent.prototype.goToGroupModules = function () {
        this.router.navigateByUrl('group-module');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-page',
            template: "\n    <div class=\"cmp\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"goToCompany()\">Cadastro de Empresas</button>\n            </div>\n            <div class=\"col-lg-4\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"goToGroupModules()\">Cadastro de Grupo de Modulos</button>\n            </div>\n            <div class=\"col-lg-4\">\n              <button type=\"button\" class=\"btn btn-primary\">Cadastro de Grupo de Modulos</button>\n            </div>\n          </div>\n          <br/>\n          <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Cadastro de Modulos</button>\n          </div>\n          <div class=\"col-lg-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Cadastro de Programas</button>\n          </div>\n          <div class=\"col-lg-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Cadastro de Usuarios</button>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .cmp {\n      padding:50px;  \n      width: 100%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map