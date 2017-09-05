import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupModuleComponent } from './group-module.component'
import { GroupModuleShowComponent } from './show/group-module-show.component'

import { LoggedInGuard } from '../helper/LoggedInGuard';

const groupModuleRoutes: Routes = [
    { path : 'group-module', component: GroupModuleComponent, canActivate: [LoggedInGuard]}, 
    { path: 'group-module/add', component: GroupModuleShowComponent, canActivate: [LoggedInGuard]},
    { path: 'group-module/:id', component: GroupModuleShowComponent, canActivate: [LoggedInGuard]}
];

export const groupModuleRouting: ModuleWithProviders = RouterModule.forChild(groupModuleRoutes);