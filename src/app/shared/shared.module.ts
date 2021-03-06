import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CommonModule } from './modules/common.module';
import { MaterialModule } from './modules/material.module';

import { ButtonComponent } from './component/button/button.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { InputComponent } from './component/input/input.component';
import { SelectComponent } from './component/select/select.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { MenuComponent } from './component/menu/menu.component';
import { IconComponent } from './component/icon/icon.component';
import { TextareaComponent } from './component/textarea/textarea.component';
import { ExpansionPanelComponent } from './component/expansion-panel/expansion-panel.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { DividerComponent } from './component/divider/divider.component';
import { CardComponent } from './component/card/card.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { BadgeComponent } from './component/badge/badge.component';
import { RadioButtonComponent } from './component/radio-button/radio-button.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TextFiledComponent } from './component/text-filed/text-filed.component';
import { HigelightDirective } from './directive/higelight.directive';

const sharedComponent = [
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  RadioButtonComponent,
  SelectComponent,
  SnackbarComponent,
  MenuComponent,
  IconComponent,
  TextareaComponent,
  ExpansionPanelComponent,
  DialogComponent,
  DividerComponent,
  CardComponent,
  ParentComponent,
  ChildComponent,
  BadgeComponent,
  TextFiledComponent,
];

@NgModule({
  declarations: [sharedComponent, HigelightDirective,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [sharedComponent, MaterialModule, CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, HigelightDirective],
})
export class SharedModule { }
