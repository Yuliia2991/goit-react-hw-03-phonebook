import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const newContact = {
          id: nanoid(),
          name,
          number,
    };
    
    const duplicateName = contacts.find(contact => contact.name.toLowerCase() === normalizedName);
      
    duplicateName
      ? alert(`${name} is already in contacts`)
      : this.setState(({contacts}) => ({
      contacts: [...contacts, newContact]
    }))
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // checkContact = () => {

  // }

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>

        <ContactsList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}
