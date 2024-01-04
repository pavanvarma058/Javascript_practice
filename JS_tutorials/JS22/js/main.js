//Modules
import * as Guitars from "./guitars";
import User from "./user.js";
// import { playGuitar } from "./guitars";
const me = new User("email@email.com", "pavan");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());