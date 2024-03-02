import React, { useState } from "react";

//import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (  { contacts, addContactCallback }) => {
  

 
    // Local state for managing input values
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
  
    // Event handler functions for input changes
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    // Event handler function for form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Call the callback function to add the new contact
      addContactCallback(name, phone, email);
  
      // Clear input fields
      setName('');
      setPhone('');
      setEmail('');
    };
  
    return (
      <div>
        <h1>Contacts</h1>
        <TileList data={contacts} />
        <ul>
          {/* Display current list of contacts */}
          {contacts.map((contact, index) => (
            <li key={index}>{contact.name} - {contact.phone} - {contact.email}</li>
          ))}
        </ul>
        <h2>Add New Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" value={phone} onChange={handlePhoneChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  };
  
  export default ContactsPage;
  



