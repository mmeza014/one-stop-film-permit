import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import logo from './pic.PNG';

class Existing extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const { values } = this.props;
        return(
            
            <React.Fragment>
                             <h1 className="ui centered">Existing Production</h1>

     <form>
       <input
         placeholder="Search for..."
         ></input>
     </form>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save and Continue</Button>
            </React.Fragment>
            )
    }
}

export default Existing;