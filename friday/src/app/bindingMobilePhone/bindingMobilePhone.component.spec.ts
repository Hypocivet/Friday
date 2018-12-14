import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingMobilePhoneComponent } from './bindingMobilePhone.component';

describe('BindingMobilePhoneComponent', () => {
  let component: BindingMobilePhoneComponent;
  let fixture: ComponentFixture<BindingMobilePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingMobilePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingMobilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
