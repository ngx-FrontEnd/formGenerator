import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})


export class DynamicFormComponent implements OnInit {

  form: FormGroup;
  arr: FormArray;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      arr: fb.array([this.storeValue])
    })
  }

  field = this.fb.group({
    label: [],
    type: [],
    placeholder: [],
    describe: [],
    defaults: [],
    max: [],
    min: [],
    required: [],
    option: this.fb.group({
      
    })
  })

  test: any;
  storeValue: textField[] = [];
  controlsType: any;

  pushValue() {

    this.storeValue.push(
      // {
      //   label: this.field.get('label').value,
      //   type: this.field.get('type').value,
      //   placeholder: this.field.get('placeholder').value,
      //   describe: this.field.get('describe').value,
      //   defaults: this.field.get('defaults').value,
      //   required: this.field.get('required').value,
      // }

      this.getValue
    );

    console.log(this.storeValue);
    this.field.reset();
  }



  get getValue() {
    let label = this.field.get('label').value;
    let type = this.field.get('type').value;
    let placeholder = this.field.get('placeholder').value;
    let describe = this.field.get('describe').value;
    let defaults = this.field.get('defaults').value;
    let max = this.field.get('max').value;
let min = this.field.get('min').value;
let required = this.field.get('required').value;

return { label, type, placeholder, describe, defaults, max, min, required };
  }


onChanged(num: any) {
  this.arr.push(num.value)
}

onChange(type: any) {
  this.controlsType = type;
}

onSubmit() {
  // alert(JSON.stringify(this.form.value));
}
ngOnInit(): void {}

}

export interface textField {
  label: any,
  type: any,
  placeholder: any,
  describe: any,
  defaults: any,
  required: any,
  min: number,
  max: number,
}
