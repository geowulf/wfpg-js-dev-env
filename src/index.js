import  './index.css';
import numeral from 'numeral';

/* eslint-disable no-console */
const courseValue = numeral(1000).format('$0.00');
// debugger;
console.log(`I would pay ${courseValue} for Greg's awesome coding skills!`);
