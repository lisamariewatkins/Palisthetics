import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchConversations } from '../../../actions/messaging';

import ConversationList from './conversation-list';
import HeaderTemplate from '../../template/header';
import FooterTemplate from '../../template/footer';

class Inbox extends Component {
  componentWillMount() {
    // Fetch inbox (conversations involving current user)
    this.props.fetchConversations();
  }

  renderInbox() {
    if(this.props.conversations && this.props.conversations.length > 0) {
      return (
          <ConversationList conversations={this.props.conversations} />
      );
    }

    return <div>You do not have any active conversations.</div>;
  }

  render() {
    return (
      <div>
        <HeaderTemplate logo="Palisthetics" />
         <div className="col-md-6">
        <Link className="btn btn-primary" to="/dashboard/conversation/new">Compose Message</Link>
        <div className="panel panel-default">
          <div className="panel-body">
            {this.renderInbox()}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  conversations: state.communication.conversations
  }
}

export default connect(mapStateToProps, { fetchConversations })(Inbox);
