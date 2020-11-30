import { Injectable } from '@angular/core';

// ///////////////////////////////////////////////////////////////
// https://ionicframework.com/docs/angular/your-first-app/2-taking-photos#photo-service
import {
        Plugins,
        CameraResultType,
        Capacitor,
        FilesystemDirectory,
        CameraPhoto,
        CameraSource

  } from '@capacitor/core';

const {
        Camera,
        Filesystem,
        Storage

  } = Plugins;
/////////////////////////////////////////////////////////////// //

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // https://ionicframework.com/docs/angular/your-first-app/2-taking-photos#displaying-photos
  public photos: Photo[] = [];


  constructor() { }

// ///////////////////////////////////////////////////////////////
// https://ionicframework.com/docs/angular/your-first-app/2-taking-photos#photo-service
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });


    // https://ionicframework.com/docs/angular/your-first-app/2-taking-photos#displaying-photos
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
    // 

  }
/////////////////////////////////////////////////////////////// //

}

// https://ionicframework.com/docs/angular/your-first-app/2-taking-photos#displaying-photos
export interface Photo {
  filepath: string;
  webviewPath: string;
}
// 
