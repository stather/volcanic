import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import PlainTextInput from '../grommet/PlainTextInput';
import {cellNumber, email} from '../../validation/FieldValidation';

class ContactForm extends Component {
  static propTypes = {};

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit} className='contact-contact-form'>
        <Header>
          <Heading>New Contact</Heading>
        </Header>
        <FormFields>
          <div>
            <Field name="firstName" component={PlainTextInput} type="text" label="First Name" />
          </div>
          <div>
            <Field name="lastName" component={PlainTextInput} type="text" label="Last Name" />
          </div>
          <div>
            <Field name="email" component={PlainTextInput} type="email" label="Email" validate={[email]}/>
          </div>
          <div>
            <Field name="mainCell" component={PlainTextInput} type="text" label="Cell" validate={[cellNumber]} />
          </div>
          <Footer pad={{ vertical: 'medium' }}>
            <Button type="submit" primary={true}>
              Submit
            </Button>
          </Footer>
        </FormFields>
      </Form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact', // a unique name for this form
})(ContactForm);

export default ContactForm;
