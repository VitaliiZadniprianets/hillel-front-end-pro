import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import ContactList from './components/Contact/ContactList';
import ContactForm from './components/Contact/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSave = newContact => {
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>Список контактів</h1>
      <ContactList contacts={contacts} onDelete={handleDelete} />
      {showForm ? (
        <ContactForm onSave={handleSave} onCancel={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)}>Додати контакт</button>
      )}
    </div>
  );
};

export default App;