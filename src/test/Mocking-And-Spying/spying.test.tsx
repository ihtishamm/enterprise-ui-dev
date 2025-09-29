// src/test/spies-exercise.test.ts
import { describe, it, expect, vi, afterEach } from 'vitest';
import Arithmetic from '../../lib/Arithmetic';
import { log } from '../../lib/logs';

describe('Spying practice', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should spy on Arithmetic.add when multiply is called', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    const multiply = Arithmetic.multiply(2, 3);

    expect(multiply).toBe(6);

    expect(spy).toHaveBeenCalledTimes(3);

    expect(spy).toHaveBeenCalledWith(0, 2);
    expect(spy).toHaveBeenCalledWith(2, 2);
    expect(spy).toHaveBeenCalledWith(4, 2);
  });

  it('should spy on Arithmetic.multiply when double is called', () => {
    const spy = vi.spyOn(Arithmetic, 'multiply');

    const double = Arithmetic.double(5);

    expect(double).toBe(10);

    expect(spy).toHaveBeenCalledWith(5, 2);
  });

  it("should call console.log when using log with channel 'log'", () => {
    const spy = vi.spyOn(console, 'log');

    log('log', 'hello', 123);

    expect(spy).toHaveBeenCalledWith('hello', 123);
  });

  it("should call console.error when using log with channel 'error'", () => {
    const spy = vi.spyOn(console, 'error');

    log('error', 'bad');

    expect(spy).toHaveBeenCalledWith('bad');
  });
});
