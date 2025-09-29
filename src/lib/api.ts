// api.ts
import axios from 'axios';

export async function fetchUser(id: number) {
  const res = await axios.get(`/api/users/${id}`);
  return res.data;
}
