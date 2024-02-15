import { TestBed } from '@angular/core/testing';

import { PanelAuthGuard } from './panel-auth.guard';

describe('PanelAuthGuard', () => {
  let guard: PanelAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PanelAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
