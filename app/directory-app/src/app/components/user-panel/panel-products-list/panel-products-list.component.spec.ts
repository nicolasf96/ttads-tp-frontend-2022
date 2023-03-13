import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProductsListComponent } from './panel-products-list.component';

describe('PanelProductsListComponent', () => {
  let component: PanelProductsListComponent;
  let fixture: ComponentFixture<PanelProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
