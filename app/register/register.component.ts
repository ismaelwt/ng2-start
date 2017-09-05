import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { User } from '../shared/models/user';
import { RegisterService } from './register.service';


@Component({
  selector: 'register-page',
  templateUrl: './app/register/register.component.html',
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
export class RegisterComponent implements OnInit {
    
    location: Location;
    user: User;

    constructor(private service: RegisterService, private plocation:Location){
        this.location = plocation;
    }

    ngOnInit(){
         this.user = new User();
    }

    saveNewUser() {
        this.service.save(this.user);
    }


    goBack() {
        this.location.back();
    }

}