import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/reserve-stock.service';
import { Router } from '@angular/router';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent implements OnInit {
  public data: {};
  checkoutForm;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    // private formBuilder: FormBuilder,
  ) {


  }

  ngOnInit() {
   
  }

  public send() {
    let profile = {
      idCardNo: '1461300151867',
      imageReadSmartCard: '14613XXXXX867',
      idCardType: 'บัตรประชาชน',
      titleName: 'นาย',
      firstName: 'วีรพล',
      lastName: 'สันประเดิม',
      nickName: 'กอล์ฟ (เฉื่อย ต่อ แมว)',
      birthdate: '14/11/2538',
      gender: 'ชาย',
      homeNo: '10',
      buildingName: '-',
      floor: '-',
      room: '-',
      moo: '8',
      mooBan: 'หนองกุง',
      soi: '-',
      street: '-',
      tumbol: 'สมเด็จ',
      amphur: 'สมเด็จ',
      province: 'กาฬสินธุ์',
      zipCode: '46150',
      titleNameEn: 'Mr.',
      firstNameEn: 'Weerspol',
      lastNameEn: 'Sanpradaem',
      nickNameEn: 'Golf',
      issueDate: '-',
      expireDate: '-',
    };
    this.sharedService.reserveStockData = profile;
    this.router.navigate(['/profile/homepage']);
  }


}
