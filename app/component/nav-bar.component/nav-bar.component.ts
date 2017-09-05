import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'nav-bar',
  template: `
    <div class="cls1">
      <header>
      <nav class="navbar navbar-default navbar-color">
        <div class="container-fluid">
          <div class="navbar-header user-nav">
            <a class="navbar-brand">
              <span>{{user.name}}</span>
            </a>
            <a class="navbar-brand">
            <span (click)="logout()">Logout</span>
          </a>
          </div>
        </div>
      </nav>
      </header>
    </div>
  `,
  styles: [`

    .navbar-color {
      background-color: #a7a7a7 !important;
      border-color: transparent !important;
    }

    .user-nav{
      float:right;
      
    }
    .cls1 {
        position: fixed;
        left:0;
        width: 100%;
        top: 0;
    }
  `]
})
export class NavBarComponent implements OnInit { 
  user:User;  
  constructor(private service: LoginService){}

    ngOnInit(){
      this.user = new User();
      this.user.name = localStorage.getItem('username');
    }

    logout() {
      this.service.logout();
    }
  }