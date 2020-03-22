import React, { Component } from "react";

import Login from "./Login";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    //CALLS handleLogin() FUNCTION DEFINED IN APP.JS

    handleSuccessfulAuth(data) {
        console.log(data);
        this.props.handleLogin(data);
        if (data.hasOwnProperty('logged_in')) {
            const jwt = data.jwt;
            const firstName = data.emp.firstName;
            const lastName = data.emp.lastName;
            const punch = data.emp.punch;
            const idcomp = data.emp.idcomp;
            const idemp = data.emp.idemp;
            //SETS THE CURRENT TIME PUNCH RECORD IDTIME_PUNCH TO LOCAL STORAGE
            const punches = [(data.time_punch[0])['idtime_punch']];

            localStorage.setItem('jwt', jwt);
            localStorage.setItem('firstName',firstName);
            localStorage.setItem('lastName',lastName);
            localStorage.setItem('punch',punch);
            localStorage.setItem('idcomp',idcomp);
            localStorage.setItem('idemp', idemp);
            localStorage.setItem('idtime_punch', punches);
            this.props.history.push("/profile");

        } else if (data.hasOwnProperty('logged_in_manager')) {
            const jwt = data.jwt;
            const firstName = data.emp.firstName;
            const lastName = data.emp.lastName;
            const punch = data.emp.punch;
            const idcomp = data.emp.idcomp;
            const idemp = data.emp.idemp;

            localStorage.setItem('jwt', jwt);
            localStorage.setItem('firstName',firstName);
            localStorage.setItem('lastName',lastName);
            localStorage.setItem('punch',punch);
            localStorage.setItem('idcomp',idcomp);
            localStorage.setItem('idemp', idemp);
            this.props.history.push("/manager");

        } else if (data.hasOwnProperty('logged_in_admin')) {
            const jwt = data.jwt;
            const firstName = data.emp.firstName;
            const lastName = data.emp.lastName;
            const punch = data.emp.punch;
            const idcomp = data.emp.idcomp;
            const idemp = data.emp.idemp;

            localStorage.setItem('jwt', jwt);
            localStorage.setItem('firstName',firstName);
            localStorage.setItem('lastName',lastName);
            localStorage.setItem('punch',punch);
            localStorage.setItem('idcomp',idcomp);
            localStorage.setItem('idemp', idemp);
            this.props.history.push("/admin");
        }
    }

    //CURRENTLY RENDERS ONLY LOGIN COMPONENT ON DEFAULT PATH
    //LOGIN COMPONENT WIRED HERE TO AUTHENTICATE SUCCESSFUL LOGIN & REDIRECT

    render() {
        return (
            <div class="grid">
                <div class="col-12-12">
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </div>
            </div>
        );
    }
}
//export default Home;