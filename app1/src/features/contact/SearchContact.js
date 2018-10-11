import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchInput from 'grommet/components/SearchInput';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const GET_CONTACTS = gql`
  query getContacts($firstName: String!) {
    contact(firstName: $firstName) {
      id
      firstName
      lastName
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
        <SearchInput placeHolder="Search" suggestions={['first', 'second', 'third', 'fourth']} />
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
