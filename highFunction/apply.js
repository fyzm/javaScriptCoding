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
          
        }
      }
    }
})