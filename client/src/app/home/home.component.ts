import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent implements OnInit {
  rowData: Observable<object>;
  columnDefs = [
    { headerName: 'Make', field: 'make', rowGroup: true },
    { headerName: 'Price', field: 'price', editable: true },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }
}
