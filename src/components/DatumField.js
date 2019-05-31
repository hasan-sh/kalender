import React from 'react';

export default function DatumField(props) {
  return (
    <div className="inputContainer">
      <label htmlFor="" data-title='Ingangsdatum'>
        <div>{props.geselecteerdeDatum}</div>
        <i className="material-icons icon" onClick={props.toggleKalender}>date_range</i>
      </label>
    </div>
  );
}
