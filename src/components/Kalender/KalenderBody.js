import React from 'react';
import { DAGEN, DATUM_DELIMITER } from '../../constants/index';

export default function KalenderBody({
  maand,
  geselecteerdeDatum,
  onDagClick,
}) {
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
            style={{
              gridColumnStart: i < 7 && dag.id,
              background:
                i === geselecteerdeDatum.dag &&
                geselecteerdeDatum.maand === maand[0].maandIndex &&
                geselecteerdeDatum.jaar === maand[0].jaar &&
                'gray',
            }}
            title={dag.dag}
            onClick={() => {
              const { maandIndex, jaar } = maand[0];
              const datum = [i, maandIndex, jaar].join(DATUM_DELIMITER);
              onDagClick(datum);
            }}
          >
            {i}
          </div>
        )
      )}
    </div>
  );
}
