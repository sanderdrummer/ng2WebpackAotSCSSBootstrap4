/**
 * Created by Tobias on 05.10.2016.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'as-lazy-module-child',
    template: 'child A'
})
export class LazyModuleChildComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
