var obj1 = {
  name:'sven'
};

var obj2 = {
  getName:function(){
    return this.name;
  }
}

console.log(obj2.getName.call(obj1));

//让类数组去借用Array.prototype的方法
(function(){
  Array.prototype.push.call(arguments,4);//arguments借用Array.prototype.push方法
  console.log(arguments);//输出:[1,2,3,4]
})(1,2,3);

Function.prototype.uncurring = function(){
  var self = this;
  return function(){
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj,arguments);
  };
};


var push = Array.prototype.push.uncurring();
(function(){
    push(arguments,4);
    console.log(arguments);//输出:[1,2,3,4]
})(1,2,3);

for(var i = 0,fn,ary = ['push','shift','forEach'];fn = ary[i++];){
    Array[fn] = Array.prototype[fn].uncurring();
};
var obj = {
  "length":3,
  "0":1,
  "1":2,
  "2":3
};
Array.push(obj,4);
console.log(obj.length);


var  first = Array.shift(obj);
console.log(first);
console.log(obj);
Array.forEach(obj,function(i,n){
  console.log(n);  //分别输出:0,1,2
});


var call = Function.prototype.call.uncurring();
var fn = function(name){
  console.log(name);
};
call(fn,window,'sven');//输出sven

var apply = Function.prototype.apply.uncurring();

var fn = function(name){
  console.log(this.name);//'sven'
  console.log(arguments);//[1,2,3]
};

apply(fn,{name:'sven'},[1,2,3]);



Function.prototype.uncurring = function(){
  var self = this;
  return function(){
    var obj = Array.prototype.shift.call(arguments);
    // 
    return self.apply(obj,arguments);
  };
};

var push = Array.prototype.push.uncurring();
var obj = {
  "length": 1,
  "0": 1
};

push(obj,2);
console.log(obj);


Function.prototype.uncurring = function(){
  var self = this;
  return function(){
    return Function.prototype.call.apply(self,arguments);
  }
};







































































