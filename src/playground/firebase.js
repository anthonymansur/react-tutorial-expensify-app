
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCSVR9fAZ48Rz4oZ7Aah43jnlZUJ6xzO7E",
  authDomain: "expensify-f29eb.firebaseapp.com",
  databaseURL: "https://expensify-f29eb.firebaseio.com",
  projectId: "expensify-f29eb",
  storageBucket: "expensify-f29eb.appspot.com",
  messagingSenderId: "262130906973"
};

firebase.initializeApp(config);

const database = firebase.database();


// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})


/*
database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
  console.log(expenses);
});

setTimeout(() => {
  database.ref('expenses/-L9rF3w9GBkR61agnqWq').update({
    amount: 19000
  });
}, 2000);
*/






/*
database.ref().on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
});





/*
database.ref('expenses').push({
  description: 'rent', 
  note: 'n/a',
  amount:1000,
  createdAt: 3284134
});

database.ref('expenses').push({
  description: 'coffee', 
  note: 'delicious',
  amount:1000,
  createdAt: 3431435
});

database.ref('expenses').push({
  description: 'Drink', 
  note: 'n/a',
  amount:3,
  createdAt: 3413
});*/




//database.ref('notes/-L9rD54zxufVpBKvLx65').remove();





/*database.ref('notes').push({
  title: 'Course Topics',
  body: 'React Native, Angular, Python'
})*/





/*
const firebaseNotes = {
  notes: {
    adidjnvad: {
      title: 'First note!',
      body: 'This is my note'
    },
    sijkvamdvljk: {
      title: 'Another note',
      body: 'This is my note'
    }
  }
}

const notes = [{
  id: '12',
  title: 'First note!',
  body: 'This is my note'
}, {
  id: '761ase',
  title: 'Another note',
  body: 'This is my note'
}];

database.ref('notes').set(notes);
*/









/*
database.ref().on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
});

  setTimeout(() => {
    database.ref('job/company').set('Google');
  }, 2000);
*/



/*
database.ref().set({
  name: 'Anthony Mansur',
  age: 18,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref().update({
  stressLevel: '9',
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});
*/


//database.ref('age').set(19);
//database.ref('location/city').set('Miami');

/*database.ref('attributes').set({
    height: 65,
    weight: 160
  }).then(() => {
    console.log('Attributes have been updated');
  }).catch((e) => {
    console.log('Error in changing attribute', e);
  });

  database.ref().update({
    job: 'Software Developer',
    'location/city': 'Miami'
  });
*/

/*database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('isSingle has been removed.');
  }).catch((e) => {
    console.log('Error in removing isSingle from data', e);
  });
  */