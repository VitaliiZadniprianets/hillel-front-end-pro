import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import ContactList from './components/Contact/ContactList';
import ContactsModal from './components/Contact/ContactsModal/ContactsModal';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [nextContactId, setNextContactId] = useState(11); // Початкове значення ID

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSaveContact = newContact => {
    const updatedContact = { ...newContact, id: nextContactId };
    setContacts([...contacts, updatedContact]);
    setNextContactId(prevId => prevId + 1); // Збільшуємо ID для наступного контакту
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1>Список контактів</h1>
      <ContactList contacts={contacts} onDelete={handleDelete} />
      <button onClick={() => setIsModalOpen(true)}>Додати контакт</button>
      <ContactsModal
        isOpen={isModalOpen}
        onSave={handleSaveContact}
        onCancel={() => setIsModalOpen(false)}
        name={name}
        setName={setName}
        username={username}
        setUsername={setUsername}
        phone={phone}
        setPhone={setPhone}
      />
    </div>
  );
};

export default App;