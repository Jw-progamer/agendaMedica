import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { LoginComponent } from './login.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ]
})
export class LoginModule { }
