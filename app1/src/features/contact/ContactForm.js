import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

class MyCustomInput extends Component {
  render() {
    const { input: { value, onChange, label } } = this.props
    return (
          <FormField label={label}>
      <TextInput value={value} defaultValue='val'/>
    </FormField>
      // <div>
      //   <span>The current value is {value}.</span>
      //   <button type="button" onClick={() => onChange(value + 1)}>Inc</button>
      //   <button type="button" onClick={() => onChange(value - 1)}>Dec</button>
      // </div>
    )
  }
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <FormField label={label}>
      <TextInput />
    </FormField>
  // <TextField hintText={label}
  //   floatingLabelText={label}
  //   errorText={touched && error}
  //   {...input}
  //   {...custom}
  ///>
)


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
            <Field name="lastName" component={renderTextField} type="text" label='Last Name' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <Footer pad={{ "vertical": "medium" }}>
            <button type="submit">Submit</button>
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