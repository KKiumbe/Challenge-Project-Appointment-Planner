import React from 'react';

const ContactPicker = ({ contacts, onChange, value, name }) => {
  if (!contacts || contacts.length === 0) {
    return <select><option>No contacts available</option></select>;
  }

  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};

export default ContactPicker;
