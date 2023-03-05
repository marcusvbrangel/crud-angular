import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppAngularMaterialModule } from '../shared/app-angular-material/app-angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [
        CoursesComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppAngularMaterialModule,
        SharedModule
    ]
})

export class CoursesModule { }
