import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ContactForm from './ContactForm'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";


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
      <Mutation mutation={ADD_TODO} onCompleted={data => {
        var d = 27;
      }}>
      {(addTodo, { data }) => (
        <div>
        <ContactForm onSubmit={values => {
          addTodo({ variables: { type: 'fred'}});
        }}>
        </ContactForm>
        {data && <p>{data.addTodo.id}</p>}
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
