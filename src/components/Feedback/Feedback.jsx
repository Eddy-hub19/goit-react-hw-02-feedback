import React, { Component } from 'react';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    return <div></div>;
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