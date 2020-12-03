import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AddressComponent} from './address/address.component'
import {AboutComponent} from './about/about.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'address',
    component: AddressComponent,
    data: {
      title: 'address'
    }
  },
  {path : "about", component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
