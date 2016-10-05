import { NgModule } from '@angular/core/src/metadata/ng_module';
import { routing } from './lazy-module.routing';
import { LazyModuleComponent } from './lazy-module.component';
import { LazyModuleChildComponent } from './lazy-module-child/lazy-module-child.component';
import { LazyModuleChildBComponent } from './lazy-module-child/lazy-module-child-b.component';

@NgModule({
    imports: [routing],
    declarations: [
        LazyModuleComponent,
        LazyModuleChildComponent,
        LazyModuleChildBComponent
    ]
})
export class LazyModuleModule {}
