import React, { Component } from 'react';
import { Container } from '@material-ui/core';

import Tweets from './components/Tweets';
import Form from './components/Form';
import { createTweet, getTweets, deleteTweet } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(event, tweetId) {
    event.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Are you sure?')) {
      return;
    }

    deleteTweet(tweetId).then(() => {
      this.setState({
        tweets: this.state.tweets.filter((data) => data.id !== tweetId)
      });
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const form = event.target;

    createTweet(form)
      .then((data) => {
        form.reset();

        this.setState({
          tweets: [
            data,
            ...this.state.tweets
          ]
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  componentDidMount() {
    getTweets().then((data) => {
      this.setState({
        tweets: data
      });
    });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Form
          onSubmit={this.onSubmit}
        />

        <Tweets
          tweets={this.state.tweets}
          onDelete={this.onDelete}
        />
      </Container>
    );
  }
}

export default App;
