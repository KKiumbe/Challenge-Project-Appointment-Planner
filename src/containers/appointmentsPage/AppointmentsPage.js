import React, { useState } from 'react';

import AppointmentForm from '../../components/appointmentForm/AppointmentForm'; // Adjust the path based on your directory structure
 import {TileList} from '../../components/tileList/TileList';
const AppointmentsPage = ({ appointments, contacts, addAppointmentCallback }) => {
  // Local state variables to track form inputs
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Callback function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new appointment using the callback function
    addAppointmentCallback(name, contact, date, time);
    // Clear the form
    setName('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      {/* Add Appointment Section */}
      <h2>Add Appointment</h2>
      <AppointmentForm
        name={name}
        setName={setName}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
      />

      {/* Appointments Section */}
      <h2>Appointments</h2>
      <TileList data={appointments} />
    </div>
  );
};

export default AppointmentsPage;
