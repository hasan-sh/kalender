import React from 'react';
import { DAGEN, DATE, DATUM_DELIMITER } from '../../constants/index';

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
      {maand.map((dag, i) => {
        const overToday = i > DATE.getDate() && maand[0].maandIndex === DATE.getMonth() + 1
        const overMonth = maand[0].maandIndex > DATE.getMonth() + 1
        // the first element is preserved for the current month.
        return (i === 0 ? null : (
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
              color: (overToday || overMonth) && "#ffffff61",
              cursor: (overToday || overMonth) && "no-drop",
            }}
            title={dag.dag}
            onClick={() => {
              if (overToday || overMonth) return
              const { maandIndex, jaar } = maand[0];
              const datum = [i, maandIndex, jaar].join(DATUM_DELIMITER);
              onDagClick(datum);
            }}
          >
            {i}
          </div>
        )
        )}
      )}
    </div>
  );
}
