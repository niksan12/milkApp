import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};


  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      // console.log('logged in successfully');
      this.alertify.success('Logged in successfully');
    }, error => {
      // console.log(error);
      this.alertify.error(error);
    });

  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return this.authService.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertify.success('logged out successfully');
  }

}
