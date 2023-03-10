import React from 'react';

export default class List extends React.Component {
  render() {
    console.log(this.props.list);
    return (
      <h1>infoList</h1>
    );
  }
}
