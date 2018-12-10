import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { SharedComponentsModule } from '../components/sharedComponents.module'
import { Device } from '@ionic-native/device';
import { NFC, Ndef } from '@ionic-native/nfc';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NfcProvider } from '../providers/nfc/nfc';
import { QrScannerProvider } from '../providers/qr-scanner/qr-scanner';
import { CameraProvider } from '../providers/camera/camera';
import { Camera } from '@ionic-native/camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ToastController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { LOCALE_ID } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MediaCapture } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { AppVersion } from '@ionic-native/app-version';
import { ModelModule } from "../model/model.module";
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DatetimePickerModule } from 'ion-datetime-picker-sn';
import { TreeModule } from 'ng2-tree';
import { BackgroundMode } from '@ionic-native/background-mode';
import { CoreErrorHandler } from "../model/core-model/error-handler";
import { FileTransfer } from '@ionic-native/file-transfer';
import { UpdateCheckerProvider } from '../providers/update-checker/update-checker';
import { httpInterceptorProviders } from '../model';
import { SQLite } from '@ionic-native/sqlite';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
   // BackgroundMode,
    BrowserModule,
    TreeModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    HttpClientModule,
    DatetimePickerModule,
    //PipesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot(),
    SharedComponentsModule,
    ModelModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    BackgroundMode,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: CoreErrorHandler },
    Device,
    Diagnostic,
    NFC,
    Ndef,
    BarcodeScanner,
    NfcProvider,
    QrScannerProvider,
    Camera,
    CameraProvider,
    ToastController,
    AndroidPermissions,
    { provide: LOCALE_ID, useValue: "ru-RU" },
    Vibration,
    Base64ToGallery,
    MediaCapture,
    File,
    FileOpener,
    AppVersion,
    FileTransfer,
    UpdateCheckerProvider,
    httpInterceptorProviders,
    SQLite
  ],
  exports: []
})
export class AppModule { }


