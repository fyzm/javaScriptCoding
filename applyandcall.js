var obj1 = {
  name:'sven',
  getName: function(){
    return this.name;
  }
};
var obj2 = {
  name:'anne'
};

console.log(obj1.getName());//输出:sven

console.log(obj2.getName.call(obj2))


var obj = {
  myName: 'sven',
  getName: function(){
        return this.myName;
  }
}

console.log(obj.getName())

var getName2 = obj.getName;
console.log(getName2());

var getId = function(id){
  return document.getElementById(id);
}
getId('div1');

/* 
var getId = document.getElementById;
getId('div1');



*/
