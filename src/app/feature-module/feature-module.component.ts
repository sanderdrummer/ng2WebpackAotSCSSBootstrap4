/**
 * Created by Tobias on 05.10.2016.
 */
import { Component, OnInit } from '@angular/core';
import { FeatureModuleService } from './feature-module.service';

@Component({
    selector: 'as-feature-module',
    template: 'Feature Module'
})
export class FeatureModuleComponent implements OnInit {

    constructor(private service: FeatureModuleService) {
        console.log('feature module');
    }

    ngOnInit(): void {
        this.service.sayHello();
    }
}
