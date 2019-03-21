var func = function(){
  var a = 1;
  alert(a);//printf:1
}
func();
alert(a);//undefined

var a = 1;
var func1 = function(){
  var b = 2;
  var func2 = function(){
    var c = 3;
    alert(b);
    alert(a);
  }
  func2();
  alert(c);//c is not defined
};

func1();

var func = function(){
  var a = 1;//退出后函数局部变量a将被销毁
  alert(a);
};

func();


var func = function(){
  var a = 1;
  return function(){
    a++;
    alert(a);
  }
};

var f = func();
f();//2
f();//3
f();//4
f();//5









