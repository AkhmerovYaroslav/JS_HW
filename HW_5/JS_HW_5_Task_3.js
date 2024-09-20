/*
Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/

const text = "";
const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz'

let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < text.length; i++) {
        const lowerCaseText = text[i].toLowerCase();
        if (vowels.indexOf(lowerCaseText) !== -1) {
                vowelsCount++;
        } else if (consonants.indexOf(lowerCaseText) !== -1) {
            consonantsCount++;
    }
}



console.log(`${text} contains ${vowelsCount} vowels and ${consonantsCount} consonants`);
