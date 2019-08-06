export enum RegistrationActions {
  DO_REGISTRATION = "DO_REGISTRATION",
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  REGISTRATION_FAILED = "REGISTRATION_FAILED"
}

export interface RegistrationState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
  name: string;
}

export interface DoRegistrationProps {
  email: string;
  password: string;
  payloadFunc: Function;
  name: string;
}

export interface RegistrationRequest {
  email: string;
  password: string;
  name: string;
}
export interface ResultApiUser {
  id: number;
  email: string;
  password: string;
  name: string;
  userPhoto: string;
  data: string;
}
