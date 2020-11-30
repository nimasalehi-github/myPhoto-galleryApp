import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PhotoService, Photo } from '../services/photo.service';
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
  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }
}
