import React from 'react';

const ItemComponent = props => {
  const { type, item, isSelected, selectItem } = props;
  return (
    <div className="item" role="presentation" onClick={() => selectItem()}>
      {isSelected && (
        <div className="item-overlay">
          <p>Selected</p>
        </div>
      )}
      <div className="item-img">
        <img src={`/${type}/${item.name}.png`} alt={item.name} />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>
          <span className="bolder">Distance &nbsp;-&nbsp;</span>
          {item.distance}
          <span className="normal">&nbsp;megamiles</span>
        </p>
      </div>
    </div>
  );
};

export default ItemComponent;
