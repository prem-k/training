import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss']
})
export class CompTwoComponent implements OnInit {

  @Input() pausedArr:any = [];
  @Output() callBack = new EventEmitter();
  @Output() setTimerCallBack = new EventEmitter();
  @Output() resetCallBack = new EventEmitter();

  timerLimit = 0;
  start = false;

  constructor() { }

  ngOnInit(): void {

  }

  startFn() {
    this.start = !this.start;
    this.callBack.emit(this.start);
  }

  setTimerFn(timer:any) {
    this.timerLimit = timer;
  }

  onChange() {
    this.setTimerCallBack.emit(this.timerLimit);
  }

  reset() {
    this.timerLimit = 0;
    this.resetCallBack.emit(true); 
  }

}
