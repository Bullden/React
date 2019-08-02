import React from 'react'
import './signIn.css'
interface VerificationProps {
    password: string,
    repeatPassword: string
}
// interface FormValues {
//     [key:string]: any
// }

export class Verification extends React.Component<VerificationProps,any> {
    constructor(props:VerificationProps){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            password:'',
            repeatPassword:'',
            name:'',
            surname:'',
            email:'',
        };
    }
    handleClick:any=()=> {
        console.log(this.state)
    }
    // require:any=() {
    //      this.state = this.setState   
    // }
    onChange(event : any){
        this.setState ({[event.target.name]: event.target.value} as any)
    }
    // valueState:any =(VerificationProps)=> {
    //    this.setState.password 
    // }
    render() {
        return (
            <div className = 'wrapp-verification'>
                <div className = 'verification'>
                    <label>
                        <span>Name</span>
                        <input type ='text' name = 'name' value={this.state.name} onChange={this.onChange}></input>
                    </label>
                </div>
                <div className = 'verification'>
                    <label>
                        <span>Surname</span>
                        <input type ='text' name = 'surname' value={this.state.surname} onChange={this.onChange}></input>
                    </label>
                </div>
                <div className = 'verification'>
                    <label>
                        <span>Email</span>
                        <input type ='text' name = 'email' value={this.state.email} onChange={this.onChange}></input>
                    </label>
                </div>
                <div className = 'verification'>
                    <label>
                        <span>Password</span>
                        <input type ='text'  name='password' value={this.state.password} onChange={this.onChange}/>
                    </label>    
                </div>
                <div className = 'verification'>
                    <label>
                        <span>Repeat Password</span>
                        <input type = 'text' name='repeatPassword' value={this.state.repeatPassword} onChange={this.onChange}></input>
                    </label>   
                </div>

                <button
                 type='button' 
                 onClick={this.handleClick}>
                click
                 </button> 
            </div>
        )

    }
}
export default Verification