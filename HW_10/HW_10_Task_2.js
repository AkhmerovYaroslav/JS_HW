// У вас есть массив чисел. 
// Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

// Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

function countOccurrences(arr) {
    return numbers.reduce((occurrences, number) => {
        occurrences[number] = (occurrences[number] || 0) + 1;
        return occurrences;
      }, {});
}

console.log(countOccurrences(numbers));



















































































// const slimShady = {
//     name1: 'what?',
//     name2: 'who?',
//     chkaChka: 'chka-chka',
//     name3: 'Slim Shady',
//     getInfo(greetingsWord) {
//         return `${greetingsWord}, my name is ${this.name1}, my name is ${this.name2}, my name is ${this.chkaChka}, ${this.name3}`
//     }
// }

// console.log(slimShady.getInfo('Hi'));