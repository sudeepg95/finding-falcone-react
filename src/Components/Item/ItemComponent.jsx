import React from 'react';

const ItemComponent = props => {
  const { type, item, isSelected, selectItem } = props;
  if (type === 'planets') {
    return (
      <div
        className="item"
        role="presentation"
        onClick={() => typeof selectItem === 'function' && selectItem()}
      >
        {isSelected && (
          <div className="item-overlay">
            <p>Selected</p>
          </div>
        )}
        <div className="item-img">
          <img src={`${process.env.PUBLIC_URL}/${type}/${item.name}.png`} alt={item.name} />
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
  }

  if (type === 'vehicles') {
    const { vehicles, selectedVehicles } = props;
    const selectedVehicleForPlanet = selectedVehicles[item.name]
      ? selectedVehicles[item.name].name
      : null;
    const vehiclesDOMMap = vehicles.map((vehicle, index) => {
      if (item.distance <= vehicle.max_distance) {
        const noOfTimesCurrentVehicleUsed = Object.values(selectedVehicles)
          .map(selectedVehicle => selectedVehicle.name)
          .filter(selectedVehicleName => selectedVehicleName === vehicle.name).length;
        const remainingVehicle = vehicle.total_no - noOfTimesCurrentVehicleUsed;
        const currentVehicleSelected =
          selectedVehicleForPlanet && selectedVehicleForPlanet === vehicle.name;
        return (
          <div
            className="vehicle-details"
            key={`vehicle-${index}`}
            role="presentation"
            onClick={() => typeof selectItem === 'function' && selectItem(vehicle)}
          >
            {currentVehicleSelected && (
              <div className="vehicle-overlay">
                <p>Selected</p>
              </div>
            )}
            {remainingVehicle === 0 && !currentVehicleSelected && (
              <div className="vehicle-overlay error" />
            )}
            <div className="item-img">
              <img
                src={`${process.env.PUBLIC_URL}/${type}/${vehicle.name}.png`}
                alt={vehicle.name}
              />
            </div>
            <div>
              <h3>{vehicle.name}</h3>
              <p>
                <span className="bolder">Range &nbsp;-&nbsp;</span>
                {vehicle.max_distance}
                <span className="normal">&nbsp;megamiles</span>
              </p>
              <p>
                <span className="bolder">Available&nbsp;-&nbsp;</span>
                {remainingVehicle}
                <span className="normal">&nbsp;no&apos;s</span>
              </p>
            </div>
          </div>
        );
      }
      return null;
    });
    return <div className="vehicles-list">{vehiclesDOMMap}</div>;
  }

  return null;
};

export default ItemComponent;
