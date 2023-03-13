import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesOfStoreComponent } from './images-of-store.component';

describe('ImagesOfStoreComponent', () => {
  let component: ImagesOfStoreComponent;
  let fixture: ComponentFixture<ImagesOfStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesOfStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesOfStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
