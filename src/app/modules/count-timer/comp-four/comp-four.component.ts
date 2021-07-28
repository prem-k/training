import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.scss']
})
export class CompFourComponent implements OnInit {
  @Input() clicksTrack:any;
  constructor() { }

  ngOnInit(): void {
  }

}
