import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';
import './CardList.css';

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

CardList.propTypes = {

};

export default CardList;
