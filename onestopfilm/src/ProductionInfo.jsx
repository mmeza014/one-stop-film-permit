// PersonalDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class ProductionInfo extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Production Details</h1>
            <Form.Field>
                <label>Production Title</label>
                <input placeholder='Production Title'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
            </Form.Field>
            <Form.Field>
                <label>Production Type</label>
                <input placeholder='Production Type'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>Extras</label>
                <input placeholder='Extras'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Cast</label>
                <input placeholder='Cast'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Crew</label>
                <input placeholder='Crew'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Dollars Spent Locally</label>
                <input placeholder='Dollars Spent Locally'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Number of Production Types</label>
                <input placeholder='Number of Production Types'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Production Start Date</label>
                <input placeholder='Production Start Date'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Application Fee</label>
                <input placeholder='Application Fee'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Hotel Name</label>
                <input placeholder='Hotel Name'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>Location of Hotel</label>
                <input placeholder='Location of Hotel'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            </Form.Field>

            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default ProductionInfo;