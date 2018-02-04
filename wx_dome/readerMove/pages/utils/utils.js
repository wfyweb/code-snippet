function setStars(stars){
  var array = [];
  var num = stars/10;
  var min = ~~num;
  var max = Math.round(num);
  for(var i=0 ;i<=5;i++){
    if(i<num){
      array.push(1)
    }else if(max>min && array.indexOf(0.5)==-1){
      array.push(0.5)
    }else{
      array.push(0)
    }
  }
  return array
}

module.exports = {
  setStars:setStars
}