import { MAANDEN, DAGEN } from '../constants';
import { JAREN } from '../constants/index';

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

export const getJaarIndex = (kalender, from) => {
  const index = kalender.findIndex(
    (jaren, i) => jaren[0][0].jaar === Number(from)
  );
  return index !== -1 ? index : 0;
};

function getLastElement(arr) {
  return arr[arr.length - 1];
}

function wisselDagen(arr, from) {
  const beginVanDagIndex = arr.findIndex(dag => dag === from) + 1;
  return arr.slice(beginVanDagIndex).concat(arr.slice(0, beginVanDagIndex));
}

export const maakKalenderJaren = (jaar = eenJaar) => {
  const dagenTexts = Object.keys(DAGEN);
  const jaren = maakJaren(...JAREN);
  let laatsteDagVanVorigeMaand;
  let laatsteDagVanVorigeJaar;

  return jaren.map(ditJaar => {
    const maanden = jaar.map((maand, maandIndex) => {
      const restDagen = maand.dagen % 7;
      const aantalWeken = Math.floor(maand.dagen / 7);

      let maanden = [];
      let gewisseldDagen = dagenTexts;

      if (laatsteDagVanVorigeMaand) {
        gewisseldDagen = wisselDagen(dagenTexts, laatsteDagVanVorigeMaand.dag);
      }
      if (laatsteDagVanVorigeJaar) {
        gewisseldDagen = wisselDagen(dagenTexts, laatsteDagVanVorigeJaar.dag);
        laatsteDagVanVorigeJaar = null;
      }

      for (let i = 0; i < aantalWeken; i++) {
        gewisseldDagen.forEach(dag =>
          maanden.push({
            id: DAGEN[dag],
            dag,
          })
        );
      }

      if (restDagen) {
        const laatsteDagVanVorigeWeek = getLastElement(maanden);
        for (let i = 0; i < restDagen; i++) {
          const gewisseldDagen = wisselDagen(
            dagenTexts,
            laatsteDagVanVorigeWeek.dag
          );
          maanden.push({
            id: DAGEN[gewisseldDagen[i]],
            dag: gewisseldDagen[i],
          });
        }
      }

      maanden.unshift({ ...maand, jaar: ditJaar });
      laatsteDagVanVorigeMaand = getLastElement(maanden);
      return maanden;
    });
    const laatsteJaar = getLastElement(maanden);
    laatsteDagVanVorigeJaar = getLastElement(laatsteJaar);
    return maanden;
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
