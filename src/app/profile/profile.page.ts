import { Component, OnInit } from '@angular/core';
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform, Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;

  constructor(private platform: Platform) {
    if(!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
   }
  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log('user:', this.user);

}
  async refresh() {
    const authCode = await GoogleAuth.refresh();
    console.log('refresh:',authCode);
}
  async signOut(){
    await GoogleAuth.signOut();
    this.user = null;

}
  
  ngOnInit() {
    this.user = null;
  }

}
