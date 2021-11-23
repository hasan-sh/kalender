import React, { useState, useEffect } from 'react';
import './App.css';

import DatumField from './components/DatumField';
import Kalender from './components/Kalender/Kalender';
import Display from './components/Display';
import { maakKalenderJaren } from './utils';

function App() {
  const [kalender, setKalender] = useState([]);
  const date = new Date();
  const [geselecteerdeDatum, setGeselecteerdeDatum] = useState(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setKalender(maakKalenderJaren().reverse());
  }, []);

  return (
    <div className="App">
      <div>
        <p>Werknemer kalender: </p>
        <DatumField
          geselecteerdeDatum={geselecteerdeDatum}
          toggleKalender={() => setOpen(!open)}
        />
        {open && kalender.length && (
          <Kalender
            kalender={kalender}
            geselecteerdeDatum={geselecteerdeDatum}
            pickEenDatum={datum => {
              setGeselecteerdeDatum(datum);
              // setOpen(false);
            }}
          />
        )} 
      </div>
      {geselecteerdeDatum && (
        <Display geselecteerdeDatum={geselecteerdeDatum} kalender />
      )}
    </div>
  );
}

export default App;
