var func  = function(a,b,c){
  alert([a,b,c]);
}
func.apply(null,[1,2,3]);
var func  = function(a,b,c){
  alert([a,b,c]);
}

func.call(null,1,2,3);


var func = function(a,b,c){
  alert(this === window)//输出true
};

func.apply(null,[1,2,3]);

var func = function(a,b,c){
    "use strict";
    alert(this === null);
}
func.apply(null,[1,2,3]);

