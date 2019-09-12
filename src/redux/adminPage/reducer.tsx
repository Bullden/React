import { RootState } from "../../redux/rootReducer";
import { AdminPageState} from "./types";

export const initialState: AdminPageState = {
    error: "",
    enviroment: "",
    token: "",
};

 export function adminPageReducer(state:AdminPageState = initialState,action:any){
    switch (action.type) {
        case `@@admin/ADMIN_INIT`: {
          return initialState;  
        } 
        default:
            return state
    }
} 
export const adminPage = (state:RootState)=> state.adminPage