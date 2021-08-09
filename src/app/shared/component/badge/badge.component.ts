import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
})
export class BadgeComponent implements OnInit {
  constructor() {}
  @Input()
  badge: any = '5';

  ngOnInit(): void {}
}
