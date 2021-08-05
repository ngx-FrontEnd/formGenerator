import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule,FormsModule } from "@angular/forms/";
import { NgModule } from '@angular/core';

const commonModule = [
  MaterialModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  FormsModule
]

@NgModule({
  imports: [commonModule],
  exports:[commonModule]
})

export class CommonModule{}
