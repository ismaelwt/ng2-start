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
var http_1 = require("@angular/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var router_1 = require("@angular/router");
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:8000/auth/';
        this._loggedIn = new BehaviorSubject_1.BehaviorSubject(false);
        this.loggedIn = this._loggedIn.asObservable();
    }
    LoginService.prototype.login = function (usuario) {
        var _this = this;
        return this.http
            .post(this.url + 'login', JSON.stringify(usuario))
            .map(function (res) {
            var token = res.headers.get('x-access-token');
            if (token) {
                _this._loggedIn.next(true);
                localStorage.setItem('token', token);
                if (res.json()) {
                    localStorage.setItem('username', res.json().name);
                    localStorage.setItem('email', res.json().email);
                    _this.router.navigate(['/home']);
                }
            }
            else {
                return res.json();
            }
        });
    };
    LoginService.prototype.logout = function () {
        localStorage.clear();
        this._loggedIn.next(false);
        this.router.navigate(['']);
    };
    LoginService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this._loggedIn.next(true);
        }
        else {
            this._loggedIn.next(false);
        }
        return this._loggedIn.getValue();
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map