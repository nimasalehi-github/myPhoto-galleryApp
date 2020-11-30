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
  }
/////////////////////////////////////////////////////////////// //

}
