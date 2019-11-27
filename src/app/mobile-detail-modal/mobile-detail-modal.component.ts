import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-mobile-detail-modal',
  templateUrl: './mobile-detail-modal.component.html',
  styleUrls: ['./mobile-detail-modal.component.scss']
})
export class MobileDetailModalComponent implements OnInit {
  public customerMobileDetail: any ={
    mobileNo: '0887440454'
  };
  constructor() { }

  ngOnInit(): void {
    // this.customerMobileDetail = this.reserveStockService.getCusMobileDetail();
  }

}
