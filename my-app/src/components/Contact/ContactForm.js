import React, { useState } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSave({ name, username, phone });
    setName('');
    setUsername('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Имя:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <label>Прізвище:</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <label>Телефон:</label>
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </form>
    </div>
  );
};

export default ContactForm;