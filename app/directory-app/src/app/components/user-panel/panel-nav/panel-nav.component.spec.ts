import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNavComponent } from './panel-nav.component';

describe('PanelNavComponent', () => {
  let component: PanelNavComponent;
  let fixture: ComponentFixture<PanelNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
