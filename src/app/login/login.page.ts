import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email 
password
  constructor( public userService: UsersService, public alertController: AlertController) { }

  ngOnInit() {
  }

  login(email, password){
    this.userService.SignIn(this.email, this.password)
  }


  async resetpass() {
    const alert = await this.alertController.create({
      header: 'reset Password',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'enter your email'
        }],
        buttons: [
          {
            text: 'Send',
            role: 'send',
            cssClass: 'secondary',
            handler: (email) => {

              this.userService.resetPassword(email.email)
              console.log('Confirm Ok');
            }
          }, {
            text: 'Cancel',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }
        ]
      });
  
      await alert.present();
    }
}


