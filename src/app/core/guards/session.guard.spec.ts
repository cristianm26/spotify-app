import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SessionGuard } from './session.guard';
// Es el nombre de la prueba
describe('SessionGuard', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(SessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
