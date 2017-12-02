import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

function GustsList(props) {
  return (
      <ul>
          {props.guests
            .filter(guest => !props.isFiltered || guest.isConfirmed)
            .map((guest, index) => (
                <Guest
                  name={guest.name}
                  isConfirmed={guest.isConfirmed}
                  key={guest.id}
                  isEditing={guest.isEditing}
                  handleConfirmation={() => props.toggleConfirmationAt(index)}
                  handletoggleEditing={() => props.toggleEditingAt(index)}
                  setName={text => props.setNameAt(text, index)}
                />
          ))}
      </ul>
  );
}

GustsList.defaultProp = {
  guests: [],
  toggleConfirmationAt: () => {},
  toggleEditingAt: () => {},
  setNameAt: () => {},
  isFiltered: false,
};

GustsList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default GustsList;
