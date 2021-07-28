import { Component, Input, OnInit } from '@angular/core';
import { SubjectCountService } from '../subject-count.service';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.scss']
})
export class CompFourComponent implements OnInit {
  
  clicksTrack:any;

  constructor(private _subjectCountService:SubjectCountService) { 
    this._subjectCountService.getClicksTrack().subscribe((res)=>{
      this.clicksTrack = res;
    });
  }

  ngOnInit(): void {
  }

}
