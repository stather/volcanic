import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Search from 'grommet/components/Search';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

const GET_CONTACTS = gql`
  query getcontacts($firstName: String) {
    contacts(firstName: $firstName) {
      id
      contact {
        firstName
        lastName
        email
      }
    }
  }
`;

export class SearchContact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="contact-search-contact">
        <Search
          placeHolder="Search"
          inline={true}
          size="medium"
          onDOMChange={event => {
            this.props.actions.searchForContacts(event.target.value);
          }}
        />
        <Query
          name="myquery"
          query={GET_CONTACTS}
          variables={{ firstName: this.props.contact.val }}
        >
          {({ loading, error, data, refetch }) => {
            this.fred = refetch;
            if (loading) return null;
            if (error) return `Error!: ${error}`;
            return (
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.contacts.map(contact => (
                      <TableRow key={contact.id}>
                        <td>{contact.contact.firstName}</td>
                        <td>{contact.contact.lastName}</td>
                        <td>{contact.contact.email}</td>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </div>
            );
          }}
        </Query>
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
)(SearchContact);
