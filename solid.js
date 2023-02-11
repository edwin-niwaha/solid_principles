// S.O.L.I.D
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class Definitions
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.input = function (data) {
        console.log("I am a mouse and i am inputing data: ".concat(data));
    };
    return Mouse;
}());
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.input = function (data) {
        console.log("I am a keyboard and i am inputing data: ".concat(data));
    };
    return Keyboard;
}());
var ScreenTouch = /** @class */ (function () {
    function ScreenTouch() {
    }
    ScreenTouch.prototype.input = function (data) {
        console.log("I am a Touch Screen Device and i am inputing data: ".concat(data));
    };
    return ScreenTouch;
}());
var USB = /** @class */ (function () {
    function USB() {
    }
    USB.prototype.input = function (data) {
        console.log("I am a USB Device and i am inputing data: ".concat(data));
    };
    return USB;
}());
// Output Devices
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.output = function (data) {
        console.log("I am a monitor and I am outputing data: ".concat(data));
    };
    return Monitor;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.output = function (data) {
        console.log("I am a projector and I am outputing data: ".concat(data));
    };
    return Projector;
}());
var Speaker = /** @class */ (function () {
    function Speaker() {
    }
    Speaker.prototype.output = function (data) {
        console.log("I am a speaker and I am outputing data: ".concat(data));
    };
    return Speaker;
}());
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.output = function (data) {
        console.log("I am a printer and I am outputing data: ".concat(data));
    };
    return Printer;
}());
// Processors
var AMD = /** @class */ (function () {
    function AMD() {
    }
    AMD.prototype.process = function (data) {
        console.log("I am AMD and i am processing data : ".concat(data));
    };
    return AMD;
}());
var Intel = /** @class */ (function () {
    function Intel() {
    }
    Intel.prototype.process = function (data) {
        console.log("I am Intel and i am processing data : ".concat(data));
    };
    return Intel;
}());
var Nvidia = /** @class */ (function () {
    function Nvidia() {
    }
    Nvidia.prototype.process = function (data) {
        console.log("I am Nvidia and i am processing data : ".concat(data));
    };
    return Nvidia;
}());
// Storage
var RAM = /** @class */ (function () {
    function RAM() {
    }
    RAM.prototype.store = function (data) {
        console.log("I am RAM and I am storing ".concat(data));
    };
    return RAM;
}());
var ROM = /** @class */ (function () {
    function ROM() {
    }
    ROM.prototype.store = function (data) {
        console.log("I am ROM and I am storing ".concat(data));
    };
    return ROM;
}());
var ExternalSSD = /** @class */ (function () {
    function ExternalSSD() {
    }
    ExternalSSD.prototype.store = function (data) {
        console.log("I am ExternalSSD and I am storing ".concat(data));
    };
    return ExternalSSD;
}());
var ExternalHDD = /** @class */ (function () {
    function ExternalHDD() {
    }
    ExternalHDD.prototype.store = function (data) {
        console.log("I am ExternalHDD and I am storing ".concat(data));
    };
    return ExternalHDD;
}());
var InternalMemory = /** @class */ (function () {
    function InternalMemory() {
    }
    InternalMemory.prototype.store = function (data) {
        console.log("I am InternalMemory and I am storing ".concat(data));
    };
    return InternalMemory;
}());
// Generic Computer
var Computer = /** @class */ (function () {
    // Methods
    function Computer(model, serialNumber, brand, inputDevice, outputDevice, processorDevice, storageDevice) {
        this.model = model;
        this.serialNumber = serialNumber;
        this.brand = brand;
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
        this.processorDevice = processorDevice;
        this.storageDevice = storageDevice;
    }
    Computer.prototype.boot = function () {
        console.log("Booting.....");
        return true;
    };
    Computer.prototype.input = function (data) {
        this.inputDevice.input(data);
    };
    Computer.prototype.store = function (data) {
        this.storageDevice.store(data);
    };
    Computer.prototype.retrieve = function () {
        console.log("Retrieving data.....");
    };
    Computer.prototype.process = function (data) {
        this.processorDevice.process(data);
    };
    Computer.prototype.output = function (data) {
        this.outputDevice.output(data);
    };
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    Computer.prototype.setProcessDevice = function (processorDevice) {
        this.processorDevice = processorDevice;
    };
    Computer.prototype.setStorageDevice = function (storageDevice) {
        this.storageDevice = storageDevice;
    };
    return Computer;
}());
// Computer extensions
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Laptop.prototype.fold = function () {
        console.log("I am foldeing");
    };
    return Laptop;
}(Computer));
var UnbootableComputer = /** @class */ (function (_super) {
    __extends(UnbootableComputer, _super);
    function UnbootableComputer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnbootableComputer.prototype.boot = function () {
        throw "Not supported!";
    };
    return UnbootableComputer;
}(Computer));
// Testing for LSP
function testLiskov(computerArg) {
    computerArg.boot();
    computerArg.input("data");
    computerArg.store("Bits");
    computerArg.retrieve();
    computerArg.process("Files");
    computerArg.output("Zenah");
}
var computer;
computer = new Computer("XPS-13", "DFH-BRA-BRA-BRA-1X34", "DELL", new Mouse(), new Monitor(), new Intel(), new RAM()); //Super
var laptop = new Laptop("LPS-13", "RFH-BXA-BRA-BRA-1X34", "HP", new Keyboard(), new Projector(), new AMD(), new RAM());
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
