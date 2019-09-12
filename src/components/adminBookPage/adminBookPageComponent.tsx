import React from "react";
import SimpleTable from './bookTable'
import { Redirect } from "react-router";
export class AdminBookComponent extends React.Component<any,any> {
    render() {
        const local:any = localStorage.getItem('user')
        const parceLocal = JSON.parse(local)
        return( parceLocal.role === '5d71013d1c9d4400006eedba' ?
            <div><SimpleTable /></div> : <Redirect to='/login' />
        )
    }
}