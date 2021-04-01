import React from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import StatisticTitle from './components/StatisticTitle/StatisticTitle';
import Notification from './components/Notification/Notification';

class App extends React.Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  state = {
    Good: this.props.goodValue,
    Neutral: this.props.neutralValue,
    Bad: this.props.badValue,
  };

  onLeaveFeedback = event => {
    const nameButton = event.target.name;
    this.setState(prevState => ({
      [nameButton]: prevState[nameButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.Good + this.state.Neutral + this.state.Bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = (this.state.Good / this.countTotalFeedback()) * 100;
    return Math.floor(percent);
  };

  render() {
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
                good={this.state.Good}
                neutral={this.state.Neutral}
                bad={this.state.Bad}
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
