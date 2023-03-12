import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  deleteHandle = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: 'DELETE',
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
              <button className="cross" type="button" onClick={() => this.deleteHandle(note.id)}>x</button>
            </div>
          ))
        }
        </div>
      </>
    );
  }
}
