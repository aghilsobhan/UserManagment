import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalUserComponent } from './personal-user.component';

describe('PersonalUserComponent', () => {
  let component: PersonalUserComponent;
  let fixture: ComponentFixture<PersonalUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalUserComponent]
    });
    fixture = TestBed.createComponent(PersonalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
