import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchInput from 'grommet/components/SearchInput';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_CONTACTS = gql`
query getcontacts($firstName: String){
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


  render() {
    return (
      <div className="contact-search-contact">
      <Query query={GET_CONTACTS} variables={{ firstName: "rus" }}>
      {({loading,error,data}) => {
        if (loading) return null;
        if (error) return `Error!: ${error}`;
        return (
          <div>
            {data.contacts.map(contact =>(
              <div className="contact" key={contact.id}>{contact.id}</div>
            ))}
          </div>
        );
      }
      }
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
