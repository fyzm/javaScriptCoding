var A = function(name){
  this.name = name;
};

var B =function(){
  A.apply(this,arguments);
};

B.prototype.getName = function(){
  return this.name;
};

var b = new B('sven');

console.log(b.getName());//'seven'

(function(){
  Array.prototype.push.call(arguments,3);
  console.log(arguments);
})(1,2);

//对象本身可以存取属性
//对象的length属性可读写

