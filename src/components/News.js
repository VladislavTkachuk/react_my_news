import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  static propTypes = {
    lastNews: PropTypes.array.isRequired
  };

  onTotalNewsClick() {
    this.setState({ counter: ++this.state.counter });
  }

  render() {
    let lastNews = this.props.lastNews;
    return (
      <div className="news">
        {lastNews.map((item, index) => {
          return (
            <div key={index}>
              <Article new={item} />
            </div>
          );
        })}
        {(lastNews.length > 0) ? <strong
                                    onClick={this.onTotalNewsClick.bind(this)}>
                                    Всего новостей {lastNews.length}
                                  </strong> : "Новостей нет!"}
      </div>
    );
  }
}

export default News;
