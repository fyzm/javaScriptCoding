//this 跟别的语言不相同,javascript的this总是指向一个对象,具体指向哪个对象是在基于函数的执行环境动态绑定

/* 

1.作为对象的方法调用
2.作为普通函数调用
3.构造器调用
4.Function.prototype.call和Function.prototype.apply调用,

1.
var obj = {
  a:1,
  getA:function(){
    alert(this === obj);//true
    alert(this.a);//1
  }
};
object.getA();

2.window.name = 'globalname';
var getName = function(){
  return this.name;//globalname
};

console.log(getName());

window.name = 'globalName';
var myObject = {
  name:'sven',
  getName:funtion(){
    return this.name;
  }
};

vr getName = myObject.getName;
console.log(getName());//globalName

<html>
  <body>
    <div id = 'div'>
       I　am div 
    </div>
  </body>

  <script>
    window.id = 'window';
    document.getElementId('div1').onClick = function(){
        alert(this.id);//cout 'div1'
        var callback = function(){
          alert(this.id);//cout 'window'
        }
        callback();
    };
    doucment.getElementById('div1').onClick = function(){
      var that = this;
      var callback = function(){
        alert(that.id);//'div'
      }
      callback()//
    }


  </script>
</html>














*/

