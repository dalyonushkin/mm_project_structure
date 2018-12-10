import {NgModule} from "@angular/core";
import {AuthModule} from './auth/auth.module';
import {CoreModelModule} from './core-model/core-model.module';
import {MonitorModelModule} from './monitor-model/monitor-model.module';
import {ActionsExecutorModule} from './executor/executor.module';
import {StorageModule} from './storage/storage.module';
import {MobileFeaturesModule} from './mobile-features/mobile-features.module';
import {DeviceSettingsModule} from './device-settings/device-settings.module';
import {Domain,AppHooks,LoggerService, CoreDomain, MessagingService, MonitorDomain,BackendConnectionService, DDPClient,HooksService,AuthService,StorageProvider,ActionsExecutors,DeviceAppSettingsStorage,ActionStackStorage, DeviceSettingsService,DeviceInfoService} from "./index";
import { Platform } from "ionic-angular";
import { AppVersion } from "@ionic-native/app-version";
import { File } from '@ionic-native/file'
import { UpdateCheckerProvider } from "../providers/update-checker/update-checker";
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  providers: [{
    provide: Domain, useClass: Domain, deps: [AuthService, CoreDomain, MonitorDomain, HooksService,
      MessagingService,
      BackendConnectionService,
      ActionsExecutors,
      DDPClient,
      AppHooks]
  }, {provide:AppHooks, useClass:AppHooks,deps:[ HooksService,
    MonitorDomain,
     BackendConnectionService,
     AuthService,
    DDPClient,
    DeviceAppSettingsStorage,
    ActionStackStorage,
     MessagingService,
     ActionsExecutors,
     DeviceSettingsService,
     UpdateCheckerProvider,
     TranslateService
    ]},
     {provide:LoggerService,useClass:LoggerService,deps:[Platform,File,DeviceInfoService]}],
  imports: [
    AuthModule,
    CoreModelModule,
    MonitorModelModule,
    ActionsExecutorModule,
    StorageModule,
    MobileFeaturesModule,
    DeviceSettingsModule
  ]
})
export class ModelModule {
}
