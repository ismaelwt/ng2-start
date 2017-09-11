import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ModuleComponent } from './module.component'
import { ModuleShowComponent } from './show/module-show.component'

import { LoggedInGuard } from '../helper/LoggedInGuard';

const mModuleRoutes: Routes = [
    { path : 'module', component: ModuleComponent, canActivate: [LoggedInGuard]}, 
    { path: 'module/add', component: ModuleShowComponent, canActivate: [LoggedInGuard]},
    { path: 'module/:id', component: ModuleShowComponent, canActivate: [LoggedInGuard]}
];

export const mModuleRouting: ModuleWithProviders = RouterModule.forChild(mModuleRoutes);