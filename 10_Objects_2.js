//singleton object
const Myobj = new Object()
Myobj.name = "samir"
Myobj.age = 20
console.log(Myobj);// above keys gets added to the empty object

//object inside a object
Myobj.MysmallObj = {
    Address : "Pokhara",
    Country: "Nepal"
}
console.log(Myobj);//prints object too

// Object in a new Object
const obj = {
    Email: "Khanalsamir52@gmail.com",
    newObj: {
        newNewObj: {
            hobby:"coding",
        }
    }
} 
console.log(obj.newObj.newNewObj.hobby);// ? works as ifelse

//to merge two objects
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3=Object.assign({},obj1,obj2)//using {} is best practice
console.log(obj3);
// can also be done using spread
const obj4={...obj1,...obj2}
console.log(obj4);
//to access keys of an object
console.log(Object.keys(obj4));//returns as an array
console.log(Object.values(obj4));//returns as an array

//entries-changes object elements into seperate keys in the form of array
console.log(Object.entries(obj4));//multiple arrays

console.log(obj4.hasOwnProperty("1"));//works as includes

