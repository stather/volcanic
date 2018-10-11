import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';
import * as actions from './redux/actions';
import { appStates } from './redux/constants';
import AddContactPanel from '../contact/AddContactPanel';
import SearchContactPanel from '../contact/SearchContactPanel';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-default-page">
        <header className="app-header">
          <img src={reactLogo} className="app-logo" alt="logo" />
          <img src={rekitLogo} className="rekit-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <Split flex="right" separator={false}>
          <Sidebar colorIndex="neutral-1">
            <Box flex="grow" justify="start">
              <Menu primary={true}>
                <Anchor href="#" className="active" onClick={this.props.actions.showSearchContactPanel}>
                  Contacts
                </Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Box>
          </Sidebar>
          {this.props.home.module === appStates.MOD_CONTACT && <AddContactPanel />}
          {this.props.home.module === appStates.MOD_CONTACT_SEARCH && <SearchContactPanel />}
        </Split>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
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
)(DefaultPage);
