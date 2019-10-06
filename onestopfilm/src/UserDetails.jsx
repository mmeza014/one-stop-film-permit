// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import logo from './pic.PNG';

class UserDetails extends Component{

    search = (e) => {
        e.preventDefault()
        this.props.nextnextStep()
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    

    render(){

        const { values } = this.props;
        return(
            <React.Fragment>
                <h1 className="ui centered">Production Company Information</h1>

            <Button onClick={this.search}>Search Existing</Button>
            <Button onClick={this.saveAndContinue}>Register New</Button>
            </React.Fragment>
        )
    }
}

export default UserDetails;