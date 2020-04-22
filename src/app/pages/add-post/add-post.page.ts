import { Component, OnInit } from '@angular/core';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx'
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  selectedImage: string;

  constructor(
    private camera: Camera,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async imagePickerSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select image source',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.takeImage(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Device',
          icon: 'phone-portrait-outline',
          handler: () => {
            this.takeImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Cancel',
          icon: 'close-circle-outline',
          role: 'cancel'
        }]
    });
    await actionSheet.present();
  }

  takeImage(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL
    }

    this.camera.getPicture(options)
      .then(imagePath => {
        this.selectedImage = "data:image/jpeg;base64," + imagePath
      })
  }

}
