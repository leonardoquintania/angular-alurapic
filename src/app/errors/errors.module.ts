import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { GlobalErrorComponent } from './global-error/globa-error.component';
import { Router, RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
