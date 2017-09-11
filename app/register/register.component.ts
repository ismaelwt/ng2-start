import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../shared/models/user';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';


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
    
    user: User;
    message:string;
    errorMessage = false;

    constructor(private service: RegisterService, private router:Router){}

    ngOnInit(){
         this.user = new User();
    }

    saveNewUser() {

        if(this.validationError()) {
            this.errorMessage = true;
            return;
        }else {
            this.service.save(this.user).subscribe(user => {
                if(user){
    
                    this.message = `Usuário ${user.email} criado com sucesso.`
    
                    //this.router.navigateByUrl('');
                }
            });
        }
    }

    close(){
        this.errorMessage = false; 
      }


    validationError(){
        let _error = false;

        if (!this.user.email) {
            this.message = 'Preencha corretamente o campo email.';
            _error = true;
        }
        if (!this.user.password && !_error) {
            this.message = 'Preencha corretamente o campo senha'
            _error = true;
        }else {
            this.message += ', Senha';
        }
        if (!this.user.name && !_error) {
            this.message = 'Preencha corretamente o campo Nome'
            _error = true;
        }else {
            this.message += ', Nome.';
        }
        return _error;
    }

    goBack() {
        this.router.navigateByUrl('')
    }

}