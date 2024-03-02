import React from 'react';

const ContactForm = ({ addContactCallback }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    addContactCallback({ name, phone, email });
    event.target.reset(); // Clear form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
