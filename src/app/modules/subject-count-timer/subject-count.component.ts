import { Component, OnInit } from '@angular/core';
import { SubjectCountService } from './subject-count.service';

@Component({
  selector: 'app-subject-count',
  templateUrl: './subject-count.component.html',
  styleUrls: ['./subject-count.component.scss']
})
export class SubjectCountComponent implements OnInit {
  
  myVar:any;
  countDownTimer = 0;
  logs:any = [ ];
  pausedArr:any = [];
  clicksTrack = {
    start : 0,
    paused: 0
  };

  constructor(private _subjectCountService:SubjectCountService) { 
    this._subjectCountService.getCountDownTimer().subscribe((res:any)=>{
      this.countDownTimer = res;
    });
    this._subjectCountService.getStartTimer().subscribe((start:any)=>{
      if(this.countDownTimer > 0) {
        this.counterFn(start);
      }
    });
    this._subjectCountService.getReset().subscribe((reset:any)=>{
      this.reset(reset);
    });
  }

  ngOnInit(): void {

  }

  counterFn(start:any) {
    if(start) {
      this.myVar = setInterval((val:any)=>{
        this.countDownTimer -= 1;
        if(this.countDownTimer > -1) {
          this._subjectCountService.setCountDownTimer(this.countDownTimer);
        } else {
          clearInterval(this.myVar);
        }
      }, 100);
      this.clicksTrack.start += 1;
      this._subjectCountService.setClicksTrack(this.clicksTrack);
      let log = { action : 'Start', date : new Date() };
      this.logs.push(log);
      this._subjectCountService.setLogs(this.logs);
    } else {
      clearInterval(this.myVar);
      this.clicksTrack.paused += 1;
      this._subjectCountService.setClicksTrack(this.clicksTrack);
      this.pausedArr.push(this.countDownTimer);
      this._subjectCountService.setPaused(this.pausedArr);
      let log = { action : 'Paused', date : new Date() };
      this.logs.push(log);
      this._subjectCountService.setLogs(this.logs);
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
    this._subjectCountService.setCountDownTimer(this.countDownTimer);
    this._subjectCountService.setClicksTrack(this.clicksTrack);
    this._subjectCountService.setPaused(this.pausedArr);
    this._subjectCountService.setLogs(this.logs);
    clearInterval(this.myVar);
  }

}
