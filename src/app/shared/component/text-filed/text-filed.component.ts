import { Component, forwardRef, Input, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-text-filed',
  templateUrl: './text-filed.component.html',
  styleUrls: ['./text-filed.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextFiledComponent),
    multi: true
  }]
})
export class TextFiledComponent implements ControlValueAccessor {

  constructor() { }

  @Input() appearance: any = 'fill';
  @Input() label: string = 'label';
  @Input() type: string = 'message';
  @Input() placeholder: string = 'placeholder';
  @Input() hint?: string;
  @Input() icon: string = 'sentiment_satisfied_alt';
  @Input() iconVisibility: string = 'block';
  // @Input() ErrorMessage!: string;
  @Input() required!: string;
  // --------------------------------------------
  value!: string;
  onChange!: (event: any) => void;
  onTouched!: () => void;
  disabled!: boolean;

  writeValue(value: any): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  change($event: any) {
    this.onChange($event.target.value);
    this.onTouched();
  }
}
