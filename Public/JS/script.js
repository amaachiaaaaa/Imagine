const btn = document.getElementById('btn');
btn.onclick = function () {
   const name = prompt('enter your full name');
   document.getElementById('name').innerText = name;
}

// variables
/*const pi = 3.142;
let username = 'amaachiaa';
let age = 101;
let present = false;

// objects
const person = {
    username: 'amaachiaa',
    age: 101,
    present: false,
    child:{
        name: 'Ellen',
        friend:{
        name: 'Evans',
        } 

    }
}*/


/*console.log(person.username);
console.log(person.age)
console.log(person.present)
person.age = 125
console.log(person)

console.log(person.child.friend.name = 'mercy');*/



// Arrays
const bottle1 = {
    size: 'Large',
    color: 'pink'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'white'
  }
  
  
  
  const bottles = [bottle1, bottle2];
  bottles;
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[2]
  bottles[1].size;
  bottles[1].color;
  
  const date = new Date();
  date.getDay();
  date.toString();
  
  // if/Else
  const age = 18
  if (age>=18) {
    'You are True'
  } else {
    'You are False'
  }
  
  // For loop
  for (let i = 0; i <= 5; i++) {
    console.log('We did it!',i )
  
  }
  
  for (let i = 0; i <= bottles.length; i++) {
    // console.log('We did it!',i )
    console.log(bottle1)
  
  }
    
    
// Funtions
// Defining a Function
function login(username, password) {
  // validate username and password
  if (!username || !password) {
    return 'username or password not provided';
  }
  // verify username and password
  if (username == 'amaachiaaaaa' && password == '12345') {
     return 'user is logged in';
  } else {
    return 'invalid username or password'
  }
    
}

// invoking a function
login('amaachiaaaaa');


// Basic Arithematic operations
11 + 12;
190 + 50;
1 + 1.7;
150 - 267;
47/56;
14 % 3;


Number('2y') + 5
'2' + '2'
Math.max(50,65,10)














































