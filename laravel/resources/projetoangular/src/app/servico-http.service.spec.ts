import { TestBed } from '@angular/core/testing';

import { ServicoHttpService } from './servico-http.service';

describe('ServicoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoHttpService = TestBed.get(ServicoHttpService);
    expect(service).toBeTruthy();
  });
});
