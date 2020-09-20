import { MaterialModule } from './../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MaterialModule,
        BrowserModule
    ],
    declarations: [
        SidebarComponent,
        HeaderComponent
    ],
    exports: [
        SidebarComponent,
        HeaderComponent
    ]
})
export class LayoutModule { }
