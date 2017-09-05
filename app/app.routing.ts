import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoggedInGuard } from './helper/LoggedInGuard';

const appRoutes: Routes = [
    { path : '', component: LoginComponent },
    { path : 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
    { path : 'register', component: RegisterComponent },
    { path: '**', redirectTo: '/' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);