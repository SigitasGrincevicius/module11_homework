/* Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. */

const addNumber = function (num1) {
   return function (num2) {
      return num1 + num2;
   }
}

const calcSum = addNumber(77);
console.log(`Sum: ${calcSum(29)}`);