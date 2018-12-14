import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OemptyComponent } from './oempty.component';

describe('OemptyComponent', () => {
  let component: OemptyComponent;
  let fixture: ComponentFixture<OemptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OemptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
