import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit,ControlValueAccessor {
  // @Input()labelPosition:any='before';
  @Input()
  labelPosition!: 'before' | 'after'
  @Input()color!:'primary'|'warn'|'accent';
  @Input()required!: boolean;
  @Input()disabled: any;
  // @Input() checkBoxValue!:any[];
  @Input() value!:string;
  // @Input()value!: string;
  // @Input()name!: string | null;
  // @Input()id!: string

  @Output() selectedValueChange = new EventEmitter <MatCheckboxChange>();

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() { }
  writeValue(value: any): void {
    this.value=value?value:'';
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }

  change(e:any){
    this.onChange=e.value
  }




  // storeValue!:string[];

  // getValue(name :any,i :any){
  //   if(name.checked==true){
      
  //     this.storeValue.push(i);
  //     console.log('checked', i);
  //     // console.log(this.storeValue.indexOf(i));
      
  //   }else{
  //     console.log('unchecked');
  //     this.storeValue=this.storeValue.filter(m=>m!=i);

  //     // or

  //     // let index = this.storeValue.indexOf(i);
  //     // this.storeValue.splice(index,1);
      
  //   }
  //   console.log('Selected Item');
  // }
 
  // log(name:any){
  //   console.log(name._elementRef.nativeElement.style.color='blue');

  //   console.log(name._checked);
    
  // }

  ngOnInit(): void {
    // this.storeValue=new Array<string>();
  }

}
