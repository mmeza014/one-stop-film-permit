// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import logo from './pic.PNG';

class RegisterContact extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextnextStep()
    }

    render(){

        const { values } = this.props;
        return(

            <Form >

                <h2 className="ui centered">New Contact Information</h2>
                <Form.Field>
                    <label>First Name</label>
                    <input
                    type='email'
                    placeholder='First Name'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                    type='email'
                    placeholder='Last Name'
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
                    <label>City</label>
                    <input
                    type='email'
                    placeholder='City'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>State/Province</label>
                    <input
                    type='email'
                    placeholder='State/Province'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Zip/Postal Code</label>
                    <input
                    type='email'
                    placeholder='Zip/Postal Code'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input
                    type='email'
                    placeholder='Country'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input
                    type='email'
                    placeholder='Phone'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Fax</label>
                    <input
                    type='email'
                    placeholder='Fax'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>E-mail Address</label>
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

export default RegisterContact;