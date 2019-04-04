var addEvent = function(elem,type,handler){
  if(window.addEventListener){
    return elem.addEventListener(type,handler,false)
  }
  if(window.attachEvent){
    return elem.attachEvent('on'+type,handler);
  }
};


var addEvent = (function(){
  if(window.addEventListener){
    return function(elem,type,handler){
      elem.addEventListener(type,handler,false);
    }
  }
  if(window.attachEvent){
    return function(elem,type,handler){
        elem.attachEvent('on'+type,handler);
    }
  }
})();//从头到尾都没有使用addEvent函数





