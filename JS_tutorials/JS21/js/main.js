// web storage API

// Not part of the DOM - refers to the window api
//Avilable to the js via global variable: window

// we do not have to type window. It is implied:

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }
};

sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData)