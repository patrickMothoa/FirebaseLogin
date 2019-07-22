import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public userService: UsersService) {}

  logOut(){
    this.userService.logout();
  }

}
