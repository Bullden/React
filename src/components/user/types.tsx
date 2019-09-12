export enum UserChangeActions {
    DO_CHANGE = "DO_CHANGE"
}
export interface UserChangeState {
  name: string;
}

export interface UserChangeProps {
  name: string;
}
export interface UserChangeRequest {
  name: string;
}