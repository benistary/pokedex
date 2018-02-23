import React from 'react';

const View = (props) => {
  const { image, name } = props.pokemon;
  return(
    <div className="view">
      <img src={image} alt={name} className="view__image"/>
      <p className="view__name">{name}</p>
    </div>
  );
}

export default View;
