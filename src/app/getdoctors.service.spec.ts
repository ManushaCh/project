import { TestBed } from '@angular/core/testing';

import { GetdoctorsService } from './getdoctors.service';

describe('GetdoctorsService', () => {
  let service: GetdoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
