import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image = "http://wallpaper-gallery.net/images/one-piece-images/one-piece-images-19.jpg";
  profilePic = "https://randomuser.me/api/portraits/women/33.jpg";


  constructor(public navCtrl: NavController) {

  }

}
