"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var LoggedInGuard_1 = require("./helper/LoggedInGuard");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: '/' }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map