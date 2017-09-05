import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="all">
      <side-bar *ngIf="user.loggedIn | async"></side-bar>
      <nav-bar *ngIf="user.loggedIn | async"></nav-bar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
  .all {
    padding:50px !important;  
    width: 100% !important;
  }
  `]
})
export class AppComponent {
  constructor(private user: LoginService) { }

}