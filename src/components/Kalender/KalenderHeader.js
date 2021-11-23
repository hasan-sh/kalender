import React from 'react';
import { MAANDEN, DATE } from '../../constants';

export default function KalenderHeader({
  onChange,
  jaren,
  maand: ditMaand,
  geselecteerdeDatum,
  jaar: ditJaar,
}) {
  return (
    <div className="calenderHeader">
      <label htmlFor="" data-title="Ingangsdatum" />
      <select
        name="maand"
        value={ditMaand[0].maandIndex - 1}
        onChange={onChange}
      >
        {/* {MAANDEN.map((maand, i) => i <= DATE.getMonth() && ( */}
        {MAANDEN.map((maand, i) => (
          <option key={i} value={i}>
            {maand}
          </option>
        ))}
      </select>

      <select value={ditJaar[0][0].jaar} onChange={onChange}>
        {jaren.map((j, i) => (
          <option key={i} value={j[0][0].jaar}>
            {j[0][0].jaar}
          </option>
        ))}
      </select>
    </div>
  );
}
