import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  static propTypes = {
    item: PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bigText: PropTypes.string.isRequired
    })
  };

  readmoreClick(e) {
    e.preventDefault();
    this.setState({ visible: true });
  }

  render() {
    let author = this.props.new.author;
    let text = this.props.new.text;
    let bigText = this.props.new.bigText;

    return (
      <div className="article">
        <p className="news_author">{author}:</p>
        <p className="news_text">{text}</p>
        {(!this.state.visible) ? <a href="#"
                                    onClick={this.readmoreClick.bind(this)}
                                    className="news_readmore">Подробнее
                                  </a> : <p className="big_text">{bigText}</p>}
      </div>
    );
  }
}

export default Article;
