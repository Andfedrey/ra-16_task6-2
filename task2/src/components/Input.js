import React from 'react';
import List from './List';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: '', list: [] };
  }

  changeHandle = (env) => {
    this.setState({ comment: env.target.value });
  };

  submitHandle = (e) => {
    const text = this.state.comment.trim();
    console.log(text);
    e.preventDefault();

    if (text.length) {
      fetch('http://localhost:7777/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: this.state.comment }),
      })
        .then((res) => {
          if (res.status === 201) {
            this.props.addList([...this.props.list, { info: this.state.comment }]);
          }
        });
    }
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <input onChange={this.changeHandle} type="text" value={this.state.comment} name="comment"></input>
          <button type="submit">send</button>
        </form>
      </div>
    );
  }
}
