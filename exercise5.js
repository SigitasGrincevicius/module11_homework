const calcPowerOfNum = (base, n) => {
   if (typeof base !== 'number' || typeof n !== 'number') {
      console.log('Incorrect type arguments provided');
      return NaN;
   }
   return Math.pow(base, n);
}

console.log(calcPowerOfNum(8, 3));