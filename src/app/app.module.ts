import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { ListComponent } from './lists/list/list.component';
import { ListsComponent } from './lists/lists.component';

@NgModule({
    declarations: [
        AppComponent,
        ListsComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
