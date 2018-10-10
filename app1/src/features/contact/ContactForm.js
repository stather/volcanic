import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

class MyCustomInput extends Component {
  render() {
    const { input, label } = this.props;

    var a = 27;
    return (
      <FormField label={label} {...input}>
        <TextInput />
      </FormField>

    )
  }
}


class ContactForm extends Component {
  static propTypes = {

  };


  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Header>
          <Heading>
            Sample Header
    </Heading>
        </Header>
        <FormFields>
          <div>
            <Field name="firstName" component={MyCustomInput} type="text" label='First Name' />
          </div>
          <div>
            <Field name="lastName" component={MyCustomInput} type="text" label='Last Name' />
          </div>
          <div>
            <Field name="email" component={MyCustomInput} type="email" label='Email' />
          </div>
          <Footer pad={{ "vertical": "medium" }}>
            <Button type="submit" primary={true}>Submit</Button>
          </Footer>
        </FormFields>
      </Form>
    );
  }
}


ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;