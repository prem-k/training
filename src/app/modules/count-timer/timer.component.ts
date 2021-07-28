import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  countDownTimer = 10;
  logs:any = [ ];
  pausedArr:any = [];
  clicksTrack = {
    start : 0,
    paused: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  myVar:any;
  counterFn(start:any) {
    if(this.countDownTimer > 0) {
      if(start) {
        this.myVar = setInterval((val:any)=>{
          this.countDownTimer -= 1;
          if(this.countDownTimer == 0) { 
            clearInterval(this.myVar);
          }
        }, 100);
        this.clicksTrack.start += 1;
        let log = { action : 'Start', date : new Date() };
        this.logs.push(log);
      } else {
        clearInterval(this.myVar);
        this.clicksTrack.paused += 1;
        this.pausedArr.push(this.countDownTimer);
        let log = { action : 'Paused', date : new Date() };
        this.logs.push(log);
      }
    } else {
      clearInterval(this.myVar);
    }
  }

  setTimerFn(num:any) {
    this.countDownTimer = num;
  }

  reset(is:boolean) {
    this.countDownTimer = 0;
    this.logs = [ ];
    this.pausedArr = [];
    this.clicksTrack = {
      start : 0,
      paused: 0
    };
    clearInterval(this.myVar);
  }

}
