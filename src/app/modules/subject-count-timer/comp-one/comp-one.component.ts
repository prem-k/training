import { Component, Input, OnInit } from '@angular/core';
import { SubjectCountService } from '../subject-count.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit {
  countDownTimer:any = 0;

  constructor(public _subjectCountService:SubjectCountService) { 
    this._subjectCountService.getCountDownTimer().subscribe((res:any)=>{
      this.countDownTimer = res;
    });
  }

  ngOnInit(): void {
  }

}
