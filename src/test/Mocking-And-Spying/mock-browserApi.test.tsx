// storage.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { storage } from '../../lib/storage';

describe('storage', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'setItem');
    vi.spyOn(Storage.prototype, 'getItem');
    vi.spyOn(Storage.prototype, 'clear');
  });

  it('should save an item to localStorage', () => {
    storage.save('theme', 'dark');
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should load an item from localStorage', () => {
    localStorage.getItem('theme');
    const result = storage.load('theme');
    expect(result).toBe('dark');
  });

  it('should clear all items from localStorage', () => {
    const spy = vi.spyOn(Storage.prototype, 'clear');

    storage.clear();

    expect(spy).toHaveBeenCalled();
  });
});
