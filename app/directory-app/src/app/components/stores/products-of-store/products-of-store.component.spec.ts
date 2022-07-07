import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfStoreComponent } from './products-of-store.component';

describe('ProductsOfStoreComponent', () => {
  let component: ProductsOfStoreComponent;
  let fixture: ComponentFixture<ProductsOfStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOfStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsOfStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
