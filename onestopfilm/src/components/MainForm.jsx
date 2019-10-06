// MainForm.jsx
import React, { Component } from 'react';
import UserDetails from '../UserDetails';
import PersonalDetails from '../PersonalDetails';
import Confirmation from './Confirmation';
import Success from '../Success';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import logo from '../pic.PNG';
import { Header } from 'semantic-ui-react';
import Existing from '../Existing';
import ExistingContact from '../ExistingContact';
import ExistingLocation from '../ExistingLocation';
import UserDetailsContact from '../UserDetailsContact';
import UserDetailsLocation from '../UserDetailsLocation';



import Location from '../Location';
import ProductionInfo from '../ProductionInfo';
import RegisterLocation from '../RegisterLocation';
import RegisterContact from '../RegisterContact';

import Register from '../Register';



class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    nextnextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 2
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
       
        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        
        switch(step) {
        case 1:
            return <React.Fragment>
            <div className="logo">
          <img src={logo} width="100%" height="10%" />
            </div>
                <ProgressBar 
                 percent={0}
                 filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" 
                 />
           <UserDetails 
                    nextStep={this.nextStep} 
                    nextnextStep={this.nextnextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
          </React.Fragment>
          
          case 2:
            return <React.Fragment>
            <div className="logo">
          <img src={logo} width="100%" height="10%" />
            </div>
                <ProgressBar
                 percent={20}
                 filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
           <Register
                    nextStep={this.nextStep} 
                    nextnextStep={this.nextnextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
          </React.Fragment>
          case 3:
            return  <React.Fragment>
            <div className="logo">
          <img src={logo} width="100%" height="10%" />
            </div>
                <ProgressBar
                 percent={20}
                 filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                 <Existing
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
                    </React.Fragment>
                     case 4:
                        return <React.Fragment>
                        <div className="logo">
                      <img src={logo} width="100%" height="10%" />
                        </div>
                            <ProgressBar 
                             percent={40}
                             filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" 
                             />
                       <UserDetailsContact 
                                nextStep={this.nextStep} 
                                nextnextStep={this.nextnextStep}
                                handleChange = {this.handleChange}
                                values={values}
                                />
                      </React.Fragment>
                                case 5:
                                    return <React.Fragment>
                                    <div className="logo">
                                  <img src={logo} width="100%" height="10%" />
                                    </div>
                                        <ProgressBar
                                         percent={40}
                                         filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                                   <RegisterContact
                                            nextStep={this.nextStep} 
                                            nextnextStep={this.nextnextStep}
                                            handleChange = {this.handleChange}
                                            values={values}
                                            />
                                  </React.Fragment>
                      
                      case 6:
                        return <React.Fragment>
                        <div className="logo">
                      <img src={logo} width="100%" height="10%" />
                        </div>
                            <ProgressBar
                             percent={40}
                             filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                       <PersonalDetails
                                nextStep={this.nextStep} 
                                nextnextStep={this.nextnextStep}
                                handleChange = {this.handleChange}
                                values={values}
                                />
                      </React.Fragment>
                       case 7:
                        return  <React.Fragment>
                        <div className="logo">
                      <img src={logo} width="100%" height="10%" />
                        </div>
                            <ProgressBar
                             percent={60}
                             filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                             <ProductionInfo
                                nextnextStep={this.nextnextStep}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                                />
                                </React.Fragment>
                      case 8:
                        return  <React.Fragment>
                        <div className="logo">
                      <img src={logo} width="100%" height="10%" />
                        </div>
                            <ProgressBar
                             percent={60}
                             filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                             <UserDetailsLocation
                                nextnextStep={this.nextnextStep}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                                />
                                </React.Fragment>
                      case 9:
                        return  <React.Fragment>
                        <div className="logo">
                      <img src={logo} width="100%" height="10%" />
                        </div>
                            <ProgressBar
                             percent={60}
                             filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                             <RegisterLocation
                                nextnextStep={this.nextnextStep}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                                />
                                </React.Fragment>
                                      
  case 10:
        return  <React.Fragment>
        <div className="logo">
      <img src={logo} width="100%" height="10%" />
        </div>
            <ProgressBar
             percent={80}
             filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
             <ExistingLocation
                nextnextStep={this.nextnextStep}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />
                </React.Fragment>
        case 11:
            return  <React.Fragment>
            <div className="logo">
          <img src={logo} width="100%" height="10%" fixed="top" />
            </div>
                <ProgressBar
                 percent={95}
                 filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" /><Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    /></React.Fragment>
        case 12:
            return  <React.Fragment>
            <div className="logo">
          <img src={logo} width="100%" height="10%" />
            </div>
                <ProgressBar
                 percent={100}
                 filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                 <Success /></React.Fragment>
        }
    }
}

export default MainForm;