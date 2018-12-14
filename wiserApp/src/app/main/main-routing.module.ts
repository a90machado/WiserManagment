import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { ShelfsComponent } from './shelfs/shelfs.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'content',
    component: MainComponent,
    children: [
        {
            path: 'home',
            component: LandingComponent
        },
        {
            path: 'products',
            component: ProductsComponent
        },
        {
            path: 'shelfs',
            component: ShelfsComponent
        },
        {
            path: 'newuser',
            component: RegisterComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
