import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardContainerComponent } from './card-container/card-container.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [ 
    AppComponent,
    CardContainerComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
