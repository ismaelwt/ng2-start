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
var company_1 = require("../../shared/models/company");
var company_service_1 = require("../company.service");
var CompanyShowComponent = (function () {
    function CompanyShowComponent(service, router, location, activeRoute) {
        this.service = service;
        this.router = router;
        this.location = location;
        this.activeRoute = activeRoute;
    }
    CompanyShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            var companyId = params['id'];
            if (companyId) {
                _this.service.findById(companyId).subscribe(function (company) { return _this.company = company; });
            }
        });
        this.company = new company_1.Company();
    };
    CompanyShowComponent.prototype.save = function (company) {
        var _this = this;
        this.service.save(company).subscribe(function (res) { return _this.router.navigate(['company']); });
    };
    CompanyShowComponent.prototype.goBack = function () {
        this.location.back();
    };
    CompanyShowComponent = __decorate([
        core_1.Component({
            selector: 'company-page',
            templateUrl: './app/company/show/company-show.component.html',
            styles: ["\n    .cls1 {\n      border: solid 1px;\n      padding: 15px !important;\n      border-radius: 25px;\n      width: 50%;\n      height: 50%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.Router, common_1.Location, router_1.ActivatedRoute])
    ], CompanyShowComponent);
    return CompanyShowComponent;
}());
exports.CompanyShowComponent = CompanyShowComponent;
//# sourceMappingURL=company-show.component.js.map