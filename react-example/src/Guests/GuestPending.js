import React from 'react';
import PropTypes from 'prop-types';

function GuestPending(props) {
  if (props.name) {
    return (
        <li className="pending">
            <span>
                {props.name}
            </span>
        </li>
    );
  }
  return null;
}

GuestPending.defaultProp = {
  name: '',
};

GuestPending.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GuestPending;
