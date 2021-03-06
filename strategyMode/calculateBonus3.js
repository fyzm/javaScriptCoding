var tween = {
  linear: function(t,b,c,d){
    return c * t / d + b;
  },
  easeIn: function(t,b,c,d){
    return c * (t /=d) * t + b; 
  },
  strongEaseIn: function(t,b,c,d){
    return c *( (t = t / d - 1) * t + 1) +b;
  },
};
