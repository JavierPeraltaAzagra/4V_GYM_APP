import { TestBed } from '@angular/core/testing';

import { PopupEditService } from './popup-edit.service';

describe('PopupEditService', () => {
  let service: PopupEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
