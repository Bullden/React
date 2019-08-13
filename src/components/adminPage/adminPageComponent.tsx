import React from "react";
import SimpleTable from '../helpComponents/table'
import { AdminPageState } from "../../redux/adminPage/types";

export class AdminComponent extends React.Component<any,any> {

    render() {
        return(
            <SimpleTable />
        )
    }
}