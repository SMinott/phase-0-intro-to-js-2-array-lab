// Write your solution here!
// 1st code
let cats = ['Milo', 'Otis', 'Garfield'];

// 2nd code
//Lines 7-10 also works.
// function destructivelyAppendCat(name) {
//     cats.push(`${name}`);
// };

function destructivelyAppendCat(name) {
    cats.push('Ralph');
};

//3rd code
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
};

//4th code
function destructivelyRemoveLastCat() {
    cats.pop();
};

// 5th code
function destructivelyRemoveFirstCat() {
    cats.shift();
};

// 6th code
function appendCat(name) {
    let copyOfCats = [...cats, 'Broom'];
    return copyOfCats;
};

// 7th code
function prependCat(name) {
    let copyOfCats2 = ['Arnold', ...cats];
    return copyOfCats2;
};
// 8th code
//Can't use .pop() because it is destructive (will change original array)
function removeLastCat() {
    return cats.slice(0, cats.length -1);
};
// 9th code
function removeFirstCat() {
    return cats.slice(1);
};