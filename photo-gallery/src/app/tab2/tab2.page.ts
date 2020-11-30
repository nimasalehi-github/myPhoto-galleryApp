import { Component } from '@angular/core';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

// ///////////////////////////////////////////////////////////////
// https://ionicframework.com/docs/angular/your-first-app/2-taking-photos#photo-service

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
/////////////////////////////////////////////////////////////// //

}
