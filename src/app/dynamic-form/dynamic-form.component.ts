import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})


export class DynamicFormComponent implements OnInit {

  // @ViewChild('menuBar') menuPosition: any;

  form: FormGroup;
  arr: FormArray;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      arr: fb.array([this.storeValue])
    })
  }

  field = this.fb.group({
    title: [],
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


  storeValue: textField[] = [];

  controlsType: any;

  headerPosition: boolean = false;
  downloadAppPossition: boolean = true;

  // @HostListener('window:scroll')
  // onScroll(event: any) {
  //   // console.log('events ', event);
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //     // console.log('scrol');
  //     this.headerPosition = true;
  //     // this.downloadAppPossition = true;

  //   } else {
  //     // console.log('Not scrol');
  //     this.headerPosition = false;
  //     // this.downloadAppPossition = false;

  //   }

  // }
  topScroll() {
    window.scroll(0, 0);
    document.documentElement.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  @HostListener('window:scroll', ['$event'])
  // @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    // console.log('Window :: ', document.documentElement.scrollTop);
    // console.log('Body :: ', document.body.scrollTop);
    // console.log('body :: ', document.body.scrollHeight);

    // console.log('ScroolTop :: ', document.documentElement.scrollTop);
    // console.log('ClientHeight :: ', document.documentElement.clientHeight);
    // console.log('ScrollHeight:: ', document.documentElement.scrollHeight);

    // console.log(' windows ScroolTop :: ', window.document.documentElement.scrollTop);
    // console.log(' windows ClientHeight :: ', window.document.documentElement.clientHeight);
    // console.log(' windows ScrollHeight:: ', window.document.documentElement.scrollHeight);
    // console.log(' scrollY:: ', window.scrollY);

    // console.log('InnerHeight off:: ', window.document.documentElement.offsetHeight);
    // console.log('InnerHeight :: ', window.innerHeight);

    console.log(window.innerHeight + window.scrollY);
    console.log(window.document.documentElement.scrollHeight);


    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      // console.log('scrol');
      this.headerPosition = true;
    } else {
      // console.log('Not scrol');
      this.headerPosition = false;
    }

    // tslint:disable-next-line: triple-equals
    if (window.innerHeight + window.scrollY == window.document.documentElement.scrollHeight) {
      this.downloadAppPossition = false;
    } else {
      console.log('Not PWA');
      this.downloadAppPossition = true;

    }
  }


  // @HostListener('scroll') downloadApp(event: any) {


  // let ClientHeight: number = document.documentElement.clientHeight;
  // let ScroolTop: number = document.documentElement.scrollTop;
  // let ScrollHeight: number = document.documentElement.scrollHeight;
  // let total = ScroolTop + ClientHeight;
  // let s :number = ScrollHeight.toFixed();
  // console.log(ClientHeight);
  // console.log(ScroolTop);
  // console.log("T :: ", ScroolTop + ClientHeight);
  // console.log("Total :: ", total.toFixed());
  // console.log(typeof ScrollHeight);
  // console.log(typeof total);



  // if (ScrollHeight == ScrollHeight) {
  //   // this.downloadAppPossition = true;
  //   console.log("PWA");
  // }
  // else {
  //   console.log('Not PWA');
  //   // this.downloadAppPossition = false;

  // }
  // }


  // PWA in App
  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }
  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }
  addToHomeScreen1() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

  // ----------------------------------------------

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
    let title = this.field.get('title').value;
    let label = this.field.get('label').value;
    let type = this.field.get('type').value;
    let placeholder = this.field.get('placeholder').value;
    let describe = this.field.get('describe').value;
    let defaults = this.field.get('defaults').value;
    let max = this.field.get('max').value;
    let min = this.field.get('min').value;
    let required = this.field.get('required').value;

    return { title, label, type, placeholder, describe, defaults, max, min, required };
  }


  onChange(type: any) {
    this.controlsType = type;
  }

  onSubmit() {
    // alert(JSON.stringify(this.form.value));
  }
  submit() {
    alert(JSON.stringify(this.storeValue));
  }
  ngOnInit(): void { }
}

export interface textField {
  title: any,
  label: any,
  type: any,
  placeholder: any,
  describe: any,
  defaults: any,
  required: any,
  min: number,
  max: number,
}
