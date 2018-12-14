import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBrowseComponent } from './recent-browse.component';

describe('RecentBrowseComponent', () => {
  let component: RecentBrowseComponent;
  let fixture: ComponentFixture<RecentBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
