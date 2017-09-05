import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Company } from '../../shared/models/company';
import { CompanyService } from '../company.service';


@Component({
  selector: 'company-page',
  templateUrl: './app/company/show/company-show.component.html',
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
export class CompanyShowComponent implements OnInit {
    company: Company;

    constructor(private service:CompanyService, private router:Router, private location:Location, private activeRoute:ActivatedRoute){
    }

    ngOnInit(){

      this.activeRoute.params.subscribe(params => {
        let companyId:string = params['id'];

        if (companyId) {
          this.service.findById(companyId).subscribe(company => this.company = company);
        }

      });



       this.company = new Company();
    }

    save(company:Company){
        this.service.save(company).subscribe(res => this.router.navigate(['company']));
    }

    goBack(){
      this.location.back();
    }


}