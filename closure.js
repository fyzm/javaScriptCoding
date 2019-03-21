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
  
}