import { User } from "src/types/user";

export enum ChangeUserActions {
    DO_CHANGEUSER = "DO_CHANGEUSER",
    USER_INIT = "USER_INIT",
    USER_FOR_DELETE = "USER_FOR_DELETE"
}
export interface ChangeUserState {
  email:string;  
  name: string;
  users: Array<User>;
  user: object
}
export interface UserInitRequest {
  users: Array<User>
}
export interface ChangeUserProps {
  email:string; 
  name: string;
}
export interface ChangeUserRequest {
  email:string; 
  name: string;
}
export interface UserForDelete {
  user: object
}