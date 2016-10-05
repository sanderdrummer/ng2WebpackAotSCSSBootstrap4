import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { FeatureModuleComponent } from './feature-module.component';
import { CommonModule } from '@angular/common';
import { FeatureModuleService } from './feature-module.service';

@NgModule({
    imports: [CommonModule],
    declarations: [FeatureModuleComponent],
    exports: [FeatureModuleComponent],
})
export class FeatureModuleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FeatureModuleModule,
            providers: [FeatureModuleService]
        };
    }
}
