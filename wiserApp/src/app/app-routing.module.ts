import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './main/landing/landing.component';
import { ProductsComponent } from './main/products/products.component';
import { ShelfsComponent } from './main/shelfs/shelfs.component';
import { RegisterComponent } from './main/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'content/home',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent, },
  { path: 'content', component: MainComponent },
  { path: 'content/home', component: LandingComponent },
  { path: 'content/products', component: ProductsComponent },
  { path: 'content/shelfs', component: ShelfsComponent },
  { path: 'content/newuser', component: RegisterComponent },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
