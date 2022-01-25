import React from "react";

export class Greeting extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            isloggin:true
        }
    }

    logout = () => {
        this.setState({
            isloggin:false
        })
    }

    login = () => {
        this.setState({
            isloggin:true
        })
    }

    handlelogin = () => {

        if(this.state.isloggin){
            this.logout();
        }
        else {
            this.login();
        }
        console.log(this.state.isloggin)
    }

    render () {
        /* 1ST RENDERING STYLE */
        // let welcomeMessage;

        // if (this.state.isloggin){
        //     welcomeMessage = (
        //         <div>
        //           <div>WELCOME JAYSON</div>
        //          <button onClick={this.handlelogin}>LOGIN / LOGOUT </button>
        //         </div>
        //     )
        // }
        // else {

        //     welcomeMessage = (
        //         <div>
        //             <div>WELCOME GUEST</div>
        //             <button onClick={this.handlelogin}>LOGIN / LOGOUT </button>            
        //         </div>
        // )
        //  }


           /* 2ND RENDERING STYLE */
         return (this.state.isloggin ?
            <div>
            <div>WELCOME JAYSON</div>
            <button onClick={this.handlelogin}>LOGIN / LOGOUT </button>
            </div>
           :
            <div>
            <div>WELCOME GUEST</div>
            <button onClick={this.handlelogin}>LOGIN / LOGOUT </button>
            </div>    )
    }
}