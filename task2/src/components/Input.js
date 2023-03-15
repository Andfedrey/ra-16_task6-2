import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  changeHandle = (env) => {
    this.setState({ comment: env.target.value });
  };

  submitHandle = (e) => {
    const { comment } = this.state; // получаю данные из state
    const text = comment.trim();
    e.preventDefault();
    if (text.length) {
      fetch('http://localhost:7777/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      })
        .then((res) => {
          fetch('http://localhost:7777/notes')
            .then((a) => a.json())
            .then((data) => {
              console.log(data);
              return this.props.addList(data);
            });
        });
    }

    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <input onChange={this.changeHandle} type="text" value={comment} name="comment"></input>
          <button type="submit">send</button>
        </form>
      </div>
    );
  }
}
