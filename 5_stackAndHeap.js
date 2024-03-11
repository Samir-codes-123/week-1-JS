//stack memory(primitive) gives a copy or only value
//heap (non primitive) gives reference or address

let myName="Samir"
let myAnotherName=myName
myName="samir"
myAnotherName="Khanal"// pass by value so only my another changes
console.log(myAnotherName);
console.log(myName);

//object declaration
let user1={
    email:"khanalsamir522gmail.com"
}

let user2=user1 //pass by refernce
console.log(user1);
console.log(user2);

user2.email="samir34@gmail.com"// same address for both value so both gets changed
console.log(user1);
console.log(user2);
