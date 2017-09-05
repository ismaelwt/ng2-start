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
var router_1 = require("@angular/router");
var SideBarComponent = (function () {
    function SideBarComponent(router) {
        this.router = router;
        this.searchTerm = undefined;
    }
    SideBarComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById('searchTerm').focus();
    };
    SideBarComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    SideBarComponent.prototype.search = function ($event) {
        if ($event.keyCode !== 13)
            return;
        this.router.navigateByUrl(this.searchTerm == undefined ? 'home' : this.searchTerm);
        this.closeNav();
        this.searchTerm = undefined;
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'side-bar',
            template: "\n  <div id=\"mySidenav\" class=\"sidenav\" style=\"top:0; left:0;\">\n    <a class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <div class=\"search\">\n      <div class=\"row\">\n        <div class=\"col-lg-offset-3 col-lg-5\">\n          <input id=\"searchTerm\" placeholder=\"Search...\" class=\"form-control\" (keyup)=\"search($event)\" name=\"search\" [(ngModel)]=\"searchTerm\" />\n        </div>\n      </div>\n    </div>\n  </div>\n\n<span style=\"font-size:30px;cursor:pointer; left:2%; top:1%; position:absolute; z-index:1;\" (click)=\"openNav()\">&#9776; Search</span>\n  ",
            styles: ["\n.search{\n  height:100%;\n}\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    background-color: #111;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n    text-align:center;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n\n}\n\n.sidenav a:hover{\n    color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n\n   \n  "]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=side-bar.component.js.map