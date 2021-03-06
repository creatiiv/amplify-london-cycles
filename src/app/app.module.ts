import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MapComponent } from './@core/components/map/map.component';
import { HeaderComponent } from './@core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmplifyAngularModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule,
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
