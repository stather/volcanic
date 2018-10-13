import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchContact from './SearchContact';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

export class SearchContactPanel extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="contact-search-contact-panel">
        <Article>
          <Header>
            <Menu responsive={true} direction="row">
              <Anchor onClick={this.props.actions.showAddContactPanel} className="active">
                First action
              </Anchor>
              <Anchor href="#">Second action</Anchor>
              <Anchor href="#">Third action</Anchor>
            </Menu>
          </Header>
          <Section>
            <SearchContact />
          </Section>
        </Article>
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
)(SearchContactPanel);
