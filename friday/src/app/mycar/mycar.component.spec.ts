import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycarComponent } from './mycar.component';

describe('MycarComponent', () => {
  let component: MycarComponent;
  let fixture: ComponentFixture<MycarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
