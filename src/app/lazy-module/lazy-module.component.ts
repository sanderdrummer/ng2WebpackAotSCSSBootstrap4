/**
 * Created by Tobias on 05.10.2016.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'as-lazy-module',
    template: 'Lazy Module'
})
export class LazyModuleComponent implements OnInit {
    constructor() {
        console.log('lazy module' );
    }

    ngOnInit() {
        console.log('lazy module init' );
    }

}
