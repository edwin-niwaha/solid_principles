// Polymorphism
// Poly
// Morph
// Polymorphism
// Method overloading and over riding
// SOLID PRONCIPLES reasearch

abstract class Animal {
    abstract eat(food: string): void;
    abstract move(): void;
    abstract produce(): string;
    abstract excrete(): string;
}

class Cat implements Animal {
    eat(food: string) {
        console.log("I am a Cat and I am eating");;
    }
    move() {
        console.log("I am a Cat and I am moving");
    }
    produce() {
        console.log("I am a Cat and I am producing");
        return "Kitten"

    }
    excrete() {
        console.log("I am a Cat and I am excreting");
        return "Litter"
    }
}
class Dog implements Animal {
    eat(food: string) {
        console.log("I am a Dog and I am eating");;
    }
    move() {
        console.log("I am a Dog and I am moving");
    }
    produce() {
        console.log("I am a Dog and I am producing");
        return "puppy"

    }
    excrete() {
        console.log("I am a Dog and I am excreting");
        return "Litter"
    }
}
class Cow implements Animal {
    eat(food: string) {
        console.log("I am a Cow and I am eating");;
    }
    move() {
        console.log("I am a Cow and I am moving");
    }
    produce() {
        console.log("I am a Cow and I am producing");
        return "calf"

    }
    excrete() {
        console.log("I am a Cow and I am excreting");
        return "dung"
    }
}

// Instantiate / Actual Objects
// let cat  = new Cat();
// cat.eat('Meat');
// cat.move();
// console.log(cat.excrete());
// console.log(cat.produce());
// Hint: Program to an interface, not to implementation
let animal:Animal; // Memory

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