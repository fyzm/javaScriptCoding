var ary = []
for(var i = 1;i <=1000;i++){
  ary.push(i);
};

var renderFriendList = function(data){
  for(var i = 0,l = data.length;i < l;i++){
    var div = document.createElement('div');
    div.innerHTML = i;
    document.body.appendChild(div);
  }
}

renderFriendList(ary);


var timeChunk = function(ary,fn,count){//ary:创建节点时用到的数据,封装创建节点逻辑的函数，第三个每一批创建节点的数量
  var obj,
      t;
  var len = ary.length
  var start = function(){
    for(var i = 0;i < Math.min(count || 1,ary.length);i++){
        var obj = ary.shift();
        fn(obj);
    }
  };
  return function(){
    t = setInterval(function(){
      if(ary.length === 0){//全部节点已被创建好
          return clearInterval(t);
      }
      start();
    },200);//分批执行的时间间隔，也可以用参数的形式传入
  };
};


var ary = [];
for(var i = 1;i < 1000;i++){
  ary.push(i);
};
var renderFriendList = timeChunk(ary,function(n){
  var div = document.createElement('div');
  div.innerHTML = n;
  document.body.appendChild(div);
},8);

renderFriendList();






















