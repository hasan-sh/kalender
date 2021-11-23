
const date = new Date()

export const JAREN = [1995, date.getFullYear()];

export const MAANDEN = [
  'Januari',
  'Februari',
  'Maart',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Augustus',
  'September',
  'Oktober',
  'November',
  'December',
];

export const MAANDEN_DAGEN = [...Array(12).keys()].map(i => {
  const d = new Date(date.getFullYear(), i+1, 0)
  return {maandIndex: i+1, naam: MAANDEN[i], dagen: d.getDate()}
})

export const DAGEN = {
  zondag: 1,
  maandag: 2,
  dinsdag: 3,
  woensdag: 4,
  donderdag: 5,
  vrijdag: 6,
  zaterdag: 7,
};

export const DATUM_DELIMITER = '-';
