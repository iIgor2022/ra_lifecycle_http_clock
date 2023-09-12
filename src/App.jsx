import { useState } from 'react'
import './App.css'
import uniqid from 'uniqid'

export default function App() {
  const [clocks, setClocks] = useState([]);

  function handleFormSubmit(form) {
    setClocks((prevState) => [...prevState, {
      id: uniqid(),
      name: form.name,
      userTimezone: form.userTimezone,
    }]);
  }

  function getClockIndex(id) {
    const index = clocks.findIndex((clock) => clock.id === id);

    return index;
  }

  function handleDeleteClick(id) {
    const index = getClockIndex(id);

    const updatedClocks = [
      ...clocks.slice(0, index),
      ...clocks.slice(index + 1),
    ];
  }
}