import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent, },
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
