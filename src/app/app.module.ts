import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
// import { CommonModule } from './shared/modules/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,

  ],
  imports: [
    BrowserModule,
    FormlyModule,
    SharedModule,
    BrowserAnimationsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      // types: [
      //   { name: 'textFiled', component: TextFieldComponent },
      //   { name: 'radio', component: RadioComponent },
      //   // { name: 'repeat2', component: TextAreaComponent},
      // ],
      // validationMessages: [
      //   { name: 'required', message: 'This field is required' },
      // ],
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
