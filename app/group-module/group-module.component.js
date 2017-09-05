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
var router_1 = require("@angular/router");
var group_module_service_1 = require("./group-module.service");
var GroupModuleComponent = (function () {
    function GroupModuleComponent(plocation, service, route, router) {
        this.plocation = plocation;
        this.service = service;
        this.route = route;
        this.router = router;
        this.location = plocation;
    }
    GroupModuleComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    GroupModuleComponent.prototype.addCompany = function () {
        this.router.navigate(['group-module/add']);
    };
    GroupModuleComponent.prototype.goBack = function () {
        this.location.back();
    };
    GroupModuleComponent.prototype.setSelected = function (company) {
        this.selectedGroupModule = company;
    };
    GroupModuleComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (companies) { return _this.companies = companies; }, function (err) {
            console.log(err);
        });
    };
    GroupModuleComponent.prototype.editGroupModule = function () {
        this.router.navigate(['group-module/' + this.selectedGroupModule.id]);
    };
    GroupModuleComponent.prototype.removeGroupModule = function () {
        var _this = this;
        this.service.deleteById(this.selectedGroupModule.id).subscribe(function (res) {
            _this.getAll();
        });
    };
    GroupModuleComponent = __decorate([
        core_1.Component({
            selector: 'group-module-page',
            templateUrl: './app/group-module/group-module.component.html',
            styles: ["\n    .cls1 {\n      border: solid 1px;\n      padding: 15px !important;\n      border-radius: 25px;\n      width: 50%;\n      height: 50%;\n    }\n    .setSelected {background-color: rgba(67, 187, 164, 0.5);}\n  "]
        }),
        __metadata("design:paramtypes", [common_1.Location, group_module_service_1.GroupModuleService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], GroupModuleComponent);
    return GroupModuleComponent;
}());
exports.GroupModuleComponent = GroupModuleComponent;
//# sourceMappingURL=group-module.component.js.map