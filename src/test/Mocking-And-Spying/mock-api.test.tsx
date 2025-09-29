import { vi } from 'vitest';
import axios from 'axios';
import { fetchUser } from '../../lib/api';

vi.mock('axios');
describe('fetchUser (axios)', () => {
  it('should call axios.get with correct URL', async () => {
    // Arrange
    const mockGet = vi
      .mocked(axios.get)
      .mockResolvedValueOnce({ data: { id: 42 } });
    await fetchUser(42);
    expect(mockGet).toHaveBeenCalledWith('/api/users/42');
  });

  it('should return data on success', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({
      data: { id: 42, name: 'Alice' },
    });
    const result = await fetchUser(42);
    expect(result).toEqual({ id: 42, name: 'Alice' });
  });

  it('should throw error when axios rejects', async () => {
    vi.mocked(axios.get).mockRejectedValueOnce(new Error('Network fail'));
    await expect(fetchUser(42)).rejects.toThrow('Network fail');
  });
});
