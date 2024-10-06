/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function getMergedArrays (...arrays) { 
  return [].concat(...arrays);  
}

console.log(getMergedArrays([1,2,3,4],[6,7,8,9,10],[12,13,14,15],[16],[17,18,18.5,19]));



nextTask()

/*
2. Devide by _
  - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
  - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
  - Пример: I am super engineer => i_Am_Super_Engineer
*/

function getDevidedBy_(sentence) {
    const words = sentence.toLowerCase().split(' ');
    return words.map((word, i) => {
      if (i !== 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
        return word;
  }).join('_');
  return devideBy_sentence;
}

console.log(getDevidedBy_("MAY I HAVE some loops bROtHeR"));



nextTask()  

/*
3. Фибаначчи
  - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
  - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
  - Например fibanacci(8) //21
*/

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(8));



















function nextTask () {
    console.log("\n======================================NEXT TASK========================================\n");
}