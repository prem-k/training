import { Component, Input, OnInit } from '@angular/core';
import { SubjectCountService } from '../subject-count.service';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.scss']
})
export class CompThreeComponent implements OnInit {

  logs:any = [];
  constructor(private _subjectCountService:SubjectCountService) { 
    this._subjectCountService.getLogs().subscribe((res)=>{
      this.logs = res;
    });
  }

  ngOnInit(): void {
  }

}
