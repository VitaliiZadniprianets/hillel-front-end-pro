import React from 'react';
import Modal from 'react-modal';
import ContactForm from '../ContactForm';
import './ContactsModal.css';

const ContactsModal = ({ onSave, onCancel, isOpen, name, setName, username, setUsername, phone, setPhone }) => {
    const handleSave = () => {
      onSave({ name, username, phone });
      setName('');
      setUsername('');
      setPhone('');
    };
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onCancel}
        contentLabel="Додати контакт"
      >
        <h2>Додати контакт</h2>
        <ContactForm
          onSave={handleSave}
          onCancel={onCancel}
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          phone={phone}
          setPhone={setPhone}
        />
      </Modal>
    );
  };
  
  export default ContactsModal;