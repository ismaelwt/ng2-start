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
var login_service_1 = require("../../login/login.service");
var user_1 = require("../../shared/models/user");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(service) {
        this.service = service;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        this.user.name = localStorage.getItem('username');
    };
    NavBarComponent.prototype.logout = function () {
        this.service.logout();
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: "\n    <div class=\"cls1\">\n      <header>\n      <nav class=\"navbar navbar-default navbar-color\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header user-nav\">\n            <a class=\"navbar-brand\">\n              <span>{{user.name}}</span>\n            </a>\n            <a class=\"navbar-brand\">\n            <span (click)=\"logout()\">Logout</span>\n          </a>\n          </div>\n        </div>\n      </nav>\n      </header>\n    </div>\n  ",
            styles: ["\n\n    .navbar-color {\n      background-color: #a7a7a7 !important;\n      border-color: transparent !important;\n    }\n\n    .user-nav{\n      float:right;\n      \n    }\n    .cls1 {\n        position: fixed;\n        left:0;\n        width: 100%;\n        top: 0;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map