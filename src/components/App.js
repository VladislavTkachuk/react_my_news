import React, { Component } from 'react';

import News from './News';
import AddNew from './AddNew';
import './App.css';

const my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: my_news
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  addNews(item) {
    this.setState({ news: [...this.state.news, item] });
  }

  render() {
    return (
      <div className="app">
        <h3>Новости</h3>
        <AddNew addNews={this.addNews.bind(this)} />
        <News lastNews={this.state.news} />
      </div>
    );
  }
}

export default App;
