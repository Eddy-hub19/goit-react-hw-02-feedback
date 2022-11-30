import React, { Component } from 'react';
import { Statistics } from './Statistics';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleCLickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleCLickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = (initial) => {
    const { good, neutral, bad } = this;
    let total = initial;
    return (total += good + neutral + bad);
  };

  // countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <h2> Please leave feedback</h2>
        <button type="button" onClick={this.handleClickGood}>
          Good
        </button>
        <button type="button" onClick={this.handleCLickNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleCLickBad}>
          Bad
        </button>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}

export default Feedback;

// Шаг 1
// Приложение должно отображать количество собранных отзывов для каждой категории. Приложение не должно сохранять статистику отзывов между разными сессиями (обновление страницы).

// Состояние приложения обязательно должно быть следующего вида, добавлять новые свойства нельзя.

// Шаг 2
// Расширь функционал приложения так, чтобы в интерфейсе отображалось больше статистики о собранных отзывах. Добавь отображение общего количества собранных отзывов из всех категорий и процент положительных отзывов. Для этого создай вспомогательные методы countTotalFeedback() и countPositiveFeedbackPercentage(), подсчитывающие эти значения основываясь на данных в состоянии (вычисляемые данные).

// Шаг 3
// Выполни рефакторинг приложения. Состояние приложения должно оставаться в корневом компоненте <App>.

// Вынеси отображение статистики в отдельный компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
// Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children). Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.
