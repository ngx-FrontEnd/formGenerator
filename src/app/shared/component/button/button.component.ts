import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() btnName: string = 'button';
  @Input() disabled!:boolean;
  colorName = 'dodgerblue';
  // buttonClass = 'buttonStyle';
  constructor() {}

  ngOnInit(): void {}
}
