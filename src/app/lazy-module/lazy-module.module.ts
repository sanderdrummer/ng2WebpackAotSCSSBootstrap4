import { NgModule } from '@angular/core/src/metadata/ng_module';
import { routing } from './lazy-module.routing';
import { LazyModuleComponent } from './lazy-module.component';

@NgModule({
    imports: [routing],
    declarations: [LazyModuleComponent]
})
export class LazyModuleModule {}
