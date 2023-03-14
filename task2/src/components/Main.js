import React from 'react';
import Input from './Input';
import List from './List';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    this.getListArr();
  }

  componentDidUpdate() {
    if (this.state.list) {
      this.getListArr();
    }
  }

  getListArr = () => (
    fetch('http://localhost:7777/notes')
      .then((res) => res.json())
      .then((data) => this.setState(this.addList(data)))
  );

  addList = (data) => this.setState = (prev) => ({ ...prev.list, list: data });

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div>
        <Input addList={this.addList} list={list} getListArr={this.getListArr}></Input>
        <List list={list} addList={this.addList}></List>
      </div>
    );
  }
}
