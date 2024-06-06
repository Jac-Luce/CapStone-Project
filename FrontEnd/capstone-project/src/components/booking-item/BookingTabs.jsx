import React from 'react';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import NewBooking from './NewBooking.jsx';
import MyBooking from './MyBooking.jsx';

export default function BookingTabs({userId}) {

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
        <MyBooking userId={userId}/>
      </Tab>
    </Tabs>
  )
}
