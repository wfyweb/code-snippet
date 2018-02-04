// pages/movies/movies.js
var setStars = require('../utils/utils.js');
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
    var dataUrl = app.globalData.doubanBase
    var inTheaters = dataUrl + '/v2/movie/in_theaters' + '?start=0&count=3';
    var comingSoon = dataUrl + '/v2/movie/coming_soon' + '?start=0&count=3';
    var top250 = dataUrl + '/v2/movie/top250' + '?start=0&count=3';
    this.getMovieListData(inTheaters,'inTheaters','正在热映');
    this.getMovieListData(comingSoon,'comingSoon','即将上映');
    this.getMovieListData(top250,'top250','豆瓣Top250');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 获取豆瓣API
  getMovieListData: function (url, settedKey, categoryTitle) {
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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 转化所需JSON格式
  postdoudanBase: function(moviesDouban,settedKey,categoryTitle){
    var movies = [];
    for (var idx in moviesDouban.subjects){
      var subject = moviesDouban.subjects[idx]
      var title = subject.title;
      if(title.length>=6){
        title = title.substring(0,6)+'...'
      }
      var tem = {
        coverUrl: subject.images.large,//海报
        title: title, //电影名称
        stars: setStars.setStars(subject.rating.stars),//星星
        average: subject.rating.average, //评分
        movieId: subject.id
      }
      movies.push(tem)
    }
    // console.log(subject)
    
    
    var  readyData = {};
    readyData[settedKey] = {
      categoryTitle:categoryTitle,
      movies:movies
    }
    this.setData(readyData)
  },
   

  // 点击更多
  onMoreTap:function(event){
    //跳转更多页面，传递电影分类
    wx.navigateTo({
      url: './movie-more/movie-more?category=' + event.currentTarget.dataset.category,
    })
  },
  // 点击电影
  onMovieTap:function(event){
    console.log(event.currentTarget.dataset.movieid)
  }
  
})