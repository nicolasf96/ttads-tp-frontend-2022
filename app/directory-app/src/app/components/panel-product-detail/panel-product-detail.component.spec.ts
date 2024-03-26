import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProductDetailComponent } from './panel-product-detail.component';

describe('PanelProductDetailComponent', () => {
  let component: PanelProductDetailComponent;
  let fixture: ComponentFixture<PanelProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
