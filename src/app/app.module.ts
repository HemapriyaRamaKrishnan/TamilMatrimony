import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbSpinnerModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { ResizeService } from 'ngx-owl-carousel-o/lib/services/resize.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbToastrModule.forRoot(),
    NbEvaIconsModule,
    // CarouselModule,
    RouterModule,
    HttpClientModule,
    NbSpinnerModule,

  ],
  // providers: [NbStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
