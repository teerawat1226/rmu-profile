import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePanuwatComponent } from './profile-panuwat.component';

describe('ProfilePanuwatComponent', () => {
  let component: ProfilePanuwatComponent;
  let fixture: ComponentFixture<ProfilePanuwatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePanuwatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePanuwatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
