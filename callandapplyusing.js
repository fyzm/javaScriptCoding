var obj1 = {
  name:'sven'
};
var obj2 = {
  name: 'anne'
};
window.name = 'window';
var getName = function(){
  alert(this.name);
}

getName()//window

getName.call(obj1);//'sven'
getName.call(obj2);//'anne'

document.getElementById('div').onclick = function(){
  alert(this.id);//输出：div1
  var func = function(){
    alert(this.id);//输出：undefined
  }
  func();
};

document.getElementById('div1').onClick = function(){
  var func = function(){
    alert(this.id);
  }
  func.call(this);
}

