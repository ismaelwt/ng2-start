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
var Observable_1 = require("rxjs/Observable");
var GroupModuleService = (function () {
    function GroupModuleService(http) {
        this.http = http;
        this.registerUrl = 'http://localhost:8000/group-module/';
        this.head = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    GroupModuleService.prototype.ngOnInit = function () {
    };
    GroupModuleService.prototype.save = function (data) {
        return this.http.post(this.registerUrl, JSON.stringify(data), { headers: this.head })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    GroupModuleService.prototype.getAll = function () {
        return this.http.get(this.registerUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    GroupModuleService.prototype.findById = function (id) {
        return this.http.get(this.registerUrl + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    GroupModuleService.prototype.deleteById = function (id) {
        return this.http.delete(this.registerUrl + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    GroupModuleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GroupModuleService);
    return GroupModuleService;
}());
exports.GroupModuleService = GroupModuleService;
//# sourceMappingURL=group-module.service.js.map