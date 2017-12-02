import React, { Component } from 'react';
import './App.css';

import GuestsList from './Guests/GustsList';
import Statedata from './helpers/Statedata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltered: false,
      guests: [],
    };
    this.setNameAt = this.setNameAt.bind(this);
  }

  componentDidMount() {
    this.setState({ guests: Statedata });
  }

  toggleGuestPropertyAt(property, indexToChange) {
    this.setState({
        guests: this.state.guests.map((guest, index) => {
            if (index === indexToChange) {
                return {
                    ...guest,
                    [property]: !guest[property]
                };
            }
            return guest;
        })
    });
  }

  toggleConfirmationAt(index) {
    this.toggleGuestPropertyAt("isConfirmed", index);
  }

  toggleEditingAt(index) {
    this.toggleGuestPropertyAt("isEditing", index);
  }

  setNameAt(name, indexToChange) {
      this.setState({
          guests: this.state.guests.map((guest, index) => {
              if (index === indexToChange) {
                  return {
                      ...guest,
                      name
                  };
              }
              return guest;
          })
      })
  }

  toggleFilter() {
      this.setState({
          isFiltered: !this.state.isFiltered
      })
  }

  getTotalInvited = () => this.state.guests.length;

  render() {
    return (
        <div className="App">
            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <form>
                    <input
                      type="text"
                      value="Safia"
                      placeholder="Invite Someone"
                    />
                    <button
                      type="submit"
                      name="submit"
                      value="submit"
                    >
                        Submit
                    </button>
                </form>
            </header>
            <div className="main">
                <div>
                    <h2>Invitees</h2>
                    <label htmlFor="invitees">
                        <input 
                            type="checkbox"
                            name="invitees"
                            id="invitees"
                            onChange={() => this.toggleFilter()}
                            checked={this.state.isFiltered}
                        /> Hide those who havent responded
                    </label>
                </div>
                <table className="counter">
                    <tbody>
                        <tr>
                            <td>Attending:</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Unconfirmed:</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>{ this.getTotalInvited() }</td>
                        </tr>
                    </tbody>
                </table>
                <GuestsList guests={this.state.guests}
                    toggleConfirmationAt={index => this.toggleConfirmationAt(index)}
                    toggleEditingAt={index => this.toggleEditingAt(index)}
                    setNameAt={this.setNameAt}
                    isFiltered={this.state.isFiltered} />
            </div>
        </div>
    );
  }
}

export default App;
