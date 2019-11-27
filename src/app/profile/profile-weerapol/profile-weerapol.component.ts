import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-weerapol',
  templateUrl: './profile-weerapol.component.html',
  styleUrls: ['./profile-weerapol.component.css']
})
export class ProfileWeerapolComponent implements OnInit {

  public date = {
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
  public name: string;

  constructor() { }

  ngOnInit() {
    this.xxx();
  }

  xxx() {
    this.name = this.date.titleName + this.date.firstName + " " + this.date.lastName
  }

}
