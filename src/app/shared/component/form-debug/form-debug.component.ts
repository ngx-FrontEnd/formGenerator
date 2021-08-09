import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Form, FormGroup } from "@angular/forms";
import { MatTab, MatTabGroup } from "@angular/material/tabs";

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() model!:any;

  submittedValue = null;
  isExpanded = false;
  selectedIndex = 0;
  submittedDate = null;

  @ViewChild(MatTabGroup, { static: true }) tabGroup!: MatTabGroup;

  constructor() {}

  ngOnInit() {
    this.isExpanded = sessionStorage.getItem("debug-expanded") === "true";
  }

  onExpandedChange(isExpanded :any) {
    sessionStorage.setItem("debug-expanded", isExpanded);
  }

}
