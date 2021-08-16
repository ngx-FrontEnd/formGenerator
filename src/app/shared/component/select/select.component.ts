import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @HostBinding('style.color') color = 'green';

  @HostListener('click') change() {
    this.color = 'red';
  }

  ngOnInit(): void {
  }

}
