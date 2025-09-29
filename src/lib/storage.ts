export const storage = {
  save(key: string, value: string) {
    localStorage.setItem(key, value);
  },
  load(key: string) {
    return localStorage.getItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
