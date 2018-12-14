import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRateComponent } from './order-rate.component';

describe('OrderRateComponent', () => {
  let component: OrderRateComponent;
  let fixture: ComponentFixture<OrderRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
