import React from "react";
// import {UsersTable} from '../helpComponents/table'
import SimpleTable from '../helpComponents/table'
import { AdminPageState } from "../../redux/adminPage/types";

export class AdminComponent extends React.Component<any,any> {

    render() {
        return(
            // <div>
            //    <UsersTable />
            // </div>
            <SimpleTable />
        )
    }
}