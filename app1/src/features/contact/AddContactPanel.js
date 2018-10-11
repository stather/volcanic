import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ContactForm from './ContactForm';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Section from 'grommet/components/Section';

const ADD_CONTACT = gql`
  mutation AddContact($contact: ContactInput!) {
    addContact(contact: $contact) {
      id
    }
  }
`;

export class AddContactPanel extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Mutation
        mutation={ADD_CONTACT}
        onCompleted={data => {
          var d = 27;
        }}
      >
        {(addContact, { data }) => (
          <div>
          <Section>
            <ContactForm
              onSubmit={values => {
                addContact({
                  variables: {
                    contact: {
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                      cell: values.mainCell
                    },
                  },
                });
              }}
            />
            {data && <p>{data.addContact.id}</p>}
            </Section>
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddContactPanel);
