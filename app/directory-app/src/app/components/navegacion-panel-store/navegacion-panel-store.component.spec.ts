import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionPanelStoreComponent } from './navegacion-panel-store.component';

describe('NavegacionPanelStoreComponent', () => {
  let component: NavegacionPanelStoreComponent;
  let fixture: ComponentFixture<NavegacionPanelStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionPanelStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionPanelStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
