var monthlyCost = 0;

var cost = function(money){
  monthlyCost += money;
}

cost(100);
cost(200);
cost(300);

alert(monthlyCost);


var cost =  (function(){
    var args = [];
    return function(){
      if(arguments.length === 0){
        var money = 0;
        for(var i = 0,l = args.length; i < l;i++){
            money +=args[i];
        }
            return money;
      }else{
            [].push.apply(args,arguments);
      }
    }
})();
cost(100);
cost(200);
cost(300);

console.log(cost());//输出600


var currying = function(fn){
  var args = [];
  return function(){
    if(arguments.length === 0){
        return fn.apply(this,args);
    }else{
        [].push.apply(args,arguments);
        return arguments.callee;
    }
  }
};


var cost = (function(){
  var money = 0;
  return function(){
    for(var i = 0,l = arguments.length;i < l;i++){
        money +=arguments[i];
    }
    return money;
  }
})();


var cost = currying(cost);//转化成curring函数

cost(100);//未真正求值
cost(200);//....
cost(300);//....

alert(cost());//值:600























