import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit {
  @Input() countDownTimer:any;
  constructor() { }

  ngOnInit(): void {
  }

}
