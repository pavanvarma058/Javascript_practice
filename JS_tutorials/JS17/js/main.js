// JSON: Javascript object notation
/*
JSON is used to send and receive data
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages
... not just in javascript
*/
const myObj = {
    name: "John",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
      console.log("Hello!");
    },
  };
  
  console.log(myObj);
  console.log(myObj.name);
  myObj.hello();
  
  const sendJSON = JSON.stringify(myObj);
  console.log(sendJSON);
  console.log(typeof sendJSON);
  console.log(sendJSON.name);
  
  const receiveJSON = JSON.parse(sendJSON);
  console.log(receiveJSON);
  console.log(typeof receiveJSON);