import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ContactForm from './ContactForm';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import Section from 'grommet/components/Section';

const EDIT_CONTACT = gql`
  mutation EditContact($contact: ContactInput!) {
    editContact(contact: $contact) {
      id
    }
  }
`;

const FIND_CONTACT = gql`
  query getContact($id: String!) {
    contact(id: $id) {
      id
      contact {
        firstName
        lastName
        email
      }
    }
  }
`;

export class EditContactPanel extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="contact-edit-contact-panel">
        <Mutation
          mutation={EDIT_CONTACT}
          onCompleted={data => {
            var d = 27;
          }}
        >
          {(addContact, { data }) => (
            <div>
              <Section>
                <Query
                  name="myquery"
                  query={FIND_CONTACT}
                  variables={{ id: this.props.contact.selected }}
                >
                  {({ loading, error, data, refetch }) => {
                    this.fred = refetch;
                    if (loading) return null;
                    if (error) return `Error!: ${error}`;
                    return (
                      <div>
                        <ContactForm initialValues={{...data.contact.contact,id:data.contact.id}}
                          title="Edit Contact"
                          onSubmit={values => {
                            addContact({
                              variables: {
                                contact: {
                                  firstName: values.firstName,
                                  lastName: values.lastName,
                                  email: values.email,
                                  cell: values.mainCell,
                                },
                              },
                            });
                          }}
                        />
                      </div>
                    );
                  }}
                </Query>
              </Section>
            </div>
          )}
        </Mutation>
      </div>
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
)(EditContactPanel);
