import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWeerapolComponent } from './profile-weerapol.component';

describe('ProfileWeerapolComponent', () => {
  let component: ProfileWeerapolComponent;
  let fixture: ComponentFixture<ProfileWeerapolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWeerapolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWeerapolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
