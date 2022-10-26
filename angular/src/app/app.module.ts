import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
