// pages/movies/movie-more/movie-more.js
var utils = require('../../utils/utils.js');
var app = getApp();
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
    var categoryTitle = options.category
    this.setData({
      categoryTitle: categoryTitle
    })

    var dataUrl = '';
    var inTheatersUrl = app.globalData.doubanBase + '/v2/movie/in_theaters';
    var comingSoonUrl = app.globalData.doubanBase + '/v2/movie/coming_soon';
    var top250Url = app.globalData.doubanBase + '/v2/movie/top250';
    switch (categoryTitle) {
      case "正在热映":
        dataUrl = inTheatersUrl;
        break;
      case "即将上映":
        dataUrl = comingSoonUrl;
        break;
      case "豆瓣Top250":
        dataUrl = top250Url;
        break;
    }
    utils.http(dataUrl, this.processDoubanData)
  },
  processDoubanData: function (moviesDouban) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx]
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + '...'
      }
      var tem = {
        coverUrl: subject.images.large,//海报
        title: title, //电影名称
        stars: utils.setStars(subject.rating.stars),//星星
        average: subject.rating.average, //评分
        movieId: subject.id
      }
      movies.push(tem)
    }
    this.setData({
      movies:movies
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.categoryTitle
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})