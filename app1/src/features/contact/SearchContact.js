import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchInput from 'grommet/components/SearchInput';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Search from 'grommet/components/Search';

const GET_CONTACTS = gql`
  query getcontacts($firstName: String) {
    contacts(firstName: $firstName) {
      id
      contact {
        firstName
        lastName
      }
    }
  }
`;

export class SearchContact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };



  componentDidMount() {
    this.val = this.props.contact.val;
  }

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
        <Query name='myquery' query={GET_CONTACTS} variables={{ firstName: this.props.contact.val }}>
          {({ loading, error, data, refetch }) => {
            this.fred = refetch;
            if (loading) return null;
            if (error) return `Error!: ${error}`;
            return (
              <div>
                {data.contacts.map(contact => (
                  <div className="contact" key={contact.id}>
                    {contact.id}
                  </div>
                ))}
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
