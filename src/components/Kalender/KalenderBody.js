import React from 'react';
import { DAGEN } from '../../constants/index';

export default function KalenderBody({ maand, onDagClick }) {
  return (
    <div className="calenderBody">
      {Object.keys(DAGEN).map(dag => (
        <div key={dag} className="weekDay">
          {dag.slice(0, 2)}
        </div>
      ))}
      {maand.map((dag, i) =>
        // the first element is preserved for the current month.
        i === 0 ? null : (
          <div
            key={i}
            className="weekDay"
            style={{ gridColumnStart: i < 7 && dag.id }}
            title={dag.dag}
            onClick={() => onDagClick(i)}
          >
            {i}
          </div>
        )
      )}
    </div>
  );
}
