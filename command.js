<html>
  <body>
    <button id ="excute">button excute commind</button>
    <button id ="undo">button me excute commind</button>
    {/* <script>
      var Tv = {
        open: function(){
            console.log('open tv')
        },
        close: function(){
            console.log('put down tv')
        }
      };
      var OpenTvComman = function(receiver){
        this.receiver = receiver
      };
      OpenTvComman.prototype.excute = function(){
        this.receiver.open()
      }
      OpenTvComman.prototype.undo = function(){
        this.receiver.close()
      }
    </script> */}
    {/* 
    var Tv = {
      open: funtion(){
        console.log('打开电视机')
      }
      close: function(){
        console.log('关闭电视')
      }
    }
    var createCommand = function(receiver){
      var execute = function(){
        return receiver.open();
      }
      var undo = function(){
        return receiver.close();
      }
      return {
        execute:execute,
        undo:undo
      }
      var setCommand = function(command){
        document.getElementById('execute').onclick = function(){
          command.execute();
        }
        document.getElementById('undo').onclick = function(){
          command.undo()
        }
      };
      setCommand(createCommand(Tv));
    }

    */}
  </body>
</html>




