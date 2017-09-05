import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar',
  template: `
  <div id="mySidenav" class="sidenav" style="top:0; left:0;">
    <a class="closebtn" (click)="closeNav()">&times;</a>
    <div class="search">
      <div class="row">
        <div class="col-lg-offset-3 col-lg-5">
          <input id="searchTerm" placeholder="Search..." class="form-control" (keyup)="search($event)" name="search" [(ngModel)]="searchTerm" />
        </div>
      </div>
    </div>
  </div>

<span style="font-size:30px;cursor:pointer; left:2%; top:1%; position:absolute; z-index:1;" (click)="openNav()">&#9776; Search</span>
  `,
  styles: [`
.search{
  height:100%;
}
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align:center;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

}

.sidenav a:hover{
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

   
  `]
})
export class SideBarComponent {

  searchTerm:string = undefined;

  constructor(private router:Router){}

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById('searchTerm').focus();
  }

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

  search($event){
    if ($event.keyCode !== 13) return;
    this.router.navigateByUrl(this.searchTerm == undefined ? 'home' : this.searchTerm);
    this.closeNav();
    this.searchTerm = undefined;
  }

}