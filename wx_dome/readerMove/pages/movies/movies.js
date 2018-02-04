// pages/movies/movies.js
var app = getApp();
var utils = require('../utils/utils.js');
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
    var dataUrl = app.globalData.doubanBase
    var inTheaters = dataUrl + '/v2/movie/in_theaters' + '?start=0&count=3';
    var comingSoon = dataUrl + '/v2/movie/coming_soon' + '?start=0&count=3';
    var top250 = dataUrl + '/v2/movie/top250' + '?start=0&count=3';
    this.http(inTheaters,'inTheaters','正在热映');
    this.http(comingSoon,'comingSoon','即将上映');
    this.http(top250,'top250','豆瓣Top250');
    console.log(utils.setStars(45))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  http: function (url, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.postdoudanBase(res.data, settedKey, categoryTitle)
      }
    })
  },
  postdoudanBase: function (movie, settedKey, categoryTitle){
    var movies = [];
    for( var idx in movie.subjects){
      var subjects = movie.subjects[idx];
      var title = subjects.title;
      if(title.length>=6){
        title = title.substring(0,6)+'...';
      }
      var tpl = {
        images: subjects.images.large,
        title:title,
        stars:utils.setStars(subjects.rating.stars),
        average:subjects.rating.average,
        id:subjects.id
      }
      movies.push(tpl)
    }
    var readyData = {};
    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    }
    this.setData(readyData);
    console.log(readyData)
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