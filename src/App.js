import React, { useState, useEffect } from 'react';
import './App.css';

import DatumField from './components/DatumField';
import Kalender from './components/Kalender/Kalender';
import { maakKalenderJaren } from './utils';

function App() {
  const [kalender, setKalender] = useState([]);
  const [geselecteerdeDatum, setGeselecteerdeDatum] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setKalender(maakKalenderJaren());
  }, []);

  return (
    <div className="App">
      <p>Kalender - Hypotheekbond.</p>
      <DatumField
        geselecteerdeDatum={geselecteerdeDatum}
        toggleKalender={() => setOpen(!open)}
      />
      {open && (
        <Kalender
          kalender={kalender}
          geselecteerdeDatum={geselecteerdeDatum}
          pickEenDatum={datum => {
            setGeselecteerdeDatum(datum);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
