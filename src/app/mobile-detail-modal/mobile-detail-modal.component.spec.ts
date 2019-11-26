import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDetailModalComponent } from './mobile-detail-modal.component';

describe('MobileDetailModalComponent', () => {
  let component: MobileDetailModalComponent;
  let fixture: ComponentFixture<MobileDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
