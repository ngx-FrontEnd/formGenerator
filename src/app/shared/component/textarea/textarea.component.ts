import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>TextareaComponent),
    multi:true
  }]
})
export class TextareaComponent implements ControlValueAccessor ,OnInit {
  @Input() label!:string;
  @Input() placeholder!:string;
  @Input() appearance: any = 'fill';
  @Input() rows!:number;
  @Input() cols!:number;
  @Input() maxlength!:number;
  @Input() minlength!:number;
  constructor() { }

  value!:string;
  onChange!:(event:any) =>void;
  onTouched!:()=>void;
  disabled!:boolean;
  
  writeValue(value: any): void {
  this.value=value;
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
  this.onTouched=fn;
  }
  setDisabledState(isDisabled:boolean):void{
    this.disabled=isDisabled;
  }
  change( $event:any ) {
    this.onChange($event.target.value);
    this.onTouched();
  }
  

  ngOnInit(): void {
  }

}
