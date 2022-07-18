//------------ No. 1-----------//
const firstArr = Array();
console.log('');
console.log('Number 1');
console.log('');
console.log('firstArr = ' + firstArr);
console.log('firstArr is an empty array');

//------------ No. 2-----------//
console.log('');
console.log('Number 2');
console.log('');
let secondArr = Array(7);
console.log(`secondArr = ${secondArr}`);
console.log('secondArr is an array of more than 5 elements');

//------------ No. 3-----------//
console.log('');
console.log('Number 3');
console.log('');
console.log(`secondArr has ${secondArr.length} elements`);

//------------ No. 4-----------//
console.log('');
console.log('Number 4');
console.log('');
secondArr = [
    'Depapepe',
    'Doel Sumbang',
    'Gary Moore',
    'Mooner',
    'Chick Corea',
    'Kenny G',
    'Agrume',
];
console.log('secondArr has an odd number of elements');
console.log('Here are some elements of secondArr');

const midIndex = (secondArr.length - 1) / 2;
const lastIndex = secondArr.length - 1;

console.log(`First element: ${secondArr[0]}`);
console.log(`Mid element: ${secondArr[midIndex]}`);
console.log(`Last element: ${secondArr[lastIndex]}`);

//------------ No. 5-----------//
console.log('');
console.log('Number 5');
console.log('');

const mixedDataTypes = [
    'Gery',
    'Oktaviano',
    29,
    ['HTML', 'CSS', 'Javascript', 'React'],
    {
        'status': 'unemployed',
        'married': true
    },
    'Bandung',
    ['English', 'Indonesian', 'Sundanese']
];

console.log(`The mixedDataTypes array is an array with the length of ${mixedDataTypes.length} elements`);

//------------ No. 6-----------//
console.log('');
console.log('Number 6');
console.log('');
console.log('Initiating "itCompanies" array ... ');

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];

//------------ No. 7-----------//
console.log('');
console.log('Number 7');
console.log('');
console.log('itCompanies array contents: ');
console.log(itCompanies);

//------------ No. 8-----------//
console.log('');
console.log('Number 8');
console.log('');
console.log(`itCompanies array length is ${itCompanies.length}`);

//------------ No. 9-----------//
console.log('');
console.log('Number 9');
console.log('');

console.log('Some itCompanies array elements:');
console.log(`First element: ${itCompanies[0]}`);
console.log(`Mid element: ${itCompanies[midIndex]}`);
console.log(`Last element: ${itCompanies[lastIndex]}`);

//------------ No. 10-----------//
console.log('');
console.log('Number 10');
console.log('');
console.log('full list of itCompanies array contents:');

itCompanies.forEach(item => {
    console.log(item);
});

//------------ No. 11-----------//
console.log('');
console.log('Number 11');
console.log('');
console.log('Uppercase itCompanies elements:');


itCompanies.forEach(item => {
    console.log(item.toUpperCase());
});

//------------ No. 12-----------//
console.log('');
console.log('Number 12');
console.log('');

const firstSubset = itCompanies.slice(0, itCompanies.length - 1);
const firstPart = firstSubset.join(', ');
const secondPart = itCompanies[itCompanies.length - 1];
console.log(`${firstPart} and ${secondPart} are big IT companies.`);

//------------ No. 13-----------//
console.log('');
console.log('Number 13');
console.log('');
console.log('//////// WORK IN PROGRESS ////////');
console.log('');
//------------ No. 14-----------//
//------------ No. 15-----------//
//------------ No. 16-----------//
//------------ No. 17-----------//
//------------ No. 18-----------//
//------------ No. 19-----------//
//------------ No. 20-----------//
//------------ No. 21-----------//
//------------ No. 22-----------//
//------------ No. 23-----------//
