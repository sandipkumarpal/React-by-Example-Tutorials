import React from 'react';
import PropTypes from 'prop-types';

function GuestName(props) {
  if (props.isEditing) {
    return (
        <input
          type="text"
          value={props.children}
          onChange={props.handleNameEdit}
        />
    );
  }
  return (
      <span>
          {props.children}
      </span>
  );
}

GuestName.defaultProp = {
  children: '',
  isEditing: false,
  handleNameEdit: () => {},
};

GuestName.propTypes = {
  children: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleNameEdit: PropTypes.func.isRequired,
};

export default GuestName;
