/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(users, username) {

  return users.find(function(user) {
      return user.username === username;
  });
}

const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];

console.log(findUserByUsername(users, 'mlewis')); 
console.log(findUserByUsername(users, 'taco'));   


/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
// */

function removeUser(users, username) {
  var index = users.findIndex(function(user) {
      return user.username === username;
  });

  if (index !== -1) {
      return users.splice(index, 1)[0];
  }

  return undefined;
}


const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];

console.log(removeUser(users, 'akagen')); 
console.log(removeUser(users, 'taco')); 
