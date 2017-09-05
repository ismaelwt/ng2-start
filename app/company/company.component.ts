import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Company } from '../shared/models/company';
import { CompanyService } from './company.service';


@Component({
  selector: 'company-page',
  templateUrl: './app/company/company.component.html',
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
export class CompanyComponent implements OnInit {
    
    location: Location;
    companies: Company[];
    selectedCompany:Company;

    constructor(private plocation:Location, private service:CompanyService, 
        private route:ActivatedRoute,
        private router: Router){
        this.location = plocation;
    }

    ngOnInit(){
        this.getAll();
    }

    addCompany(){
        this.router.navigate(['company/add']);
    }

    goBack() {
        this.location.back();
    }

    setSelected(company){
        this.selectedCompany = company;
    }

    getAll(){
        this.service.getAll()
        .subscribe(
            companies => this.companies = companies,
             err => {
                 console.log(err);
             });
    }

    editCompany(){
        this.router.navigate(['company/' + this.selectedCompany.id]);
    }

    removeCompany() {
        this.service.deleteById(this.selectedCompany.id).subscribe(res => {
            this.getAll();
        });
    }

}