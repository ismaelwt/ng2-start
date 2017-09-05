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
var group_module_1 = require("../../shared/models/group-module");
var group_module_service_1 = require("../group-module.service");
var GroupModuleShowComponent = (function () {
    function GroupModuleShowComponent(service, router, location, activeRoute) {
        this.service = service;
        this.router = router;
        this.location = location;
        this.activeRoute = activeRoute;
    }
    GroupModuleShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            var companyId = params['id'];
            if (companyId) {
                _this.service.findById(companyId).subscribe(function (groupModule) { return _this.groupModule = groupModule; });
            }
        });
        this.groupModule = new group_module_1.GroupModule();
    };
    GroupModuleShowComponent.prototype.save = function (groupModule) {
        var _this = this;
        this.service.save(groupModule).subscribe(function (res) { return _this.router.navigate(['company']); });
    };
    GroupModuleShowComponent.prototype.goBack = function () {
        this.location.back();
    };
    GroupModuleShowComponent = __decorate([
        core_1.Component({
            selector: 'company-page',
            templateUrl: './app/group-module/show/group-module-show.component.html',
            styles: ["\n    .cls1 {\n      border: solid 1px;\n      padding: 15px !important;\n      border-radius: 25px;\n      width: 50%;\n      height: 50%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [group_module_service_1.GroupModuleService, router_1.Router, common_1.Location, router_1.ActivatedRoute])
    ], GroupModuleShowComponent);
    return GroupModuleShowComponent;
}());
exports.GroupModuleShowComponent = GroupModuleShowComponent;
//# sourceMappingURL=group-module-show.component.js.map