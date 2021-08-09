import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';


@Component({
  selector: 'app-text-area',
  template: `
  <div *ngFor="let field of field.fieldGroup; let i = index;" [fxLayout]="to.fxLayout">
      <formly-field [field]="field" [fxFlex]='to.fxFlex'></formly-field>
      <div >
        <button  type="button" (click)="remove(i)">-</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button  type="button" (click)="add()">+</button>
    </div>
    {{to.flexLayotu}}
    {{to.fxFlex}}
  `,
  styles: [
  ]
})
export class TextAreaComponent extends FieldArrayType { }
