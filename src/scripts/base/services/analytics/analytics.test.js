import ENV from '@environment';
import Staly from '@compilorama/staly';
import { stalyMock, stalyInstanceMock } from '@scripts/base/mocks/staly';
import analyticsService from './analytics';

jest.mock('@compilorama/staly');
Staly.mockImplementation(stalyMock);

describe('Analytics Service', () => {
  beforeEach(() => {
    stalyInstanceMock.init = jest.fn();
    stalyInstanceMock.trackPageview = jest.fn();
  });

  it('should initialize staly', () => {
    analyticsService.init();
    expect(stalyInstanceMock.init).toHaveBeenCalledWith(
      ENV.ANALYTICS.PLAUSIBLE.DOMAIN, {
        trackLocalhost: false
      }
    );
    expect(stalyInstanceMock.trackPageview).toHaveBeenCalledTimes(0);
  });

  it('should track page view', () => {
    analyticsService.init();
    analyticsService.trackPageView();
    expect(stalyInstanceMock.trackPageview).toHaveBeenCalledTimes(1);
  });
});
