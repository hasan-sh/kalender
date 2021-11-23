import React, { useState } from 'react';
import { DATUM_DELIMITER } from '../constants';
import { getJaarIndex } from '../utils';

export default function Display({
  kalender,
  geselecteerdeDatum,
}) {

  return (
    <div className="display">
      {geselecteerdeDatum}
      <button>Submit</button>
    </div>
  );
}

