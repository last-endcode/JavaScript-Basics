// Date

const months = [
  'January',
  'February',
  'March',
  'April',
  'May ',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const date = new Date();
console.log(date); //today : 2020-10-18T12:05:07.047Z
// getMonth
const month = date.getMonth();
console.log(months[month]);
// getDay
const day = date.getDay();
console.log(days[day]);

// getDate
console.log(date.getDate());
// getfullyears
console.log(date.getFullYear());

// example
const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;
console.log(sentence);
