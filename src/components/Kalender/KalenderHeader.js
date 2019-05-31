import React from 'react';
import { MAANDEN } from '../../constants';

export default function KalenderHeader({ onChange, jaren, maand, jaar }) {
  return (
    <div className="calenderHeader">
      <label htmlFor="" data-title="Ingangsdatum" />
      <select name="maand" value={maand[0].maandIndex - 1} onChange={onChange}>
        {MAANDEN.map((maand, i) => (
          <option key={i} value={i}>
            {maand}
          </option>
        ))}
      </select>

      <select value={jaar} onChange={onChange}>
        {jaren.map((j, i) => (
          <option key={i} value={j}>
            {j}
          </option>
        ))}
      </select>
    </div>
  );
}
