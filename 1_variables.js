const accountId =1223 // const is constant canot be changed

let accountEmail = "samir@gmail.com" 
var accountPassword= "Samir@123"
accountCity= "pokhara"

//accountId =2 canot assign value to the constant and will not print
accountEmail="samir45@gmail.com";
accountPassword="samir";
accountCity="samir";
let accountState;//undefined

/*
let is local scope variable changes inside a single block only pass by value
var is global scope variable changes the value of variable altogther pass by adddress
van be decalerd without let and var
*/

//console.log(accountId);
console.table([accountState,accountId, accountEmail, accountPassword,accountCity]);// to print all variables in table form  add [] bracket

