import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

export default class PlainTextInput extends Component {
  static propTypes = {};

  render() {
    const { input, label, meta: { touched, error, warning } } = this.props;

    return (
      <div className='grommet-plain-text-input'>
        <FormField label={label} {...input} error={error}>
          <TextInput  />
        </FormField>
      </div>
    );
  }
}
