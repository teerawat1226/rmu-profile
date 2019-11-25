import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTeerawatComponent } from './profile-teerawat.component';

describe('ProfileTeerawatComponent', () => {
  let component: ProfileTeerawatComponent;
  let fixture: ComponentFixture<ProfileTeerawatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTeerawatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTeerawatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
