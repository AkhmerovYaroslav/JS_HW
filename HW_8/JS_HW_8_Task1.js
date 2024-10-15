/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
  2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - найдите элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/

const arrOfNum = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];


arrOfNum.forEach(num => {
   if (num % 3 === 0) {
      console.log(num);
   }
});

nextStep()

console.log(arrOfNum.map(num => num - arrOfNum.length));

nextStep()

console.log(arrOfNum.filter((num, i) => {
   if (i > 0 && num > arrOfNum[i - 1]) {
      return num;
   }
}));

nextStep()

console.log(arrOfNum.find((num, i) => {
   if (num === i) {
      return num;
   }
}));


nextStep()

console.log(arrOfNum.toSorted((a, b) => a - b));

nextStep()

console.log(arrOfNum.reduce((acc, num) => { return acc + num}, 0));


nextStep()


console.log(arrOfNum.some(num => num > 90));

nextStep()

console.log(arrOfNum.every(num => num > 9));
































function nextStep() {
   console.log('======================================================')
}