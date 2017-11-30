//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    text:"hello"
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function (options) {
     // 页面初始化 options为页面跳转所带来的参数
    console.log(1,this,options.title);
    this.setData({
      text:options.title
    });
    console.log(1,this,options.title);
  }
})
