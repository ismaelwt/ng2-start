import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { GroupModule } from '../shared/models/group-module';
import { GroupModuleService } from './group-module.service';


@Component({
  selector: 'group-module-page',
  templateUrl: './app/group-module/group-module.component.html',
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
export class GroupModuleComponent implements OnInit {
    
    location: Location;
    companies: GroupModule[];
    selectedGroupModule:GroupModule;

    constructor(private plocation:Location, private service:GroupModuleService, 
        private route:ActivatedRoute,
        private router: Router){
        this.location = plocation;
    }

    ngOnInit(){
        this.getAll();
    }

    addCompany(){
        this.router.navigate(['group-module/add']);
    }

    goBack() {
        this.location.back();
    }

    setSelected(company){
        this.selectedGroupModule = company;
    }

    getAll(){
        this.service.getAll()
        .subscribe(
            companies => this.companies = companies,
             err => {
                 console.log(err);
             });
    }

    editGroupModule(){
        this.router.navigate(['group-module/' + this.selectedGroupModule.id]);
    }

    removeGroupModule() {
        this.service.deleteById(this.selectedGroupModule.id).subscribe(res => {
            this.getAll();
        });
    }

}