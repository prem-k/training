import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  containers:any = [];

  constructor() { }

  ngOnInit(): void {
    this.add();
    let limitBottom = 400; // document.documentElement.offsetHeight - window.innerHeight;
    window.addEventListener("scroll", ()=>{
      if((document.documentElement.scrollTop + window.innerHeight) >  (document.documentElement.offsetHeight - 200) ) {
        this.add();
      }
    })
  }

  add() {
    let len = this.containers.length;
    for(let i = len; i<= (len + 20) ; i++) {
      this.containers.push(i);
    }
  }

  clickMe(num:any) {
    alert('Button ' + (num + 1) + ' is clicked');
  }

}
