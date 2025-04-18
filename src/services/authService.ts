import request from "./request";

const endpoints = {
  login: "/auth/login",
};

export type LoginResponse = {
  auth: {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string | null;
    refresh_token: string;
  };
  _links: {
    self: {
      href: string;
    };
  };
};

export type LoginData = {
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
};

export type LoginStateData = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

const login = async (data: LoginData): Promise<LoginResponse> =>
  await request.post(endpoints.login, data);

export { login };
