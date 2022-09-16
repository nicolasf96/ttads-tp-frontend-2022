import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelStoresComponent } from './panel-stores.component';

describe('PanelStoresComponent', () => {
  let component: PanelStoresComponent;
  let fixture: ComponentFixture<PanelStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
