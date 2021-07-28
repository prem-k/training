import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.scss']
})
export class CompThreeComponent implements OnInit {

  @Input () logs:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
