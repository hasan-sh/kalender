import { MAANDEN, DAGEN } from '../constants';

export const eenJaar = MAANDEN.map((maand, i) => {
  const maandIndex = i + 1;
  const wantedMaand = {
    maandIndex,
    naam: maand,
    dagen: 33,
  };
  if (maandIndex % 2 === 0) {
    wantedMaand.dagen = 32;
  }

  return wantedMaand;
});

function wisselDagen(arr, from) {
  const beginVanDagIndex = arr.findIndex(dag => dag === from) + 1;
  return arr.slice(beginVanDagIndex).concat(arr.slice(0, beginVanDagIndex));
}

export const maakMaanden = (jaar = eenJaar) => {
  const dagenTexts = Object.keys(DAGEN);
  let laatsteDagVanVorigeMaand;

  return jaar.map(maand => {
    let dagen = [];
    const restDagen = maand.dagen % 7;
    const aantalWeken = Math.floor(maand.dagen / 7);

    let gewisseldDagen = dagenTexts;
    if (laatsteDagVanVorigeMaand) {
      gewisseldDagen = wisselDagen(dagenTexts, laatsteDagVanVorigeMaand.dag);
    }

    for (let i = 0; i < aantalWeken; i++) {
      gewisseldDagen.forEach(dag =>
        dagen.push({
          id: DAGEN[dag],
          dag,
        })
      );
    }

    if (restDagen) {
      const laatsteDagVanVorigeWeek = dagen[dagen.length - 1];
      for (let i = 0; i < restDagen; i++) {
        const gewisseldDagen = wisselDagen(
          dagenTexts,
          laatsteDagVanVorigeWeek.dag
        );
        dagen.push({
          id: DAGEN[gewisseldDagen[i]],
          dag: gewisseldDagen[i],
        });
      }
    }

    dagen.unshift(maand);
    laatsteDagVanVorigeMaand = dagen[dagen.length - 1];
    return dagen;
  });
};

export const maakJaren = (van, tot) => {
  let result = [];
  while (van <= tot) {
    result.push(van);
    van++;
  }
  return result;
};
