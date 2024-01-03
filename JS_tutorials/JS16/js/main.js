// Javascript classes
class pizza{
    constructor(pizzaType, pizzSize){
      this.size = pizzSize;
      this.type = pizzaType;
      this.crust = "original";
    }
    getCrust(){
      return this.crust;
    }
    setCrust(pizzaCrust){
      this.crust = pizzaCrust;
    }
    bake(){
      console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    }
}
  
const myPizza = new pizza("chicken", "small");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());

/*class pizza {
    constructor(pizzSize) {
      this.size = pizzSize;
      this.crust = "original";
    }
    getCrust() {
      return this.crust;
    }
    setCrust(pizzaCrust) {
      this.crust = pizzaCrust;
    }
}
  
class specialityPizza extends pizza {
    constructor(pizzSize) {
      super(pizzSize);
      this.type = "The Works";
    }
    slice(){
      console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
    }
}
  
const mySpcl = new specialityPizza("Medium");
mySpcl.slice();
*/

/*class pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzSize) {
      this.#size = pizzSize;
    }
    getCrust() {
      return this.crust;
    }
    setCrust(pizzaCrust) {
      this.crust = pizzaCrust;
    }
    hereYouGo(){
      console.log(
        `Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
      )
    }
  }
  
const myPizza = new pizza("large");
myPizza.setCrust("thin");
myPizza.hereYouGo();
*/