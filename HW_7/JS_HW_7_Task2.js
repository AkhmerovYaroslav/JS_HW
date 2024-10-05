/*
1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function checkForPalindrome(word) {
  const wordToLowerCase = word.toLowerCase();
  const wordSplitted = wordToLowerCase.split('');
  const wordBackwards = wordSplitted.reverse().join('');
  return wordToLowerCase === wordBackwards;
}

console.log(checkForPalindrome('TeneT'));





nextTask()

/*
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
    и возвращает слово с наибольшим количеством букв. 
    Если таких слов несколько - возвращает их все.
 */

function getBiggestWord(sentence) {
  const words = sentence.split(' ');
  let biggestWordlength = 0;
  const biggestWords = [];                      // Массив для хранения самых длинных слов
  for (const word of words) {
    if (word.length > biggestWordlength) {
      biggestWords.length = 0;                  // Чистим массив как только появляется новое самое длинное слово
      biggestWords.push(word);                  // Пушим это слово в массив
      biggestWordlength = word.length;
    } else if (word.length === biggestWordlength) {
      biggestWords.push(word);                  // В случае наличия длиннейших слов с одинаковой длинной пушим в массив
    }
  }
  return biggestWords.join(' ');
}

console.log(getBiggestWord("съешь ещё этих мягких французских французских булок да выпей Эйяфьятлайокудль Эйяфьятлайокудль Эйяфьятлайокудль Эйяфьятлайокудль Эйяфьятлайокудль Эйяфьятлайокудль Эйяфьятлайокудль чаю"));

// console.log(getBiggestWord("съешь ещё этих мягких французских булок да выпей чаю"));














function nextTask () {
    console.log("\n======================================NEXT TASK========================================\n");
}