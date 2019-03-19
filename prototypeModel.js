var Plane = function(){
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1;
};
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

var clonePlane = Object.create(plane)
console.log(clonePlane);

//不支持Obeject.create方法的浏览器中,则可以使用以下代码:
Object.create = Object.create || function(obj) {
  var F = function(){};
  F.prototype = obj;
  return new F();
}


/* 
var obj1 = new Object();
var obj2 = {};

console.log(Object.getPrototypeOf(obj1) === Object.prototype);//true
console.log(Object.geetPrototypeOf(obj2) === Object.prototype);//true

fucntion Person(name){
  this.name;
};
Person.prototype.getName = fucntion(){
  return this.name;
}
var a = new Person('sven');
console.log(a.name)
console.log(a.getName)
console.log(Object.getPrototypeOf(a) === Person.prototype);//true

*/

function Person(name){
  this.name = name;
};

Person.prototype.getName = function(){
  return this.name;
};

var objectFactory = function(){
  var obj = new Object(),//from Object.prototype clone a empy Object
    Constructor = [].shift.call(arguments);
    obj._proto_ = Constructor.prototype;
    var ret = Constructor.apply(obj,arguments)

    return typeof ret === 'object' ? ret:obj;

};

var a = objectFactory(Person,'sven');

console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);

//对象会记住它的原型

/* 
  var a = new Object();
  console.log(a._proto_ === Object.prototype);
  _proto_ 就是对象跟对象构造器的原型联系的纽带
  obj._proto_Constructor.prototype;


  var obj = {name:'sven'};
  var A = function(){};
  A.prtotype = obj;

  var a = new A();
  console.log(a.name);

  var A = function(){};
  A.prototype = {name:'sven'};

  var B＝function(){};
  B.prototype = new A();

  var b = new B();
  console.log(b.name);
*/

/* 
  class Animal {
      constructor(name) {
        this.name = name;
      }
      getName() {
        return this.name;        
      }
  }
  class Dog extends Animal {
    constructor(name){
      this.name = name;
    }
    speak(){
      return "woof";
    }
  }
  var dog = new Dog("Scamp");
  console.log(dog.getName() + 'says' + dog.speak())

*/




