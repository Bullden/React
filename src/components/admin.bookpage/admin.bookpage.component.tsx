import React from "react";
import SimpleTable from './admin.book.table'
import { Redirect } from "react-router";
export class AdminBookComponent extends React.Component<any,any> {
    render() {
        const local: any = localStorage.getItem("user");
        const roleLocal = JSON.parse(local).permissions
        const perm = roleLocal.find((x: any) => { return x})
        return( perm === 'admin' ?
            <div><SimpleTable /></div> : <Redirect to='/login' />
        )
    }
}