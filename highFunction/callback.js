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


