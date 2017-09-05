import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component'
import { CompanyShowComponent } from './show/company-show.component'

import { LoggedInGuard } from '../helper/LoggedInGuard';

const companyRoutes: Routes = [
    { path : 'company', component: CompanyComponent, canActivate: [LoggedInGuard]}, 
    { path: 'company/add', component: CompanyShowComponent, canActivate: [LoggedInGuard]},
    { path: 'company/:id', component: CompanyShowComponent, canActivate: [LoggedInGuard]}
];

export const companyRouting: ModuleWithProviders = RouterModule.forChild(companyRoutes);