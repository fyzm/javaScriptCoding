var getUserInfo = function(userId,callback){
  $.ajax('http://xxx.com/getUserfo?' +userId,function(data){
    if(typeof callback === 'function'){
      callback(data);
    }
  });
}
getUserInfo(13157,function(data){
  alert(data.userName);
});

var appendDiv = function(){
  for (var i = 0; i < 100;i++){
      var div = document.createElement('div');
      div.innerHTML = i;
      document.body.appendChild(div);
      div.style.display = 'none';
  }
};

appendDiv();

var appendDiv = function(callback){
  for (var i = 0;i < 100;i++){
    var div = document.createElement('div');
    div.innerHTML = i;
    document.body.appendChild(div);
    if(typeof callback == 'function'){
        callback(div);
    }
  }
}

appendDiv(function(node){
  node.style.display = 'none';
});



[1,4,3].sort(function(a,b){
  return a - b;
})

[1,4,3].sort(function(a,b){
  return b - a;
})

 var isString = function(obj){
   return Object.prototype.toString.call(obj) === '[object String]'
 }

 var isArray = function(obj){
   return Object.prototype.toString.call(obj) === '[object Array]'
 }
 var isNumber = function(obj){
   return Object.prototype.toString.call(obj) === '[object Number]'
 }

 var isType = function(type){
   return function(obj){
     return Object.prototype.toString.call(obj) === '[object' + type + ']'
   }
 };
var Type = {}

for(var i = 0,type;type = ['String','Array','Number'][ i++];){
  (function(type){
    Type['is'+type] = function(obj){
      return Object.prototype.toString.call(obj) === '[object' + type + ']';
    }
  })(type)
};

Type.isArray([]);
Type.isString("str");


//getSingle

var getSingle = function(fn){
  var ret;
  return function (){
    return ret || (ret = fn.apply(this,arguments));
  }
}

var getScript = getSingle(function(){
    return document.createElement('script');
});


Function.prototype.before = function(beforefn){
  var _self = this;
  return function(){
    beforefn.apply(this,arguments);
    return _self.apply(this,arguments);
  }
};

Function.prototype.after = function(afterfn){
  var _self = this;
  return function(){
    var ret = _self.apply(this,arguments);
    afterfn.apply(this,arguments);
    return ret;
  }
};

var func = function(){
  console.log(2);
}

func =func.before(function(){
  console.log(1);
}).after(function(){
  console.log(3);
});

func();
























 
















