import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
   
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [...contacts, contact]
    }))
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        
        <h2>Contacts</h2>
        <Filter contacts={contacts}/>
        <ContactsList contacts={contacts} />    
      </div>
    );
  }
}
