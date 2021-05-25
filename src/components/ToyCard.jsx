import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    const {deleteToy, addLike, toy } = this.props;
    const { name, image, likes, id } = toy;

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn"
          onClick={() => addLike(toy)}>
            Like {'<3'}
          </button>
        <button className="del-btn" onClick={() => deleteToy(id)}>
          Donate to GoodWill
          </button>
      </div>
    );
  }

}

export default ToyCard;
