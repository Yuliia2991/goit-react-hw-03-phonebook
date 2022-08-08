import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

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

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <section className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className={css.contacts}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>

        <ContactsList
          contacts={this.getFilteredContacts()}
          onDelete={this.deleteContact}
        />
      </section>
    );
  }
}
