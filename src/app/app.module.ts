import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './child-components/data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
  BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
