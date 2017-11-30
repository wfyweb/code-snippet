var util = require('../../utils/util.js')
Page({
  data: {},
  onLoad: function () {
    
  },
  goTo:function(){
    wx.navigateTo({
      url:"../index/index?title='wfy'"
    })
  }
})
