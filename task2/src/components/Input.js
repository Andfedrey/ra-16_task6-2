import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  changeHandle = (env) => {
    const { name, value } = env.target;
    this.setState({ ...this.state, [name]: value });
  };

  submitHandle = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <input onChange={this.changeHandle} type="text" value={this.state.name} name="name"></input>
          <button type="submit">send</button>
        </form>
      </div>
    );
  }
}
