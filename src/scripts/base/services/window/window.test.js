import windowService from './window';

describe('Window Service', () => {
  it('should get viewport width', () => {
    expect(windowService.getViewportWidth()).toEqual(window.innerWidth);
  });
});
