import React from 'react';

function GustsList() {
  return (
      <ul>
          <li className="pending"><span>Safia</span></li>
          <li className="responded"><span>Iver</span>
              <label htmlFor="confirmed">
                  <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
          </li>
          <li className="responded">
              <span>Corrina</span>
              <label htmlFor="confirmed">
                  <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
          </li>
          <li>
              <span>Joel</span>
              <label htmlFor="confirmed">
                  <input type="checkbox" /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
          </li>
      </ul>
  );
}

export default GustsList;
