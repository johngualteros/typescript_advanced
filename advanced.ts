// optional variables
const sumNumbers = (x: number, y?: number) => {
	return x + (y || 0);
}

// Object Types
const printCoord = (pt: {x: number, y: number}) => {
  console.log('the coordinate\'s x value is ' + pt.x);
  console.log('the coordinate\'s y value is ' + pt.y);
}
printCoord({x: 3, y: 7});

//union types
// TODO: the union type is the type formed from two or more types

function printId(id: number | string) {
	console.log("your id is: " + id);
}

function printId2(id: number | string) {
	if(typeof id === "string") {
		console.log(id.toUpperCase());
	} else{
		console.log(id);
	}
}

function welcomePeople(x: string[] | string) {
	if(Array.isArray(x)){
		console.log("Hello, " + x.join(" and "));
	} else {
		console.log("welcome lone traveler " + x);
	}
}

type ID = number | string; 

function printText(s: string, alignment: "left" | "right"){
	// ...
}

printText("Hello", "left");

//Non-null assertion operator
function liveDangerously(x?: number | null) {
	console.log(x!.toFixed());
}

// enums

enum UserResponse {
	No = 0,
	Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
	// ...
}

respond("Princess", UserResponse.Yes);

// Generic Types

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
	return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
	return arg;
}

function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: <Input>(arg: Input) => Input = identity;

interface GenericIdentityFn<T> {
	(arg: T): T;
}

let myIdentity2: GenericIdentityFn<number> = identity;

class GenericNumber<NumType> {
	zeroValue: NumType;
	add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

interface Lengthwise {
  length: number;
}
 
function loggingIdentity1<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 

// decorators 
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
 
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}
