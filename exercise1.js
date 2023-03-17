function countEvenOddZeroNumbers(newArray) {
   let zeroCount = 0;
   let evenCount = 0;
   let oddCount = 0;

   newArray.forEach(element => {
      if (typeof element !== "number") {
         return;
      }
      if (element === 0) {
         zeroCount++;
         return
      }
      if (element % 2 === 0) {
         evenCount++;
         return
      }
      if (element % 2 === 1) {
         oddCount++
      }
   });

   console.log(`Четных элементов: ${evenCount}`);
   console.log(`Нечетных элементов: ${oddCount}`);
   console.log(`Нулевых элементов: ${zeroCount}`);
}

const arr = [1, 2, 3, 4, null, 0, "test", undefined, 223];

countEvenOddZeroNumbers(arr);