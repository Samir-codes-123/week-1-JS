//De-structuring on Objects
let School ={
    name:"Saint Francis School",
    Location:"Majeripatan",
    principle:"Elric"
}
//to access name we used to do School.name
let {name:SchoolName}=School // Destructuring  name of variable also can be changed
//console.log(name)
console.log(SchoolName);// value can be accessed
console.log(School);// name doesnt get changed here

//Api
// before the values form api or backend used to come in xml now they come in json which is like an object
// eg of an json structure 
/* 
{
    Name:samir
    Class:Bachelor
} can also be an array*/
