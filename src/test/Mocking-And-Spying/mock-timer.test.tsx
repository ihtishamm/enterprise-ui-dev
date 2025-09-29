import { vi } from 'vitest';

function delayedHello(callback: () => void) {
  setTimeout(callback, 1000);
}

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe('Mocking timers', () => {
  it('should call callback after 1 second', () => {
    const spy = vi.fn();
    delayedHello(spy);

    vi.advanceTimersByTime(1000);

    expect(spy).toHaveBeenCalled();
  });
});
