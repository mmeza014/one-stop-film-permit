// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import logo from './pic.PNG';

class Location extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextnextStep()
    }

    render(){

        const { values } = this.props;
        return(

            <Form >

                <h2 className="ui centered">Location Information</h2>
                <Form.Field>
                    <label>Company Name</label>
                    <input
                    type='email'
                    placeholder='Company Name'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default Location;