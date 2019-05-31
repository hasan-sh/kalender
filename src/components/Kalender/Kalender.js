import React, { useState } from 'react';
import KalenderBody from './KalenderBody';
import KalenderHeader from './KalenderHeader';

export default function Kalender({ maanden, jaren, pickEenDatum, open }) {
  const [maand, setMaand] = useState(maanden[0]);
  const [jaar, setJaar] = useState(jaren[0]);

  function onChange({ target: { value, name } }) {
    if (name) {
      const selectedMaand = maanden[value];
      setMaand(selectedMaand);
    } else {
      setJaar(value);
    }
  }

  function onDagClick(dag) {
    let datum = `${dag}-${maand[0].maandIndex}-${jaar}`;
    pickEenDatum(datum);
  }
  return (
    <div className="inputContainer">
      <KalenderHeader
        jaren={jaren}
        jaar={jaar}
        maand={maand}
        onChange={onChange}
      />
      <KalenderBody maand={maand} onDagClick={onDagClick} />
    </div>
  );
}
