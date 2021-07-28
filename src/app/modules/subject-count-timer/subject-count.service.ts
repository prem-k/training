import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectCountService {

  constructor() { }

  startTimer$ = new Subject();
  setCountDownTimer$ = new Subject();
  countDownTimer$ = new Subject();
  reset$ = new Subject();
  logs$ = new Subject();
  pausedArr$ = new Subject();
  clicksTrack$ = new Subject();

  setStartTimer(val:boolean) {
    this.startTimer$.next(val);
  }

  getStartTimer() {
    return this.startTimer$;
  }

  setCountDownTimer(val:number) {
    this.countDownTimer$.next(val);
  }

  getCountDownTimer() {
    return this.countDownTimer$;
  }

  setReset(val:boolean) {
    this.reset$.next(val);
  }

  getReset() {
    return this.reset$;
  }

  setLogs(val:any) {
    this.logs$.next(val);
  }

  getLogs() {
    return this.logs$;
  }

  setPaused(val:any) {
    this.pausedArr$.next(val);
  }

  getPaused() {
    return this.pausedArr$;
  }

  setClicksTrack(val:any) {
    this.clicksTrack$.next(val);
  }

  getClicksTrack() {
    return this.clicksTrack$;
  }
}
