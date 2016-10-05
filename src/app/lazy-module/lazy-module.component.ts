/**
 * Created by Tobias on 05.10.2016.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'as-lazy-module',
    template: `Lazy Module
    <nav>
    <a [routerLink]="['a']" routerLinkActive="active">Kind A</a>
    <a [routerLink]="['b']" routerLinkActive="active">Kind B</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class LazyModuleComponent implements OnInit {
    constructor() {
        console.log('lazy module' );
    }

    ngOnInit() {
        console.log('lazy module init' );
    }

}
