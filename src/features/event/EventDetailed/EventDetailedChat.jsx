import React, { Component } from 'react';
import { Segment, Header, Comment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import distanceInWords from 'date-fns/distance_in_words';
import EventDetailedChatForm from './EventDetailedChatForm';
class EventDetailedChat extends Component {
  state = {
    showReplyForm: false
  };

  handleOpenReplyForm = () => {
    this.setState({
      showReplyForm: true
    });
  };

  render() {
    const { addEventComment, eventId, eventChat } = this.props;
    const { showReplyForm } = this.state;
    return (
      <div>
        <Segment
          textAlign="center"
          attached="top"
          inverted
          color="teal"
          style={{ border: 'none' }}
        >
          <Header>Chat about this event</Header>
        </Segment>

        <Segment attached>
          <Comment.Group>
            {eventChat &&
              eventChat.map(comment => (
                <Comment key={comment.id}>
                  <Comment.Avatar
                    src={comment.photoURL || '/assets/user.png'}
                  />
                  <Comment.Content>
                    <Comment.Author as={Link} to={`/profile/${comment.uid}`}>
                      {comment.displayName}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{distanceInWords(comment.date, Date.now())} ago</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action onClick={this.handleOpenReplyForm}>
                        Reply
                      </Comment.Action>
                      {showReplyForm && (
                        <EventDetailedChatForm
                          addEventComment={addEventComment}
                          eventId={eventId}
                        />
                      )}
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              ))}
          </Comment.Group>
          <EventDetailedChatForm
            addEventComment={addEventComment}
            eventId={eventId}
          />
        </Segment>
      </div>
    );
  }
}

export default EventDetailedChat;
