import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

export default class PlainTextInput extends Component {
  static propTypes = {

  };

  render() {
    const { input, label } = this.props;

    return (
      <FormField label={label} {...input}>
        <TextInput />
      </FormField>

    )
  }

}
