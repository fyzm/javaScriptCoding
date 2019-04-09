var createIframe = (function(){
  var iframe;
  return function(){
    if(!iframe){
      iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    return iframe;
  }
})();


var obj;
if(!obj){
  obj = xxx;
}
//单列逻辑
var getSingle = function(fn){
  var result;
  return function(){
    return result || (result = fn.apply(this,arguments));
  }
};
//创建登录浮窗
var createLoginLayer = function(){
  var div = document.createElement('div');
  div.innerHTML = '我是登录浮窗';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
};

var createSingleLoginLayer =getSingle(createLoginLayer);
document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
}

//创建iframe页面;
var createSingleIframe = getSingle(function(){
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  return iframe;
});

document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createSingleIframe();
  loginLayer.src = 'http://baidu.com';
};


var binEvent = function(){
  $('div').one('click',function(){
    alert('click');
  });
};

var render = function(){
  console.log('开始渲染列表');
  binEvent();
};

render();
render();
render();


var binEvent = getSingle(function(){
  document.getElementById('div1').onclick = function(){
    alert('click');
  }
  return true;
});

var render = function(){
  console.log('开始熏染列表');
  binEvent();
}
//render函数和bindEvent函数都分别执行了3次，但是div实际上只被绑定了一次
render();
render();
render();

































