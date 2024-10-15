/*
Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
*/
const words = [
    "umbrella",   
    "apple",      
    "ocean",      
    "independent",
    "education",  
    "elephant",   
    "island",     
    "universe",   
    "environment",
    "queue",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "ggggggggggg"       
  ];

function countVovels(word) {
    const vovels = 'aueioyAUEIOY';
    return [...word].filter(char => vovels.includes(char)).length;
}

function sortByVovels(array) {
    return array.toSorted((word1, word2) => countVovels(word1) - countVovels(word2));
}

console.log(sortByVovels(words));