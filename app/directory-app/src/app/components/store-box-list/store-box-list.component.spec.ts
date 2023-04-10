import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBoxListComponent } from './store-box-list.component';

describe('StoreBoxListComponent', () => {
  let component: StoreBoxListComponent;
  let fixture: ComponentFixture<StoreBoxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreBoxListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
