import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchInput from 'grommet/components/SearchInput';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ApolloConsumer } from 'react-apollo';


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

  state = { dog: null };

  onContactsFetched = dog => this.setState(() => ({ dog }));

  render() {
    return (
      <div className="contact-search-contact">
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.dog && <img src={this.state.dog.displayImage} />}
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: GET_CONTACTS,
                  variables: { firstName: "rus" }
                });
                this.onContactsFetched(data.contacts);
              }}
            >
              Click me!
            </button>
          </div>
        )}
      </ApolloConsumer>

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
