import React from 'react';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import NewBooking from './NewBooking.jsx';

export default function BookingTabs() {

    const [selected, setSelected] = useState("booking");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={selected}
      onSelect={(k) => setSelected(k)}
      className="mb-3"
    >
      <Tab eventKey="booking" title="Effettua una prenotazione">
        <NewBooking />
      </Tab>
      <Tab eventKey="bookingList" title="Le tue prenotazioni">
        Tab content for Profile
      </Tab>
    </Tabs>
  )
}
