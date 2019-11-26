import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-mobile-detail-modal',
  templateUrl: './mobile-detail-modal.component.html',
  styleUrls: ['./mobile-detail-modal.component.scss']
})
export class MobileDetailModalComponent implements OnInit {
  // public customerMobileDetail: CustomerMobileDetail;
  constructor() { }

  ngOnInit(): void {
    // this.customerMobileDetail = this.reserveStockService.getCusMobileDetail();
  }

}
