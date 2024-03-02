import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts([...contacts, { name, phone, email }]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments([...appointments, { name, contact, date, time }]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Root>
              <Navigate to={ROUTES.CONTACTS} replace />
            </Root>
          }
        />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContactCallback={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointmentCallback={addAppointment}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
