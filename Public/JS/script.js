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

// Strings in JavaScript 
// Concatenation
const firstname = 'Melisa';
const lastname = 'Achiaa';
const middlename = 'Ama'
firstname + ' ' + middlename + ' ' + lastname;

// Template literal
`${firstname} ${middlename} ${lastname}`;


//String Methods

let fullName = "Melisa Ama Achiaa"
fullName.length

for(let i =0; i<= fullName.length -1; i++){
  console.log(i)
}
fullName.toUpperCase()
fullName.charAt(13)
fullName.slice(6,15)
fullName.split("")
fullName.replace("Achiaa", "bills")
fullName.indexOf("poah")

// string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 5000
console.log(`GHS${amount}`)
amount.toString()



// Write a function thatt will add a participant to our Google Classroom

// Functions
function addParticipant(fullname, email) {
  // validate fullname and email
  if (!fullname || !email) {
    return "participant not added";
  }
  // verify fullname and email
  if (fullname == "Ellen Ntiamoah" && email == "ellenntiamoah@gmail.com") {
    return "participant added";
  } else {
    return "participant not added";
  }
}

// invoking a function
addParticipant("Ellen Ntiamoah", "ellenntiamoah@gmail.com");
addParticipant('Melisa Ama Achiaa', 'melisaachiaa@gmail.com');


// functions
function addParticipant() {
  return 'participant added'
}

// Michael's answer

const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (!email) {
    return 'no email provided';
  }
  
  // check if email is valid
  if (!email.includes('@')) {
    return 'invalid email provided';
  }
  
  
// Add email to participants

participants.push(email);
return 'participant added';
}

addParticipant('eforextrabeauty@gmail.com');
addParticipant('ellenntiamoah@gmail.com');
addParticipant('ellenntiamoah@outlook.com');
addParticipant();
participants;



// // Arrays in JavaScript
// const users = [
//   {
//    username: 'Melisa',
//   password: '12345',
//   email: 'melisaachiaa@gmail.com'
// },

// {
//   username: 'Ellen Ntiamoah',
//   password: '1234',
//   email: 'ellenntiamoah@gmail.com'// Write a function that will take a user with first name,lastname and return fullname.

// functions
function fullName(user) {
  return `${user.firstname} ${user.lastname}`;

}

// functions
function fullName(user) {
  return {
    ...user,
  fullName:  `${user.firstname} ${user.lastname}`
  }

}

const user = {firstname : 'Melisa',
              lastname : 'Bridgerton'}

fullName(user);

// Array map
const users = [
 {firstname : 'Melisa', lastname : 'Featherington'},
{firstname : 'Ellen', lastname : 'Ntiamoah'},
{firstname : 'Evans', lastname :'Nketsia'},
{firstname : 'Pearl', lastname : 'Akrong'},
{firstname : 'Borrison', lastname : 'Sarpong'}

]

// users.map(fullName);

// Square of Numbers
function square(number) {
  return number **2;
}

square(5);

const numbers = [8,7,9,5,6,3];
numbers.map(square);


// Array filter
function itsEven(number) {
  return number % 2 === 0;
}

itsEven(5);
numbers.filter(itsEven)
// }
// ]
















































