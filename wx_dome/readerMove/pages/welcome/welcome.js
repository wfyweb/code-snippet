// pages/welcome/welcome.js
Page({
  onTap:function(){
    // redirectTo和navigateTo不能再跳转到带有tab选项卡的页面
    //跳转子页面 
    // wx.navigateTo({
    //   url: '/pages/posts/posts',
    // })

    // 跳转平行页面
    // wx.redirectTo({
    //   url: '/pages/posts/posts',
    // })
   
     wx.switchTab({
        url: "/pages/posts/posts"
    })
   
  }
  
})