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
var user_1 = require("../shared/models/user");
var login_service_1 = require("./login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service) {
        this.service = service;
        this.errorMessage = undefined;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    LoginComponent.prototype.logar = function () {
        var _this = this;
        this.service.login(this.user).subscribe(function (res) {
            console.log('dsadsadsa');
            _this.errorMessage = res;
        });
    };
    LoginComponent.prototype.close = function () {
        this.errorMessage = undefined;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-page',
            templateUrl: './app/login/login.component.html',
            styles: ["\n    .login-page {\n      padding: 50px !important;\n      overflow:hidden;\n    }\n    \n    input .form-control:focus {\n      border-color: red;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map