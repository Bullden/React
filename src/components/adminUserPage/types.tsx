export enum ChangeUserActions {
    DO_CHANGEUSER = "DO_CHANGEUSER"
}
export interface ChangeUserState {
  email:string;  
  name: string;
 
}

export interface ChangeUserProps {
  email:string; 
  name: string;
}
export interface ChangeUserRequest {
  email:string; 
  name: string;
}