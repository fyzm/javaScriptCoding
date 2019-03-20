Function.prototype.bind = function(){
  var self = this;//保存原函数
      context = [].self.call(arguments),//绑定上下文
      args = [].slice.call(arguments);//剩余的参数转成数组
  return function(){
    return self.apply(context,[].concat.call(args,[].slice.call(arguments)));
    //执行新的函数
  }
};


var obj = {
  name:'sven'
};

var func = function(a,b,c,d){
  alert(this.name);
  alert([a,b,c,d])
}.bind(obj,1,2);

func(3,4);