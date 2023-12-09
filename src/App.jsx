import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };

  handleClick = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      this.updateFeedbackStats
    );
  };

  handleClick1 = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      this.updateFeedbackStats
    );
  };

  handleClick2 = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      this.updateFeedbackStats
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.floor((good / total) * 100);
  };

  updateFeedbackStats = () => {
    const total = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage();

    this.setState({
      total,
      feedback: feedbackPercentage.toFixed(2),
    });
  };

  render() {
    const { good, neutral, bad, total, feedback } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleClick={this.handleClick}
            handleClick1={this.handleClick1}
            handleClick2={this.handleClick2}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              feedback={feedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
