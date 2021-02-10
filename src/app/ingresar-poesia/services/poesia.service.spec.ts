import { TestBed } from '@angular/core/testing';

import { PoesiaService } from './poesia.service';

describe('PoesiaService', () => {
  let service: PoesiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoesiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
