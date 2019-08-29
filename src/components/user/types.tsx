export enum UserChangeActions {
    DO_CHANGE = "DO_CHANGE"
}
export interface UserChangeState {
  // email: string;
  // password: string;
//   isLoading: boolean;
//   error: string;
  name: string;
  // token: any;
}

export interface UserChangeProps {
  // email: string;
  // password: string;
//   payloadFunc: Function;
  name: string;
}
export interface UserChangeRequest {
  // email: string;
  // password: string;
  name: string;
}