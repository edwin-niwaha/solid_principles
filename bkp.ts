// //Class
// //1. template
// class PersonA /* Name*/ {

//     //Data / Attributes
//     name: string;
//     age: number;
//     // password: string;

//     //methods / Operators / Behaviors
//     talk(): void {
//         console.log(`I am ${this.name}, and I am ${this.age} years old`)
//     }
//     //using a constructor
//     constructor(nameArg: string, ageArg: number) {
//         this.name = nameArg
//         this.age = ageArg;
//     }
// }

// //extends
// class Man extends PersonA {

// }
// class Woman extends PersonA {
//     // data
//     // methods
//     concieve() {
//         console.log(`I am ${this.name}, and I am conceiving`)
//     }
// }

// //2. Creating Objects (Instatiation)
// let Person1 = new Woman('Alinda', 0)
// Person1.talk() //generalized method
// Person1.concieve() // specialized method
// let Person2 = new Woman('Fauzia', 0)
// Person2.talk()
// Person1.concieve()
// let Person3 = new Man('Agripa', 90)
// Person3.talk()
// let Person4 = new Man('Joel', 100)
// Person4.talk()

// // Abstraction
// // -Interface
// // -Abstract class
// // Abstract Type can not be be instantiated

// // 1. Abstaraction Layer
// // abstract class Animal{}
// interface Animal {
//     // abstract eat(food: string): void;
//     eat(food: string): void;
//     move(): void;
//     produce(): string;
//     excrete(): string;
// }

// // 2. Concrete / Implementation Layer
// // class Cat extends Animal {}
// class Cat implements Animal {
//     eat(food: string) {
//         console.log("I am a Cat and I am eating");;
//     }
//     move() {
//         console.log("I am a Cat and I am moving");
//     }
//     produce() {
//         console.log("I am a Cat and I am producing");
//         return "Kitten"

//     }
//     excrete() {
//         console.log("I am a Cat and I am excreting");
//         return "Litter"
//     }
// }

// // 3. Instantiate / Actual Cat Objects
// let cat1 = new Cat();
// cat1.eat('Meat');
// cat1.move( );
// cat1.excrete();
// cat1.produce();

// // Polymorphism
// // Method overloading and over riding
// // SOLID PRONCIPLES reasearch