import React, { useState } from 'react';
import KalenderBody from './KalenderBody';
import KalenderHeader from './KalenderHeader';
import { DATUM_DELIMITER } from '../../constants';
import { getJaarIndex } from '../../utils';

export default function Kalender({
  kalender,
  pickEenDatum,
  geselecteerdeDatum,
}) {
  let [
    geselecteerdeMaandIndex,
    geselecteerdeJaarIndex,
    geselecteerdeJaar,
    geselecteerdeDag,
  ] = [1, 0, false, false];

  if (geselecteerdeDatum) {
    [
      geselecteerdeDag,
      geselecteerdeMaandIndex,
      geselecteerdeJaar,
    ] = geselecteerdeDatum.split(DATUM_DELIMITER).map(x => Number(x));
    geselecteerdeJaarIndex = getJaarIndex(kalender, geselecteerdeJaar);
  }

  const [maand, setMaand] = useState(
    kalender[geselecteerdeJaarIndex][geselecteerdeMaandIndex - 1]
  );
  const [jaar, setJaar] = useState(kalender[geselecteerdeJaarIndex]);

  function onChange({ target: { value, name } }) {
    if (name) {
      const selectedMaand = jaar[value];
      setMaand(selectedMaand);
    } else {
      const jaarIndex = getJaarIndex(kalender, value);
      setJaar(kalender[jaarIndex]);
      setMaand(kalender[jaarIndex][0]);
    }
  }

  function onDagClick(datum) {
    pickEenDatum(datum);
  }
  return (
    <div className="inputContainer">
      <KalenderHeader
        jaren={kalender}
        jaar={jaar}
        maand={maand}
        geselecteerdeDatum={geselecteerdeDatum}
        onChange={onChange}
      />
      <KalenderBody
        maand={maand}
        jaar={jaar}
        geselecteerdeDatum={{
          dag: geselecteerdeDag,
          maand: geselecteerdeMaandIndex,
          jaar: geselecteerdeJaar,
        }}
        onDagClick={onDagClick}
      />
    </div>
  );
}
