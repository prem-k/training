import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubjectCountService } from '../subject-count.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss']
})
export class CompTwoComponent implements OnInit {

  pausedArr:any = [];
  callBack = new EventEmitter();
  setTimerCallBack = new EventEmitter();
  resetCallBack = new EventEmitter();

  timerLimit = 0;
  start = false;

  constructor(public _subjectCountService:SubjectCountService) { 
    this._subjectCountService.getPaused().subscribe((res:any)=>{
      this.pausedArr = res;
    });
  }

  ngOnInit(): void {

  }

  startFn() {
    this.start = !this.start;
   // this.callBack.emit(this.start);
    this._subjectCountService.setStartTimer(this.start);
  }

  setTimerFn(timer:any) {
    this.timerLimit = timer;
    //this._subjectCountService.setCountDownTimer(this.timerLimit);
  }

  onChange() {
    //this.setTimerCallBack.emit(this.timerLimit);
    this._subjectCountService.setCountDownTimer(this.timerLimit);
  }

  reset() {
    this.timerLimit = 0;
    //this.resetCallBack.emit(true); 
    this._subjectCountService.setReset(true); 
  }

}
