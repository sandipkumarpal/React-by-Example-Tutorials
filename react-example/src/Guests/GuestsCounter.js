import React from 'react';
import PropTypes from 'prop-types';

function GuestCounter(props) {
  return (
      <table className="counter">
          <tbody>
              <tr>
                  <td>Attending:</td>
                  <td>{props.numberAttending || 0}</td>
              </tr>
              <tr>
                  <td>Unconfirmed:</td>
                  <td>{props.numberUnconfirmed || 0}</td>
              </tr>
              <tr>
                  <td>Total:</td>
                  <td>{ props.getTotalInvited }</td>
              </tr>
          </tbody>
      </table>
  );
}

GuestCounter.defaultProp = {
  numberAttending: 0,
  numberUnconfirmed: 0,
  getTotalInvited: 0,
};

GuestCounter.propTypes = {
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  getTotalInvited: PropTypes.number.isRequired,
};

export default GuestCounter;
