import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { GroupModule } from '../../shared/models/group-module';
import { Module } from '../../shared/models/module';
import { ModuleService } from '../module.service';
import { ModalComponent } from '../../component/modal.component/modal.component' 


@Component({
  selector: 'company-page',
  templateUrl: './app/group-module/show/group-module-show.component.html',
  styles: [`
    .cls1 {
      border: solid 1px;
      padding: 15px !important;
      border-radius: 25px;
      width: 50%;
      height: 50%;
    }
  `]
})
export class ModuleShowComponent implements OnInit {
  mModule: Module;
  
  @ViewChild('modal')
  modal: ModalComponent;


  constructor(private service: ModuleService, private router: Router, private location: Location, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      let moduleId: string = params['id'];

      if (moduleId) {
        this.service.findById(moduleId).subscribe(res => this.mModule = res);
      }else {
        this.mModule = new Module();
      }
      
    });
  }

  save(groupModule: GroupModule) {
    this.service.save(groupModule).subscribe(res => this.router.navigate(['module']));
  }

  goBack() {
    this.location.back();
  }

  modalOpen(){

    //get Modules
    
    this.modal.show();
  }


}