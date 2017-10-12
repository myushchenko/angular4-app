import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageModule } from 'angular-2-local-storage';

// add rxjs operators (once in application)
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

// modules
import { MaterialModule } from './material.module';

// services
import { UserService } from './core/user/user.service';
import { LayoutService } from './core/layout.service';
import { LocationService } from './core/location/location.service';

// components
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello/hello.component';
import { APP_CONFIG, AppConfig } from './shared/app.config.constants';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    LocalStorageModule.withConfig({
      prefix: 'angular4-app',
      storageType: 'localStorage'
  })
  ],
  providers: [
    UserService,
    LayoutService,
    LocationService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
