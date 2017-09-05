"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var group_module_component_1 = require("./group-module.component");
var group_module_show_component_1 = require("./show/group-module-show.component");
var LoggedInGuard_1 = require("../helper/LoggedInGuard");
var groupModuleRoutes = [
    { path: 'group-module', component: group_module_component_1.GroupModuleComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] },
    { path: 'group-module/add', component: group_module_show_component_1.GroupModuleShowComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] },
    { path: 'group-module/:id', component: group_module_show_component_1.GroupModuleShowComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] }
];
exports.groupModuleRouting = router_1.RouterModule.forChild(groupModuleRoutes);
//# sourceMappingURL=group-module.routing.js.map