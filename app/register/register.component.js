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
var common_1 = require("@angular/common");
var user_1 = require("../shared/models/user");
var register_service_1 = require("./register.service");
var RegisterComponent = (function () {
    function RegisterComponent(service, plocation) {
        this.service = service;
        this.plocation = plocation;
        this.location = plocation;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    RegisterComponent.prototype.saveNewUser = function () {
        this.service.save(this.user);
    };
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-page',
            templateUrl: './app/register/register.component.html',
            styles: ["\n    .cls1 {\n      border: solid 1px;\n      padding: 15px !important;\n      border-radius: 25px;\n      width: 50%;\n      height: 50%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [register_service_1.RegisterService, common_1.Location])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map