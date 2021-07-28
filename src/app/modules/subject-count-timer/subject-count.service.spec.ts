import { TestBed } from '@angular/core/testing';

import { SubjectCountService } from './subject-count.service';

describe('SubjectCountService', () => {
  let service: SubjectCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
