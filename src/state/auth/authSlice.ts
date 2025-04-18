import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginStateData } from '../../services/authService';
import { storageService } from '../../services/storageService';

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  accessToken: storageService.get('access_token'),
  refreshToken: storageService.get('refresh_token'),
  expiresIn: parseInt(storageService.get('expires_in') || '0', 10) || null,
  isAuthenticated: false,
};


if (initialState.accessToken && initialState.expiresIn) {
  const currentTime = Math.floor(Date.now() / 1000); 

  if (initialState.expiresIn <= currentTime) {
    initialState.isAuthenticated = false;
    initialState.accessToken = null;
    initialState.refreshToken = null;
    initialState.expiresIn = null;
    storageService.clearAuthData();
  } else {

    initialState.isAuthenticated = true;
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginStateData>) => {
      const { accessToken, refreshToken, expiresIn } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.expiresIn = expiresIn;
      state.isAuthenticated = true;

      storageService.set('access_token', accessToken);
      storageService.set('refresh_token', refreshToken);
      storageService.set('expires_in', expiresIn.toString());
    },
    clearUser: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.expiresIn = null;
      state.isAuthenticated = false;

      storageService.clearAuthData();
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
