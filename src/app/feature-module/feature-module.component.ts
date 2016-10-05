/**
 * Created by Tobias on 05.10.2016.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'as-feature-module',
    template: 'Feature Module'
})
export class FeatureModuleComponent implements OnInit {

    constructor() {
        console.log('feature module');
    }

    ngOnInit(): void {
        console.log('feature module init');
    }
}
