import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

function Guests(props) {
  return (
      <li>
          <GuestName
            isEditing={props.isEditing}
            handleNameEdit={e => props.setName(e.target.value)}
          >
              {props.name}
          </GuestName>
          <label htmlFor="confirmed">
              <input
                type="checkbox"
                id="confirmed"
                checked={props.isConfirmed}
                onChange={props.handleConfirmation}
              /> Confirmed
          </label>
          <button onClick={() => props.handletoggleEditing()}>
              {props.isEditing ? 'Save' : 'edit'}
          </button>
          <button onClick={props.handleRemove}>remove</button>
      </li>
  );
}

Guests.defaultProp = {
  name: '',
  isConfirmed: false,
  isEditing: false,
  handleConfirmation: false,
  handletoggleEditing: false,
  setName: () => {},
  handleRemove: () => {},
};

Guests.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handletoggleEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Guests;
