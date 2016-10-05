import { Routes, RouterModule } from '@angular/router';
import { LazyModuleComponent } from './lazy-module.component';
import { ModuleWithProviders } from '@angular/core';
import { LazyModuleChildComponent } from './lazy-module-child/lazy-module-child.component';
import { LazyModuleChildBComponent } from './lazy-module-child/lazy-module-child-b.component';

const routes: Routes = [
    {
        path: '',
        component: LazyModuleComponent,
        children: [
            { path: '', redirectTo: 'a', pathMatch: 'full' },
            {
                path: 'a', component: LazyModuleChildComponent,
            },
            {
                path: 'b', component: LazyModuleChildBComponent,
            }
        ]
    },
    {
        path: 'test', component: LazyModuleChildComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
