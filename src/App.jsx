import { useState } from 'react'
import './App.css'
import uniqid from 'uniqid'
import Form from './components/form';
import Clock from './components/clock';

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

    setClocks(updatedClocks);
  }

  return (
    <div className='app-container'>
      <Form onFormSubmit={handleFormSubmit}/>
      <div className='app-clocks-container'>
        {clocks.map((clock) => {
          return (
            <Clock
              key={clock.id}
              id={clock.id}
              name={clock.name}
              userTimezone={clock.userTimezone}
              onDeleteClick={handleDeleteClick}
            />
          );
        })}
      </div>
    </div>
  );
}