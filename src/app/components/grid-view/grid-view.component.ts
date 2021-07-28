import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  products:any = [];
  view = 'grid';

  constructor() { 
    for(let i = 1; i <=100; i++) {
      this.products.push(i);
    }
  }

  ngOnInit(): void {
  }

  setGrid(view:any) {
    this.view = view;
  }

}
