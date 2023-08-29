import React from 'react';
import ContactsHeader from '../Header/ContactsHeader'; 

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <table>
        <ContactsHeader />
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => onDelete(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;