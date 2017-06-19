import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './AddNew.css';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    }
  }

  addNewBtnClick() {
    let author = this.refs.newAuthor.value;
    let text = this.refs.newText.value;

    let item = {
      author,
      text,
      bigText: ""
    }

    this.props.addNews(item);
  }

  componentDidMount() {
    this.refs.newAuthor.focus();
  }

  onCheckRuleClick() {
    this.setState({ agreeNotChecked: !this.state.agreeNotChecked });
  }

  onFieldChange(fieldName, e) {
    (e.target.value.trim().length > 0) ? this.setState({ [fieldName]:false }) : this.setState({ [fieldName]:true });
  }

  render() {
    return (
      <form className="add">
        <input
          className="add_author"
          onChange={this.onFieldChange.bind(this, "authorIsEmpty")}
          defaultValue=""
          ref="newAuthor"
          placeholder="Ваше имя"
        />
        <textarea
          className="add_text"
          onChange={this.onFieldChange.bind(this, "textIsEmpty")}
          defaultValue=""
          placeholder="Текст новости"
          ref="newText">
        </textarea>
        <label className="add_checkrule">
          <input
            type="checkbox"
            defaultValue={false}
            ref="check_rule"
            onChange={this.onCheckRuleClick.bind(this)}/>Я согласен с правилами
        </label>
        <button
          className="add_btn"
          type="button"
          onClick={this.addNewBtnClick.bind(this)}
          disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}
          ref="addNewBtn">
          Показать alert
        </button>
      </form>
    );
  }
}

export default AddNew;
