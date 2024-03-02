import React from 'react';
//import ContactPicker from './ContactPicker'; // Assuming ContactPicker component is located in the same directory

import ContactPicker from '../contactPicker/ContactPicker';

const AppointmentForm = ({ handleSubmit, contacts }) => {
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" min={getTodayString()} required />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" name="time" required />
      </div>
      <div>
        <label>Contact:</label>
        
        <ContactPicker contacts={contacts} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
