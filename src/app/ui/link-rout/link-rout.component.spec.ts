import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRoutComponent } from './link-rout.component';

describe('LinkRoutComponent', () => {
  let component: LinkRoutComponent;
  let fixture: ComponentFixture<LinkRoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkRoutComponent]
    });
    fixture = TestBed.createComponent(LinkRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
