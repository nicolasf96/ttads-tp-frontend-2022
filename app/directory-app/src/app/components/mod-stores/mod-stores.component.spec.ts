import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModStoresComponent } from './mod-stores.component';

describe('ModStoresComponent', () => {
  let component: ModStoresComponent;
  let fixture: ComponentFixture<ModStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
