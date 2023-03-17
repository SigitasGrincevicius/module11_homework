/* Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */

function isPrime(num) {
   if (num < 2 || num > 1000) {
      console.log('Данные неверны');
   }

   for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
         console.log(num + " не является простым числом");
         return;
      }
   }
   console.log(num + " является простым числом");
}

isPrime(37);