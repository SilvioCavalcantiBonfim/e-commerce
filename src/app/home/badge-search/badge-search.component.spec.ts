import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSearchComponent } from './badge-search.component';

describe('BadgeSearchComponent', () => {
  let component: BadgeSearchComponent;
  let fixture: ComponentFixture<BadgeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
