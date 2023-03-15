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
    this.getListArr();
  }

  // fetchData(props) {
  //   let { endpoint } = this;
  //   if (typeof endpoint === 'function') {
  //     endpoint = endpoint(props);
  //   }
  //   fetch(endpoint)
  //     .then((res) => res.json())
  //     .then((data) => this.setState({
  //       [this.propName]: data,
  //     }));
  // }

  getListArr = () => (
    fetch('http://localhost:7777/notes')
      .then((res) => res.json())
      .then((data) => this.setState(this.addList(data)))
  );

  addList = (data) => this.setState = () => ({ list: data });

  render() {
    const { list } = this.state;
    return (
      <div>
        <Input
          addList={this.addList}
          list={list}
          add={this.setState}
          getListArr={this.getListArr}
        >
        </Input>
        <List list={list} addList={this.addList}></List>
      </div>
    );
  }
}
