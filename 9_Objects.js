
//intialization
const newObj = {
    name:"Samir",
    //key:values- both are indentified as string
    age : 20,
    "Address": "pokhara",
    isLogggedIn:true,
    arr:(1,2,3,4,5)
}
//acess any key from an object
console.log(newObj.name);// to access value of an object
console.log(newObj.Address);
console.log(newObj["Address"]);// " " to access as key is treated as an string
console.log(typeof newObj);

// to change any values in object
newObj.age=21
console.log(newObj["age"]);

// to freeze any changes in an object
/*Object.freeze(newObj)
newObj.age=20
console.log(newObj["age"]);// remains 21 not 20*/

//to declare a fucntion inside an object
newObj.age=function() {
    let value="hihihi"
    console.log(value);
}
console.log(newObj.age);// shows it is a function

newObj.age2 = function () {
    console.log(`Samir Khanal ${this.name}`);
}
console.log(newObj.age2());// prints .name value also from the object
console.log(newObj);//adds age also as a key

/* to declare a symbol as a key in an object
const sym1 =  Symbol("key1")
const sym2 =  Symbol("key2")// stores the sym2 here
let obj1={
    name:"Samir",
    sym1 : "key1",// becomes string not a symbol
    [sym2]:"key2" //correct syntax
}
console.log(typeof obj1[sym1]);
console.log(typeof obj1[sym2]);//  doesnt need "" as it is a symbol not string
console.log(obj1);
shows that sym2 is a symbol key 2
and if you comment out the intialization of sym2 then it will give error*/
