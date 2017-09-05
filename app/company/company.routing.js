"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var company_component_1 = require("./company.component");
var company_show_component_1 = require("./show/company-show.component");
var LoggedInGuard_1 = require("../helper/LoggedInGuard");
var companyRoutes = [
    { path: 'company', component: company_component_1.CompanyComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] },
    { path: 'company/add', component: company_show_component_1.CompanyShowComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] },
    { path: 'company/:id', component: company_show_component_1.CompanyShowComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] }
];
exports.companyRouting = router_1.RouterModule.forChild(companyRoutes);
//# sourceMappingURL=company.routing.js.map