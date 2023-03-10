import React from 'react';
import Input from './Input';
import List from './List';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    fetch('http://localhost:7777/notes')
      .then((data) => data.json())
      .then((data) => this.giveNote(data));

    fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(this.state.list),
    })
      .then((data) => data.json())
      .then((data) => this.addNote(data));
  }

  componentWillUnmount() {
  }

  giveNote = (newNote) => {
    this.setState((notes) => ({ list: [...notes.list, newNote] }));
  };

  addNote = (newNote) => {
    this.setState((notes) => ({ list: [...notes.list, newNote] }));
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <Input addNote={this.addNote}></Input>
        <List list={list}></List>
      </div>
    );
  }
}
