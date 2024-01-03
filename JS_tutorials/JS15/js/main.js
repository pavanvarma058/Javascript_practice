// Objects
// key-value pairs in curly braces
const myObj = {name: "pavan"};

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  bevarage: {
    morning: "coffee",
    afternoon: "iced tea"
  },
  action: function () {
    return `Time for ${this.bevarage.morning}`;
  }
};

console.log(anotherObj.action());

//another example on objects

const vehicle = {
    wheels: 4,
    engine: function () {
      return "vroooooomm";
    },
  };
  
  // const truck = Object.create(vehicle);
  // truck.doors = 2;
  // console.log(truck);
  // console.log(truck.wheels);
  // console.log(truck.engine());
  
  const car = Object.create(vehicle);
  car.doors = 4;
  car.engine = function () {
    return "vroom vroom";
  };
  console.log(car.engine());
  console.log(car.wheels);
  
  const tesla = Object.create(vehicle);
  console.log(tesla.wheels);
  tesla.engine = function () {
    return "shhhhhhh......";
  };
  console.log(tesla.engine());


// another example
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham",
};
  
delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`on ${job}, its ${band[job]}`);
}

// destrcuturing objects
const { vocals, guitar, bass, drums } = band;
console.log(vocals)
console.log(guitar)
console.log(bass)
console.log(drums)

function sings({vocals}) {return `${vocals} sings!`};
console.log(sings(band));
  