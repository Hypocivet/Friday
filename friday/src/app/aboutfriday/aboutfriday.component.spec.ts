import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfridayComponent } from './aboutfriday.component';

describe('AboutfridayComponent', () => {
  let component: AboutfridayComponent;
  let fixture: ComponentFixture<AboutfridayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutfridayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutfridayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
