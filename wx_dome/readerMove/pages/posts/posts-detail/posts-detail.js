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
    //文章索引
    var id = options.id;

    this.setData({
      currentId: id,
      postData:postData.postList[id]
    })
    // var post_collection={
    //     1:true,
    //     2:false,
    //     3:false
    // }
    var postsCollection = wx.getStorageSync("post-collection");
    if (postsCollection){
      var postCollection = postsCollection[id];
      this.setData({
        collection:postCollection
      })
    }else{
      var postsCollection = {};
      postsCollection[id] = false;
      wx.setStorageSync("post-collection", postsCollection);
    }

  },
  // 点击收藏
  onCollectionTop:function(){
    // 同步提示框
    //this.getPostsCollectedSyc();
    //异步提示框
    this.getPostsCollectedAyc()

   
  },
  //异步提示框 （不推荐）
  getPostsCollectedAyc: function(){
    var that = this;
    // 更新缓存值 
    wx.getStorage({
      key: 'post-collection',
      success:function(res){
        var postsCollection =  res.data;
        var postCollection = postsCollection[that.data.currentId];
        // 取反
        postCollection = !postCollection;
        // 响应key值
        postsCollection[that.data.currentId] = postCollection;
        that.setShowToastSync(postsCollection, postCollection);
      }
    });
    
  },
  // 同步提示框 （推荐）
  getPostsCollectedSyc:function(){
    var postsCollection = wx.getStorageSync("post-collection");
    var postCollection = postsCollection[this.data.currentId];
    postCollection = !postCollection;
    // 响应key值
    postsCollection[this.data.currentId] = postCollection;
    this.setShowToastSync(postsCollection, postCollection);
  }, 
  setShowToastSync: function (postsCollection, postCollection){
    wx.setStorageSync("post-collection", postsCollection);
    this.setData({
      collection: postCollection
    })
    // 提示框
    wx.showToast({
      title: postCollection ? '收藏成功' : "取消成功",
      icon: 'success',
      duration: 1000
    })
  },

///////////////////////////////////////////////////////////////////////////

  
  // 提示选项框 （不推荐）
  showModalSync: function (postsCollection, postCollection) {
    var that = this;
    wx.showModal({
      title: '收藏',
      content: postCollection ? '取消收藏？' : '确定收藏？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          // 取反
          postCollection = !postCollection;
          // 响应key值
          postsCollection[that.data.currentId] = postCollection
          // 更新缓存值
          wx.setStorageSync("post-collection", postsCollection);
          //映射
          that.setData({
            collection: postCollection
          })
        }
      }
    })
  },

  // ​分享菜单
  showActionSheet: function () {
    var itemList = ['分享到微信好友', '分享到朋友圈', '分享到微博'];
    // 显示操作菜单列表
    wx.showActionSheet({
      itemList: itemList,
      success: function (res) {
        // 显示提示框
        wx.showModal({
          title: "用户" + itemList[res.tapIndex],
          content: "用户是否取消？" + res.cancel + "现在无法实现分享功能，什么时候能支持呢"
        })
      }

    })
  },

  
})