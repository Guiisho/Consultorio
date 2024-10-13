import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TurnosComponent } from './Components/Turnos/turnos.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { CRUDComponent } from './Components/crud/crud.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { LogOutComponent } from './Components/log-out/log-out.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'turnos', component: TurnosComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'crud', component: CRUDComponent},
    {path: 'login', component: LogInComponent},
    {path: 'logout', component: LogOutComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: '**', redirectTo: 'login', pathMatch:'full'},
];
