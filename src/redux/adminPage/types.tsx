import {BaseState} from '../../types/baseState'

export enum AdminPageActions {
    ADMIN_INIT = "ADMIN_INIT",
}

export interface AdminPageState extends BaseState {
    enviroment: string;
    token: any;
  }