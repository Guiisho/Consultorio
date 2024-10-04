import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { CRUDComponent } from './Services/crud/crud.component';
import { LogInComponent } from './Services/log-in/log-in.component';
import { LogOutComponent } from './Services/log-out/log-out.component';
import { RegisterComponent } from './Services/register/register.component';

export const routes: Routes = [
    
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'crud', component: CRUDComponent},
    {path: 'login', component: LogInComponent},
    {path: 'logout', component: LogOutComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo: 'Home'}
];
