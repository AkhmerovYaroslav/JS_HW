const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];



// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)
function addCharacter(character) {characters.push(character);}

addCharacter({'name':'Boris', 'age':46});

console.log(characters);


// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(name) {
    return character = characters.find((element) => element.name === name);
}
console.log(getCharacter('Fred'));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge 
// getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

function getCharactersByAge(minAge) {
    return characters.filter((element) => element.age >= minAge); 
}
console.log(getCharactersByAge(40));

// 4. Напишите функцию updateCharacter(name, newCharacter). 
// (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)

function updateCharacter(name, newCharacter){
    const character = getCharacter(name);
    return characters.splice(character, newCharacter);
    // character ? Object.assign(character, newCharacter) : console.log('No character with such a name');

};
updateCharacter('Boris', {name: 'Billy', age: 59})
console.log(characters);


// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

function removeCharacter(name) {    
    const getCharacterbyName = element => element.name === name;
    const indexOfCharacter = characters.findIndex(getCharacterbyName);
    return characters.splice(indexOfCharacter, 1);
}
removeCharacter('Fred');
console.log(characters);