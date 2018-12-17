import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { ShelfsComponent } from './shelfs/shelfs.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { GetDataService } from './_services/get-data.service';

@NgModule({
  declarations: [MainComponent, LandingComponent, ProductsComponent, ShelfsComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  providers: [AuthService, GetDataService]
})
export class MainModule { }
