import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  name
  email
  password
  constructor( public userService: UsersService) { }

  ngOnInit() {
  }
  
  register(){
    this.userService.SignUp( this.email, this.password)
  }

}
