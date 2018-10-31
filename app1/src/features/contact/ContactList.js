import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import * as actions from './redux/actions';

export class ContactList extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="contact-contact-list">
        <div>
          <Table
            selectable={true}
            onSelect={selected => {
              this.props.actions.contactSelected(this.props.contacts[selected].id);
            }}
          >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.props.contacts.map(contact => (
                <TableRow key={contact.id}>
                  <td>{contact.contact.firstName}</td>
                  <td>{contact.contact.lastName}</td>
                  <td>{contact.contact.email}</td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
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
)(ContactList);

