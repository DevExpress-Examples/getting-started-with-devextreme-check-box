import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DxCheckBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
