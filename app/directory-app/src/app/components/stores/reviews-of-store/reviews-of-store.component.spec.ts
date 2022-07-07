import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsOfStoreComponent } from './reviews-of-store.component';

describe('ReviewsOfStoreComponent', () => {
  let component: ReviewsOfStoreComponent;
  let fixture: ComponentFixture<ReviewsOfStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsOfStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsOfStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
