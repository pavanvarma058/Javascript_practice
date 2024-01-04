/* Fetch API requires a discussion of... callbacks,
Promises, Thenables and Async/Await*/

//callbacks

function firstFunction(parameters, callback){
    // do stuff
    callback();
}

// callback hell
firstFunction(para, function(){
    // do stuff
    secondFunction(para, function(){
        thirdFunction(para, function(){

        });
    });
});

// Promises
const myPromise = new Promise((resolve, reject)=>{
    const error = true;
    if(!error){
        resolve("Yes, resolved the promise!");
    }else{
        reject("NO! rejected the promise.");
    }
})

console.log(myPromise);

myPromise.then(value =>{
    return value+1;
})
.then(newValue =>{
    console.log(newValue);
})
.catch(err =>{
    console.error(err);
})

const myNextPromise = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("myNext Promise resolved");
    }, 3000);
});

myNextPromise.then(value =>{
    console.log(value);
});

myPromise.then(value=>{
    console.log(value);
})


const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
console.log(users);
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        data.forEach(user =>{
            console.log(user);
        })
    });

