import React, { useState } from 'react';
import './App.css';

import DatumField from './components/DatumField';
import Kalender from './components/Kalender/Kalender';
import { JAREN } from './constants/index';
import { maakJaren, maakMaanden } from './utils';

function App() {
  const [geselecteerdeDatum, setGeselecteerdeDatum] = useState('1-1-1995');
  const [open, setOpen] = useState(true);

  const maanden = maakMaanden();
  const jaren = maakJaren(...JAREN);

  return (
    <div className="App">
      <p>Kalender - Hypotheekbond.</p>
      <DatumField
        geselecteerdeDatum={geselecteerdeDatum}
        toggleKalender={() => setOpen(!open)}
      />
      {open && (
        <Kalender
          maanden={maanden}
          jaren={jaren}
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
