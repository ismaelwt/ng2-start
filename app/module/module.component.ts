import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Module } from '../shared/models/module';
import { ModuleService } from './module.service';


@Component({
    selector: 'module-page',
    templateUrl: './app/module/module.component.html',
    styles: [`
    .cls1 {
      border: solid 1px;
      padding: 15px !important;
      border-radius: 25px;
      width: 50%;
      height: 50%;
    }
    .setSelected {background-color: rgba(67, 187, 164, 0.5);}
  `]
})
export class ModuleComponent implements OnInit {

    location: Location;
    _modules: Module[];
    selectedModule: Module;

    constructor(private plocation: Location, private service: ModuleService,
        private route: ActivatedRoute,
        private router: Router) {
        this.location = plocation;
    }

    ngOnInit() {
        this.getAll();
    }

    addCompany() {
        this.router.navigate(['module/add']);
    }

    goBack() {
        this.location.back();
    }

    setSelected(pModule) {
        this.selectedModule = pModule;
    }

    getAll() {
        this.service.getAll()
            .subscribe(
            _resModules => this._modules = _resModules,
            err => {
                console.log(err);
            });
    }

    editModule() {
        this.router.navigate(['module/' + this.selectedModule.id]);
    }

    removeModule() {
        if (this.selectedModule) {
            this.service.deleteById(this.selectedModule.id).subscribe(res => {
                this.getAll();
            });
        }
    }

}