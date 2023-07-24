import { TestBed } from '@angular/core/testing';

import { MyprojectaddService } from './myprojectadd.service';

describe('MyprojectaddService', () => {
  let service: MyprojectaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprojectaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
