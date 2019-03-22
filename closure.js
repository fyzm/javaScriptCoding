//1.封装变量
var mult = function(){
  var a = 1;
  for(var i = 0,l = arguments.length;i < l;i++){
    a = a * arguments[i];
  }
  return a;
}

//
var cache = {};

var mult = function(){
  var args = Array.prototype.join.call(arguments,',');
  if( cache[args]) {
    return cache[args];
  }
  var a = 1;
  for(var i = 1; l = arguments.length; i < l;i++)
  {
    a = a * arguments[i];
  }
  return cache[args] = a;
};
alert(mult(1,2,3));
alert( mult(1,2,3));


var mult = (function(){
  var cache = {};
  return function(){
    var args = Array.prototype.join.call(arguments,',');
    if(args in cache){
      return cache[args];
    }
    var a = 1;
    for(var i = 0,l = arguments.length; i < 1;i++){
      a = a * arguments[i];
    }
    return cache[args]= a;
  }
})();

var mult = (function(){
  var cache ={};
  var calculate = function(){
    var a = 1;
    for(var i = 0,l = arguments.length; i < 1;i++){
      a = a * arguments[i];
    }
    return a;
  };
  return function(){
    var args = Array.prototype.join.call(arguments,',');
    if(args in cache){
      return cache[ args ];
    }
    return cache[args] = calculate.apply(null,arguments);
  }
})();









