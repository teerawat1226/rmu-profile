import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-weerapol',
  templateUrl: './profile-weerapol.component.html',
  styleUrls: ['./profile-weerapol.component.css']
})
export class ProfileWeerapolComponent implements OnInit {

  public title = 'Profile';
  public profile = {
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
  public skills = {
    frontEnd: {
      css: 'css',
      angular: 'angular'
    },
    backEnd: {
      node: 'node.js',
      ts: '.ts'
    },
    tools: {
      git: 'github',
      node: 'node.js'
    }
  };
  public nameEn: string;
  public nameTh: string;
  public address: string;
  public frontEnd: string;
  public backEnd: string;
  public tools: string;
  public name: string;

  constructor() { }

  ngOnInit() {
    this.xxx();
  }

  xxx() {
    this.nameEn = this.profile.titleNameEn + this.profile.firstNameEn + ' ' + this.profile.lastNameEn;
    this.nameTh = this.profile.titleName + this.profile.firstName + ' ' + this.profile.lastName;
    this.address = this.profile.homeNo + 'หมู่' + this.profile.moo + ' บ้าน' + this.profile.mooBan + ' ตำบล' +
      this.profile.tumbol + ' อำเภอ' + this.profile.amphur + ' จังหวัด' + this.profile.province + ' ' + this.profile.zipCode;
    this.frontEnd = this.skills.frontEnd.angular + ', ' + this.skills.frontEnd.css;
    this.backEnd = this.skills.backEnd.node + ', ' + this.skills.backEnd.ts;
    this.tools = this.skills.tools.git + ', ' + this.skills.tools.node;
  }

}
