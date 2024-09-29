import { TestBed } from '@angular/core/testing';

import { MateriasService } from './materias.service.service';

describe('MateriasServiceService', () => {
  let service: MateriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
