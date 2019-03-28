//
var report = function(str){
  var img = new Image();
  img.src = src;
};
report('http://xxx.com/getUserInfo');

var report = (function(){
  var imgs = [];
  return function(src) {
    var img = new Image();
    imgs.push(img);
    img.src = src;
  }
})();

var extent = function(){
  var value = 0;
  return {
    call: function(){
         value++;
         console.log(value);
    }
  }
};

var extent = extent();

extent.call();
extent.call();
extent.call();

var extent = {
  value: 0,
  call: function(){
    this.value++;
    console.log(this.value);
  }
};

extent.call();
extent.call();
extent.call();
/* 
另一种写法：
*/
var Extent = function(){
  this.value = 0;
}

Extent.prototype.call = function(){
  this.value++;
  console.log(this.value);
}
var extent = new Extent();

extent.call();
extent.call();
extent.call();



























