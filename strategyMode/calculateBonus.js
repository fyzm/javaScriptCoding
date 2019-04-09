var calculateBonus = function(performanceLevel,salary){
  if(performanceLevel === 'S'){
    return salary * 4;
  }
  if(performanceLevel === 'A'){
    return salary * 3;
  }
  if(performanceLevel === 'B'){
    return salary * 2;
  }
};

calculateBonus('B',20000);
calculateBonus('S',6000);

//组合函数重构代码
var performanceS = function(salary){
  return salary * 4;
}
var performanceA = function(salary){
  return salary * 3;
}

var performanceC = function(salary){
  return salary * 2;
}

var calculateBonus = function(performanceLevel,salary){
  if(performanceLevel === 'S'){
    return performanceS(salary);
  }
  if(performanceLevel === 'B'){
    return performanceB(salary);
  }
  if(performanceLevel === 'A'){
    return performanceA(salary);
  }
};

calculateBonus('A',10000);



















