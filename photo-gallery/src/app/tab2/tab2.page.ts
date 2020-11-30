import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) { }
// https://ionicframework.com/docs/angular/your-first-app/4-loading-photos#storage-api
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
// //
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
