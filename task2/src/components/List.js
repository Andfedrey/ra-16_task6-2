import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dellId: '' };
  }

  componentDidUpdate() {
    if (this.state) {
      const { dellId } = this.state;
      this.deleteHandle(dellId);
    }
  }

  deleteHandle = (dellId) => {
    fetch(`http://localhost:7777/notes/${dellId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const { addList } = this.props;
        addList((prev) => {
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
            list?.map((note) => (
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
