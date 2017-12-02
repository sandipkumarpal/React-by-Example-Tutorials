import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import GuestPending from './GuestPending';

function GustsList(props) {
  return (
      <ul>
          <GuestPending name={props.GuestPending} />
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
                  handleRemove={() => props.removeGuestAt(index)}
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
  removeGuestAt: () => {},
  GuestPending: '',
};

GustsList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  GuestPending: PropTypes.string.isRequired,
};

export default GustsList;
