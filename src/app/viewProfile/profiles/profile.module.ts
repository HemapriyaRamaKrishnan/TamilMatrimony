import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './profile-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSpinnerModule, NbToastrModule } from '@nebular/theme';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    LandingComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbCardModule,
    CarouselModule,
    NbButtonModule,
    NbLayoutModule,
    NbToastrModule,
    NbSpinnerModule,
    NbIconModule,
    NbButtonGroupModule,

  ],
})
export class ProfileModule { }
