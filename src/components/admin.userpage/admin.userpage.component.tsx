import React from "react";
import SimpleTable from '../help.components/table'
import { Redirect } from "react-router";

export class AdminUserComponent extends React.Component<any,any> {

    render() {
        const local: any = localStorage.getItem("user");
        const roleLocal = JSON.parse(local).permissions
        const perm = roleLocal.find((x: any) => { return x})
        return( perm === 'admin' ?
            <SimpleTable /> : <Redirect to='/login' />
        )
    }
}