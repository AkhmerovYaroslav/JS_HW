/* 1. Цикл for..of в массиве
  - Создайте массив [1,2,3,4,5,6,7,8,9,10]
  - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
    если элемент четный - возведет его в квадрат
    если элемент нечетный - возведет его в 3ю степень
*/ 

const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
const result = [];

for (const number of arrayOfNumbers) {
        if (number % 2 === 0) {
        result.push(number ** 2);        
        } else {
        result.push(number ** 3);
        }
}
 console.log(result);

nextTask()



/*
2. Методы массивов
  - Создайте массив [1,2,3,4,5]
  - Добавьте в конец массива число 6 соответствующим методом
  - Добавьте в начало массива число 0 соответствующим методом
  - Удалите элемент с индексом 2 из массива соответствующим методом
  - Удалите последний элемент из массива соответствующим методом
  В результате вы должны получить [0, 1, 3, 4, 5]
 */ 
 
const arrOfNumbers = [1,2,3,4,5];
arrOfNumbers.push(6);
arrOfNumbers.unshift(0);
arrOfNumbers.splice(2, 1);
arrOfNumbers.pop()
console.log(arrOfNumbers);

nextTask()

  /*
3. Деструктуризация массивов
  - Создайте массив из 5 любых чисел (придумать числа самим)
  - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
  - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
  */ 
const arrOfNum = [7, 12, 155, 3.14, 42];

const [first, second, ...rest] = arrOfNum;
console.log(first);
console.log(second);
console.log(...rest);

nextTask()
  /*
4. Конкатенация массивов
  - Создайте массив с числами [1,2,3,4,5]
  - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
  - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
  - Используйте спред оператор
*/ 

const arrayOfNum = [1,2,3,4,5];
const arrOfNombers = [6, 7, 8, 9, 10];
const doubleNombers = [...arrayOfNum, ...arrOfNombers];
console.log(doubleNombers);

















function nextTask () {
        console.log("\n======================================NEXT TASK========================================\n");
}