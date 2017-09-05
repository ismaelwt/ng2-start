import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { GroupModule } from '../../shared/models/group-module';
import { GroupModuleService } from '../group-module.service';


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
export class GroupModuleShowComponent implements OnInit {
  groupModule: GroupModule;

  constructor(private service: GroupModuleService, private router: Router, private location: Location, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      let groupModuleId: string = params['id'];

      if (groupModuleId) {
        this.service.findById(groupModuleId).subscribe(groupModule => this.groupModule = groupModule);
      }else {
        this.groupModule = new GroupModule();
      }
      
    });
  }

  save(groupModule: GroupModule) {
    this.service.save(groupModule).subscribe(res => this.router.navigate(['group-module']));
  }

  goBack() {
    this.location.back();
  }


}