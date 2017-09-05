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
var company_service_1 = require("./company.service");
var CompanyComponent = (function () {
    function CompanyComponent(plocation, service, route, router) {
        this.plocation = plocation;
        this.service = service;
        this.route = route;
        this.router = router;
        this.location = plocation;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    CompanyComponent.prototype.addCompany = function () {
        this.router.navigate(['company/add']);
    };
    CompanyComponent.prototype.goBack = function () {
        this.location.back();
    };
    CompanyComponent.prototype.setSelected = function (company) {
        this.selectedCompany = company;
    };
    CompanyComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (companies) { return _this.companies = companies; }, function (err) {
            console.log(err);
        });
    };
    CompanyComponent.prototype.editCompany = function () {
        this.router.navigate(['company/' + this.selectedCompany.id]);
    };
    CompanyComponent.prototype.removeCompany = function () {
        var _this = this;
        this.service.deleteById(this.selectedCompany.id).subscribe(function (res) {
            _this.getAll();
        });
    };
    CompanyComponent = __decorate([
        core_1.Component({
            selector: 'company-page',
            templateUrl: './app/company/company.component.html',
            styles: ["\n    .cls1 {\n      border: solid 1px;\n      padding: 15px !important;\n      border-radius: 25px;\n      width: 50%;\n      height: 50%;\n    }\n    .setSelected {background-color: rgba(67, 187, 164, 0.5);}\n  "]
        }),
        __metadata("design:paramtypes", [common_1.Location, company_service_1.CompanyService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], CompanyComponent);
    return CompanyComponent;
}());
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map