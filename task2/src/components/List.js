import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dellId: '' };
  }

  componentDidUpdate() {
    if (this.state) {
      this.deleteHandle(this.state.dellId);
    }
  }

  deleteHandle = (dellId) => {
    fetch(`http://localhost:7777/notes/${dellId}`, {
      method: 'DELETE',
    })
      .then(() => {
        this.props.addList((prev) => {
          const newArr = [...prev.list].filter((el) => el.id !== dellId);
          return { list: newArr };
        });
      });
  };

  render() {
    const { list } = this.props;
    return (
      <>
        <h1>infoList</h1>
        <div className="cards-wrp">
          {
          list && list.map((note) => (
            <div className="card" key={note.id}>
              <h2>{note.comment}</h2>
              <button className="cross" type="button" onClick={() => this.setState({ dellId: note.id })}>x</button>
            </div>
          ))
        }
        </div>
      </>
    );
  }
}
