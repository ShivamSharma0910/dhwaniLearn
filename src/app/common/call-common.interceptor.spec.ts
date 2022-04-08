import { TestBed } from '@angular/core/testing';

import { CallCommonInterceptor } from './call-common.interceptor';

describe('CallCommonInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CallCommonInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CallCommonInterceptor = TestBed.inject(CallCommonInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
