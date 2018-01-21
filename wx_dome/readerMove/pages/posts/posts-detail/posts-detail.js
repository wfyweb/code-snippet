var postData = require("../../../data/post-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //新闻列表传递的索引值
    var id = options.id;
    // 索引映射对应的数据
    //this.data
    this.setData({
      postData: postData.postList[id],
      currentPostId: id
    });
    console.log(this.data.currentPostId)
    //wx.setStorageSync("name","暴风")
    // var postCollection = {
    //   1:true,
    //   2:false,
    //   3:true
    // };
    var postsCollection = wx.getStorageSync("post-collection");
    if (postsCollection) {
      var postCollection = postsCollection[id];
      this.setData({
        collection: postCollection
      })
    } else {
      var postsCollection = {};
      var postCollection = false;
      wx.setStorageSync("post-collection", postsCollection);
    }
  },
  onCollectionTap: function (event) {
    var postsCollection = wx.getStorageSync("post-collection");
    var postCollection = postsCollection[this.data.currentPostId];
    postCollection = !postCollection;
    postsCollection[this.data.currentPostId] = postCollection;
    wx.setStorageSync("post-collection", postsCollection);
    this.setData({
      collection: postCollection
    })
    // wx.showToast({
    //   title: postCollection ? '收藏成功' : '取消成功',
    //   icon: 'success',
    //   duration: 1000
    // })
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }


})