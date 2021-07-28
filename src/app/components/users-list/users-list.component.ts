import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:any = [];
  constructor(private apiService:ApiService) { }
  order = 'asc';

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe((res:any)=>{
      this.users = res.data;
      console.log('res', res);
    });
  }

  sort(property:any) {
    if(this.order == 'asc') {
      this.order = 'desc';
      property = '-' + property;
    } else {
      this.order = 'asc';
    }
    this.users.sort(this.dynamicSort(property))
  }

  dynamicSort(property:any) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a:any, b:any) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
 
}
