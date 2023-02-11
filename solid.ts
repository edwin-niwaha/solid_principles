// S.O.L.I.D

// S -> Sinlge Responsbility Principle (SRP)
// A class (module) should have only one reason for change

// O -> Open-Closed Principle (OCP)
// A class (module) should be open for extension, but closed for modification

// L -> Liskov Subsititution Principle (LSP)
// If S is a subtype of T, then objects of T should be replaceable with objects of S.

// I -> Interface Segregation Principle (ISP)
// no class should be forced to depend on methods it does not use

// D -> Dependency Inversion Principle (DIP)
// High level modules should not depend on low level modules,
// but instead both should depend on an interface.

// DEVELOPING A COMPUTER SYSTEM

/*
    MVP1
    What a computer should do
    - Store information
    - Input data
    - boot
    - output information
    - process data

    MVP2:
    - Add support for foldable computers
        - Add fold behavior
    
    MVP3:
    - Input data using more than one methods
        - Mouse
        - Keyboard
        - ScreenTouch
        - USB

    MVP4:
    - Output data using more than one methods
        - Monitor
        - Projection
        - Mirroring
        - Speaker
        - Printing

    MVP5:
    - Process data using more than one methods
        - AMD Process
        - INTEL Processor
        - NVIDIA Processor

    MVP6:
    - Storing data using more than one methods
        - RAM
        - ROM
        - External SSD
        - External HDD
        - Internal Memory
*/

// MVP1 What a computer should do
interface IComputer {
  boot(): boolean;
  input(data: any): void;
  store(data: any): void;
  retrieve(identifier: string): any;
  process(data: any): any;
  output(data: any): any;
}

// Foldabale MVP2
interface Foldable {
  fold(): void;
}

// Input MVP3
interface InputDevice {
  input(data: any): void;
}

// Output MVP4
interface OutputDevice {
  output(data: any): void;
}

// Process MVP5
interface ProcessorDevice {
  process(data: any): void;
}

//  Storage MVP6
interface StorageDevice {
  store(data: any): void;
}

// Class Definitions
class Mouse implements InputDevice {
  input(data: any): void {
    console.log(`I am a mouse and i am inputing data: ${data}`);
  }
}

class Keyboard implements InputDevice {
  input(data: any): void {
    console.log(`I am a keyboard and i am inputing data: ${data}`);
  }
}

class ScreenTouch implements InputDevice {
  input(data: any): void {
    console.log(`I am a Touch Screen Device and i am inputing data: ${data}`);
  }
}

class USB implements InputDevice {
  input(data: any): void {
    console.log(`I am a USB Device and i am inputing data: ${data}`);
  }
}

// Output Devices
class Monitor implements OutputDevice {
  output(data: any): void {
    console.log(`I am a monitor and I am outputing data: ${data}`);
  }
}

class Projector implements OutputDevice {
  output(data: any): void {
    console.log(`I am a projector and I am outputing data: ${data}`);
  }
}

class Speaker implements OutputDevice {
  output(data: any): void {
    console.log(`I am a speaker and I am outputing data: ${data}`);
  }
}

class Printer implements OutputDevice {
  output(data: any): void {
    console.log(`I am a printer and I am outputing data: ${data}`);
  }
}

// Processors
class AMD implements ProcessorDevice {
  process(data: any): void {
    console.log(`I am AMD and i am processing data : ${data}`);
  }
}

class Intel implements ProcessorDevice {
  process(data: any): void {
    console.log(`I am Intel and i am processing data : ${data}`);
  }
}

class Nvidia implements ProcessorDevice {
  process(data: any): void {
    console.log(`I am Nvidia and i am processing data : ${data}`);
  }
}

// Storage
class RAM implements StorageDevice {
  store(data: any): void {
    console.log(`I am RAM and I am storing ${data}`);
  }
}
class ROM implements StorageDevice {
  store(data: any): void {
    console.log(`I am ROM and I am storing ${data}`);
  }
}
class ExternalSSD implements StorageDevice {
  store(data: any): void {
    console.log(`I am ExternalSSD and I am storing ${data}`);
  }
}
class ExternalHDD implements StorageDevice {
  store(data: any): void {
    console.log(`I am ExternalHDD and I am storing ${data}`);
  }
}
class InternalMemory implements StorageDevice {
  store(data: any): void {
    console.log(`I am InternalMemory and I am storing ${data}`);
  }
}

// Generic Computer
class Computer implements IComputer {
  // Attributes
  private model: string;
  private serialNumber: string;
  private brand: string;
  private inputDevice: InputDevice;
  private outputDevice: OutputDevice;
  private processorDevice: ProcessorDevice;
  private storageDevice: StorageDevice;

  // Methods
  constructor(
    model: string,
    serialNumber: string,
    brand: string,
    inputDevice: InputDevice,
    outputDevice: OutputDevice,
    processorDevice: ProcessorDevice,
    storageDevice: StorageDevice
  ) {
    this.model = model;
    this.serialNumber = serialNumber;
    this.brand = brand;
    this.inputDevice = inputDevice;
    this.outputDevice = outputDevice;
    this.processorDevice = processorDevice;
    this.storageDevice = storageDevice;
  }

  boot() {
    console.log("Booting.....");
    return true;
  }

  input(data: any) {
    this.inputDevice.input(data);
  }

  store(data: any) {
    this.storageDevice.store(data);
  }
  retrieve() {
    console.log("Retrieving data.....");
  }
  process(data: any): void {
    this.processorDevice.process(data);
  }
  output(data: any) {
    this.outputDevice.output(data);
  }

  setInputDevice(inputDevice: InputDevice) {
    this.inputDevice = inputDevice;
  }
  setProcessDevice(processorDevice: ProcessorDevice) {
    this.processorDevice = processorDevice;
  }
  setStorageDevice(storageDevice: StorageDevice) {
    this.storageDevice = storageDevice;
  }
}

// Computer extensions
class Laptop extends Computer implements Foldable {
  fold(): void {
    console.log("I am foldeing");
  }
}

class UnbootableComputer extends Computer {
  boot(): boolean {
    throw "Not supported!";
  }
}

// Testing for LSP
function testLiskov(computerArg: Computer) {
  computerArg.boot();
  computerArg.input("data");
  computerArg.store("Bits");
  computerArg.retrieve();
  computerArg.process("Files");
  computerArg.output("Zenah");
}

let computer: Computer;
computer = new Computer(
  "XPS-13",
  "DFH-BRA-BRA-BRA-1X34",
  "DELL",
  new Mouse(),
  new Monitor(),
  new Intel(),
  new RAM()
); //Super
let laptop: Computer = new Laptop(
  "LPS-13",
  "RFH-BXA-BRA-BRA-1X34",
  "HP",
  new Keyboard(),
  new Projector(),
  new AMD(),
  new RAM()
);

// Subtype
// let unbootableComputer: Computer = new UnbootableComputer(
// 	"UPS-13",
// 	"RFH-BXA-BRA-BRA-1X34",
// 	"HP",
// 	new USB(),
// 	new Monitor(),
// 	new Nvidia()
// ); // Subtype

computer.setInputDevice(new Keyboard());
laptop.setProcessDevice(new AMD());
computer.setStorageDevice(new ExternalHDD());

console.log("I am Computer");
testLiskov(computer);
console.log("I am Laptop");
testLiskov(laptop);
// testLiskov(unbootableComputer)

// setters and getters
