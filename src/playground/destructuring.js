/*
const person = {
  name: 'Anthony',
  age: 18,
  location: {
    city: 'Miami',
    temp: '80'
  }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;

console.log(`It's ${temperature} in ${city}`);
*/
/*
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    //name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
*/

const address = ['7304 SW 22nd St', 'Miami', 'Florida', '33155'];
const [, city = 'New York', state = 'New York'] = address;
console.log(`you are in ${city}, ${state}`);

const item = ['Cofee (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee, , mediumPrice] = item;

console.log(`A medium ${hotCoffee} costs ${mediumPrice}`);
