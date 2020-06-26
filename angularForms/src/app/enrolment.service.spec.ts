import { TestBed } from '@angular/core/testing';

import { EnrolmentService } from './enrolment.service';

describe('EnrolmentService', () => {
  let service: EnrolmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
