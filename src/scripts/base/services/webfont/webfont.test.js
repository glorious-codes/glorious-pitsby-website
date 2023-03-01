import { init } from './webfont';

describe('Webfont Service', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    document.head.appendChild = jest.fn();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should append webfont imports to the head asynchronously', () => {
    init();
    jest.advanceTimersByTime(199);
    expect(document.head.appendChild).not.toHaveBeenCalled();
    jest.advanceTimersByTime(200);
    expect(document.head.appendChild).toHaveBeenCalledWith(expect.objectContaining({
      innerHTML: [
        '@import url("https://fonts.googleapis.com/css?family=PT+Mono&display=swap");',
        '@import url("https://fonts.googleapis.com/css?family=Lora:400i&display=swap");'
      ].join('')
    }));
    expect(document.head.appendChild).toHaveBeenCalledTimes(1);
  });
});
