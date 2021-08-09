import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParentComponent implements OnInit {

  form!:FormGroup;

  constructor(private fb: FormBuilder) {
// --------------------------inputFiled------------------------------- -->

    // this.form = this.fb.group({
    //   name: ['',''],
    //   email: ['',[Validators.required,Validators.email]],
    // });
// ------------TextArea----------------
    // this.form = this.fb.group({
    //  address:['',[Validators.required,Validators.maxLength(50),Validators.minLength(10)]],
    // });
// ------------Checkbox----------------
  this.form = this.fb.group({
   skil:['']
  });
  }

// ------------inputFiled----------------
    
  //   get nameErrorMessage(){
  //      const name=this.form.get('name');
  //      return name?.hasError('required')?'Name is required':'';
  //   }   
  
  // get emailErrorMessage(){
  //   const email=this.form.get('email');
  //   return email?.hasError('required')?'email is required': email?.hasError('email')?'email is not valid' :'';
  // }

  // get name(){
  //   return this.form.get('name');
  // }
  // get email(){
  //   return this.form.get('email');
  // }


  // onSubmit(): any {
  //   console.log(this.form.value);
    
  // }
  // reset(){
  //   this.form.reset;
  // }
  
// ------------TextArea----------------

  // get addressErrorMessage(){
  //   const address=this.form.get("address");
  //   return address;
  // }

// ------------checkBox----------------

onSubmit(){
 console.log(this.form.value);
 
  }

  ngOnInit(): void {}
}
