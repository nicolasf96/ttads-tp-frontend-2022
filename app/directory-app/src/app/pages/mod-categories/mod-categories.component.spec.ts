import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCategoriesComponent } from './mod-categories.component';

describe('ModCategoriesComponent', () => {
  let component: ModCategoriesComponent;
  let fixture: ComponentFixture<ModCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
