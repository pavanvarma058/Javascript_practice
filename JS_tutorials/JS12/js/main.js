// functions

function sum(num1, num2){
    return num1 + num2
}
console.log(sum(2, 5));

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@)"));
}
console.log(getUserNameFromEmail("pavanvarma058@gmail.com"));

const toProperCase = (myname)=>{
    return myname.charAt(0).toUpperCase() + myname.slice(1).toLowerCase();
};
console.log(toProperCase("january"));
