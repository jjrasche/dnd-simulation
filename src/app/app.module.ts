import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
  DisplayComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DisplayComponent]
})
export class AppModule { }
