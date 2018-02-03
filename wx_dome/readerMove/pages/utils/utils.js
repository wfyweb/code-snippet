//星星评分函数
function setStars(stars){
  var num = stars/10;
  var min = parseInt(num);
  var max = Math.round(num);
  var array = [];
  for(var i=1;i<=5;i++){
    if(i<=num){
      array.push(1)
    }else if(max>min && array.indexOf(0.5)==-1){
      array.push(0.5)
    }else{
      array.push(0)
    }
  }
 
  return array
}
// 数据请求函数
function http(url,callBack) {
  wx.request({
    url: url,
    header: {
      'Content-Type': 'json'
    },
    success: function (res) {
      callBack(res.data)
    },
    fail: function (error) {
      console.log(error)
    }
  })
}
module.exports={
  setStars:setStars,
  http:http
}