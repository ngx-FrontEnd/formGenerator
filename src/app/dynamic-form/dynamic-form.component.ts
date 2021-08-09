import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  form = new FormGroup({});
  model = {
    textFiled: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'textFiled',
      type: 'textFiled',

      templateOptions: {
        fxFlex: '50',
        fxLayout: "row",
        attributes: {
          style: 'color:red',
          class: 'filed'
        }
        // addText: 'Add another investment',
      },

      fieldArray: {
        fieldGroup: [
          {
            key: 'label',
            type: 'input',
            templateOptions: {
              label: 'label',
              appearance: 'outline',

            },


          },
          {
            key: 'placeholder',
            type: 'input',
            templateOptions: {
              label: 'Placeholder',
              placeholder: 'Enter the key value',
              appearance: 'outline'
            },


            // expressionProperties: {
            //   'templateOptions.label': 'model.label',
            // }

          },


        ],

      },
    },

  ];

  submit() {
    alert(JSON.stringify(this.model));
  }


  constructor() { }

  ngOnInit(): void { }

}
