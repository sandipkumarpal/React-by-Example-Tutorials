import React, { Component } from 'react';
import './App.css';

import GuestsList from './Guests/GustsList';
import Statedata from './helpers/Statedata';
import GuestCounter from './Guests/GuestsCounter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltered: false,
      pendingGuest: '',
      guests: [],
    };
    this.setNameAt = this.setNameAt.bind(this);
    this.removeGuestAt = this.removeGuestAt.bind(this);
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

  handleNameInput(e) {
      this.setState({
        pendingGuest: e.target.value
      });
  }

  newGuestSubmitHandler(e) {
      e.preventDefault();
      this.setState({
          guests: [
              {
                  name: this.state.pendingGuest,
                  isConfirmed: false,
                  isEditing: false,
                  id: Math.floor(Math.random() * (100 - 0 + 1)) + 0
              },
              ...this.state.guests
          ],
          pendingGuest: ''
      })
  }

  removeGuestAt(index) {
      this.setState({
          guests : [
            ...this.state.guests.slice(0, index),
            ...this.state.guests.slice(index + 1)
          ]
      });
      console.log(index);
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () => 
      this.state.guests.reduce(
          (total, guest) => guest.isConfirmed ? total + 1 : total,
       0
    );

  render() {
    const totlaInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totlaInvited - numberAttending;
    return (
        <div className="App">
            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <form onSubmit={e => this.newGuestSubmitHandler(e)}>
                    <input
                      type="text"
                      value={this.state.pendingGuest}
                      placeholder="Invite Someone"
                      onChange={e => this.handleNameInput(e)}
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
                <GuestCounter 
                    getTotalInvited={totlaInvited}
                    numberAttending={numberAttending}
                    numberUnconfirmed={numberUnconfirmed}
                />

                <GuestsList guests={this.state.guests}
                    toggleConfirmationAt={index => this.toggleConfirmationAt(index)}
                    toggleEditingAt={index => this.toggleEditingAt(index)}
                    setNameAt={this.setNameAt}
                    isFiltered={this.state.isFiltered}
                    removeGuestAt={this.removeGuestAt}
                    GuestPending={this.state.pendingGuest} 
                />
            </div>
        </div>
    );
  }
}

export default App;
