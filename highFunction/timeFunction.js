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