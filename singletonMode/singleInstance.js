//单例模式
//保证一个类仅有一个实例，同时提供了个可以访问它的全局变量


var Singleton = function(name){
    this.name = name;
    this.instance = null;
};

Singleton.prototype.getName = function(){
  alert(this.name);
};

Singleton.getInstance = function(name) {
  if(!this.instance){
    this.instance = new Singleton(name);
  }
  return this.instance;
};

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
alert(a === b);//true;


var Singleton = function(name){
  this.name  = name;
}

Singleton.prototype.getName = function(){
  alert(this.name);
}

Singleton.getInstance = (function(){
  var instance = null;
  return function( name ) {
    if(!instance) {
      instance = new Singleton(name);
    }
    return instance;
  }
})();
//透明的单列模式

//使用CreateDiv,负责在页面中创建唯一的div节点

var CreateDiv = (function(){
  var instance;
  var CreateDiv = function(html) {
    if(instance) {
        return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
  };
  //构造函数负责来两件事,一件是创建对象,初始化一个方法,同时保证只有一个对象。


  CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };
  return CreateDiv;
})();

var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');

alert(a === b);//true


//用代理实现单列模式
var CreateDiv = function(html){
  this.html = html;
  this.init();
};
CreateDiv.prototype.init = function(){
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
};


var ProxySingletonCreateDiv = (function(){
  var instance;
  return function(html) {
    if( !instance){
      instance = new CreateDiv(html);
    }
      return instance;
  }
})();

var a = new ProxySingletonCreateDiv('sven1');
var b = new ProxySingletonCreateDiv('sven2');

alert(a === b);


//减少全局变量的使用,由于js在创建变量时,没考虑这事,所以解决

var namespace1 = {
  a: function(){
    alert(1);
  },
  b: function(){
    alert(2);
  }
};


var MyApp = {};

MyApp.namespace = function(name){
  var parts = name.split('.');
  var current = MyApp;
  for(var i in parts){
    if( !current[ parts[i]]){
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
};

MyApp.namespace('event');
MyApp.namespace('dom.style');

console.dir(MyApp);
//等价：
var MyApp = {
  event: {},
  dom: {
    style: {}
  }
}


Singleton.getInstance = (function(){
  var instance = null;
  return function(name){
    if(!instance){
      instance = new Singleton(name);
    }
    return instance;
  }
})();




















































































































































