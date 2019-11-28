import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/reserve-stock.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  data;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.sharedService.subscribeReserveStock().subscribe((res: any) => {
      console.log('LOG res', res);

      this.data = res;
      console.log('LOG data', this.data);

    }).unsubscribe();
  }

}
