import { Routes, RouterModule } from '@angular/router';
import { LazyModuleComponent } from './lazy-module.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: LazyModuleComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
