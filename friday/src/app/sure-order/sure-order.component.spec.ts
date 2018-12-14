import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SureOrderComponent } from './sure-order.component';

describe('SureOrderComponent', () => {
  let component: SureOrderComponent;
  let fixture: ComponentFixture<SureOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SureOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SureOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
