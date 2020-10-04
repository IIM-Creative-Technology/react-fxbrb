import React from 'react';

const Item = ({ available, title = '' }) => (
  <div>
    <h3>
    Disponibilité : 
      <span
        style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          borderRadius: '30px',
          backgroundColor: available ? 'green' : 'red',
        }}></span>{' '}
    </h3>
      <p>{title}</p>
  </div>
);

export default Item;
