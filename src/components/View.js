import React from 'react';

const View = (props) => {
  const { image, name } = props.pokemon;
  return(
    <div className="view">
      <img src={image} alt={name} className="viem__image"/>
      <h2>{name}</h2>
    </div>
  );
}

export default View;
