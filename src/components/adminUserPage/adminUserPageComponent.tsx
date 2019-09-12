import React from "react";
// import {UsersTable} from '../helpComponents/table'
import SimpleTable from '../helpComponents/table'
import { AdminPageState } from "../../redux/adminPage/types";
import { Redirect } from "react-router";

export class AdminUserComponent extends React.Component<any,any> {

    render() {
        const local:any = localStorage.getItem('user')
        const parceLocal = JSON.parse(local)
        return( parceLocal.role === '5d71013d1c9d4400006eedba' ?
            <SimpleTable /> : <Redirect to='/login' />
        )
    }
}