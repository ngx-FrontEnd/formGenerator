import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CommonModule } from './shared/modules/common.module';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      // validationMessages: [
      //   { name: 'required', message: 'This field is required' },
      // ],
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
