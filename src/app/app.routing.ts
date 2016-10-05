import { Routes, RouterModule } from '@angular/router';
import { FeatureModuleComponent } from './feature-module/feature-module.component';

export const appRoutes: Routes = [
    { path: '', component: FeatureModuleComponent },
    { path: 'lazy', loadChildren: './lazy-module/lazy-module.module#LazyModuleModule'},
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
