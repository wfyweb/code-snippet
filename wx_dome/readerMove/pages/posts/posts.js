var postData = require("../../data/post-data.js")

//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'posts-detail/posts-detail?id=' + postId
    })
  },
  onSwiperTap:function(event){
    // target 与 currentTarget
    // target 指当前点击的组件 ， currentTarget指事件捕获的组件
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'posts-detail/posts-detail?id=' + postId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(postData)
    this.setData({
      postList: postData.postList
    })
  },

  
})