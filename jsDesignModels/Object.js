var duck = {
  duck_singing: function(){
    console.log('gagaga');
  }
};

var chicken = {
  duck_sing:function(){
    console.log('gagaga')
  }
};

var choir = [];

var joinChoir = function(animal){
    if(animal && typeof animal.chicken_sing === 'function') {
        choir.push(animal);
        console.log('恭喜加入合唱团');
        console.log('合唱团成员数量' + choir.length);
    } 
};
joinChoir(duck);
joinChoir(chicken);


var makeSound = function(animal) {
    if(animal instanceof Duck) {
      console.log('gagaga');
    }else if(animal instanceof Chicken) {
      console.log('gegege');
    }

}

var Duck = function(){};

var Chicken = function(){};


makeSound(new Duck());
makeSound(new Chicken());

var makeSound = function(animal){
  animal.sound();
};

var Duck = function(){}
 Duck.prototype.sound = function(){
  console.log('gagaga');
};

var Chicken = function(){}
Chicken.prototype.sound = function(){
  console.log('gegege');
}

makeSound(new Duck());
makeSound(new Chicken());

/* 
public class Duck{
  public void makSound(){
    System.out.println("gegege");
  }

}

public class Chicken {
  public void makeSound(){
    System.out.println("gagaga");
  }

}

public class AnimalSound {
  public void makeSound(Duck duck){
    duck.makeSound()
  }
}
public class Test {
  public static void main(String args[]){
    AnimalSound animalSound = new AnimalSound();
    Duck duck = new Duck();
    animalSound.makeSound(duck);
    Chicken chicken = new Chicken();
    animalSound.makeSound(chicken);//报错
  }
}

public abstract class Animal {
  abstract void makSound()
}
public class Chicken extends Animal{
  public void makeSound(){
    System.out.println("gegege");
  }
}
public class Duck extends Animal {
  public void makeSound(){
    System.out.println("gagaga");
  }
}
Animal duck = new Duck();

Animal chicken = new Chicken();

public class AniamlSound{
  public void makeSound(Animal animal){
    animal.makeSound();
  }
}
var googleMap = {
  show:function(){
    console.log('start render googleMap');
  }
};

var renderMap = function(){
  googleMap.show();
}

renderMap();


var baiduMap = function(){
  show:function(){
    console.log('start render baidu Map');
  }
}

var renderMap = function(type){
  if(type === 'google'){
    google.show();
  }else if(type === 'baidu'){
    baiduMap.show();
  }
};
renderMap('google');
renderMap('baidu')

var renderMap = function(map){
  if(map.show instanceof Function){
    map.show()
  }
}
renderMap(googleMap);
renderMap(baiduMap);

var sosoMap = {
  show:function(){
    console.log('start render map')
  }
}
renderMap(sosoMap)

*/