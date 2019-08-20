import React from "react";
// import {UsersTable} from '../helpComponents/table'
import SimpleTable from './bookTable'
import { AdminPageState } from "../../redux/adminPage/types";

export class AdminBookComponent extends React.Component<any,any> {

    render() {
        return(
            // <div>
            //    <UsersTable />
            // </div>
            // <SimpleTable />
            <div><SimpleTable /></div>
        )
    }
}