import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { Redirect } from 'react-router-dom';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Device = require('twilio-client').Device;


//const CosmosClient = require('@azure/cosmos').CosmosClient;
//const config = require('../../cosmos/config');
//const url = require('url');

//const endpoint = config.endpoint;
//const masterKey = config.primaryKey;
//const HttpStatusCodes = { NOTFOUND: 404 };

//const databaseId = config.database.id;
//const containerId = config.container.id;

//const client = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey } });

// async function createDatabase() {
//   const { database } = await client.databases.createIfNotExists({ id: databaseId });
//   console.log(`Created database:\n${database.id}\n`);
// }

// async function readDatabase() {
//     const { body: databaseDefinition } = await client.database(databaseId).read();
//     console.log(`Reading database:\n${databaseDefinition.id}\n`);
// }

export class DefaultPage extends Component {
  static propTypes = {
    agentDesktop: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    var self = this;
    var a;

    // createDatabase()
    //     .then(() => readDatabase())
    //     .then(() => {  
    //       var b = 3;
    //     })
    //     .catch((error) => { 
    //       var a = 2;
    //      });


    const options = { method: 'POST' };
    fetch('https://azure-chinook-6852.twil.io/capability-token', options)
      .then(response => response.json())
      .then(result => {
        Device.setup(result.token);
      });

    Device.disconnect(function () {
      self.setState({
        onPhone: false,
        log: 'Call ended.'
      });
    });

    Device.ready(function () {
      self.log = 'Connected';
    });

  }

  render() {
    if (this.props.agentDesktop.toDef === true) {
      return <Redirect to='/' />
    }
    return (
      <Article>
        <Box>
          <Paragraph>
            Page Content: agent-desktop/DefaultPage
      </Paragraph>
          <Button label='Label' icon={<EditIcon />}
            href='#'
            primary={true} onClick={this.myClick} />
          <Query
            query={gql`
      {
  books {
    title
    author
  }
}
    `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return(
                <List>
                {data.books.map(function(book, index){
                    return <ListItem justify='between'
    separator='horizontal' key={index}>
    <span>
      {book.title}
    </span></ListItem>;
                  })}
              </List>
              ) 
            }}
          </Query>
        </Box>
      </Article>
    );
  }
  // this.props.actions.toDefaultPage
  myClick() {
    //this.props.actions.toDefaultPage;
    Device.connect({ To: '+27790667185' });
  }
}


/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    agentDesktop: state.agentDesktop,
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
