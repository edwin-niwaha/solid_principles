// Polymorphism
// Poly
// Morph
// Polymorphism
// Method overloading and over riding
// SOLID PRONCIPLES reasearch
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.eat = function (food) {
        console.log("I am a Cat and I am eating");
        ;
    };
    Cat.prototype.move = function () {
        console.log("I am a Cat and I am moving");
    };
    Cat.prototype.produce = function () {
        console.log("I am a Cat and I am producing");
        return "Kitten";
    };
    Cat.prototype.excrete = function () {
        console.log("I am a Cat and I am excreting");
        return "Litter";
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.eat = function (food) {
        console.log("I am a Dog and I am eating");
        ;
    };
    Dog.prototype.move = function () {
        console.log("I am a Dog and I am moving");
    };
    Dog.prototype.produce = function () {
        console.log("I am a Dog and I am producing");
        return "puppy";
    };
    Dog.prototype.excrete = function () {
        console.log("I am a Dog and I am excreting");
        return "Litter";
    };
    return Dog;
}());
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.eat = function (food) {
        console.log("I am a Cow and I am eating");
        ;
    };
    Cow.prototype.move = function () {
        console.log("I am a Cow and I am moving");
    };
    Cow.prototype.produce = function () {
        console.log("I am a Cow and I am producing");
        return "calf";
    };
    Cow.prototype.excrete = function () {
        console.log("I am a Cow and I am excreting");
        return "dung";
    };
    return Cow;
}());
// Instantiate / Actual Objects
// let cat  = new Cat();
// cat.eat('Meat');
// cat.move();
// console.log(cat.excrete());
// console.log(cat.produce());
// Hint: Program to an interface, not to implementation
var animal; // Memory
// animal takes on the form of a cat
animal = new Cat();
animal.eat('meat');
animal.move();
console.log(animal.excrete());
console.log(animal.produce());
// animal takes on the form of a Dog
animal = new Dog();
animal.eat('bone');
animal.move();
console.log(animal.excrete());
console.log(animal.produce());
// animal takes on the form of a Cow
animal = new Cow();
animal.eat('grass');
animal.move();
console.log(animal.excrete());
console.log(animal.produce());
