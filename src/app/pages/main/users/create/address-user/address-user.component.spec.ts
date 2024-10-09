import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressUserComponent } from './address-user.component';

describe('AddressUserComponent', () => {
  let component: AddressUserComponent;
  let fixture: ComponentFixture<AddressUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressUserComponent]
    });
    fixture = TestBed.createComponent(AddressUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
