// pages/welcome/welcome.js
Page({
  onTap:function(){
    //跳转子页面
    wx.navigateTo({
      url: '/pages/posts/posts',
    })

    // 跳转平行页面
    // wx.redirectTo({
    //   url: '/pages/posts/posts',
    // })
  },
  
})