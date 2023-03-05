import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppAngularMaterialModule } from './app-angular-material/app-angular-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
    declarations: [
        ErrorDialogComponent
    ],
    imports: [
        CommonModule,
        AppAngularMaterialModule
    ],
    exports: [
        ErrorDialogComponent
    ]
})

export class SharedModule { }
