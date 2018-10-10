import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ContactForm from './ContactForm'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// input ContactInput {
//   firstName: String!
//   lastName: String!
//   email: String!
// }

const ADD_CONTACT = gql`
  mutation AddContact($contact: ContactInput!){
    addContact(contact: $contact){
      id
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export class DefaultPage extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
submit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render() {
    return (
      <Mutation mutation={ADD_CONTACT} onCompleted={data => {
        var d = 27;
      }}>
      {(addContact, { data }) => (
        <div>
        <ContactForm onSubmit={values => {
          addContact({ variables: { contact: {firstName: values.firstName, lastName: values.lastName, email: values.email}}});
        }}>
        </ContactForm>
        {data && <p>{data.addContact.id}</p>}
        </div>

      )}
      </Mutation>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    contact: state.contact,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
