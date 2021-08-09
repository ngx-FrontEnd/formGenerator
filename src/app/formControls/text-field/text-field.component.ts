import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';


@Component({
  selector: 'app-text-field',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-field [field]="field"></formly-field>
      <div >
        <button  type="button" (click)="remove(i)">-</button>
      </div>
    </div>

    <div style="margin:30px 0;">
      <button  type="button" (click)="add()">+</button>
    </div>
  `,
  styles: [
  ]
})
export class TextFieldComponent extends FieldArrayType { }
