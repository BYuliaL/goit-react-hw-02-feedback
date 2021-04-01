import React from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import StatisticTitle from './components/StatisticTitle';
import Notification from './components/Notification';

class App extends React.Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  state = {
    good: this.props.goodValue,
    neutral: this.props.neutralValue,
    bad: this.props.badValue,
  };

  onLeaveFeedback = event => {
    const nameButton = event.target.name;
    this.setState(prevState => ({
      [nameButton]: prevState[nameButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.floor(percent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          <StatisticTitle title="Statistics">
            {this.countTotalFeedback() === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </StatisticTitle>
        </Section>
      </div>
    );
  }
}

export default App;
