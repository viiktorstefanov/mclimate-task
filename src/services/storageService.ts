export const storageService = {
    get: (key: string): string | null => localStorage.getItem(key),
  
    set: (key: string, value: string): void => {
      localStorage.setItem(key, value);
    },
  
    remove: (key: string): void => {
      localStorage.removeItem(key);
    },
  
    clearAuthData: (): void => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('expires_in');
    }
  };
  