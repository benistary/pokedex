import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const View = (props) => {
  const { image, name } = props.pokemon;
  return(
    <div className="view">
      <ReactCSSTransitionGroup
        transitionName="view__animation"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <img src={image} alt={name} key={image} className="view__image"/>
        <p className="view__name" key={name}>{name}</p>
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default View;
