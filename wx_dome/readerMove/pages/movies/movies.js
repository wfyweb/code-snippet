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
    var DataUrl = app.globalData.doubanBase;
    var inTheatersUrl = DataUrl + '/v2/movie/in_theaters' +'?start=0&count=5';
    var comingSoonUrl = DataUrl + '/v2/movie/coming_soon' + '?start=0&count=5' ;
    var top250Url = DataUrl + '/v2/movie/top250' + '?start=0&count=5' ;

    this.getMovieListData(inTheatersUrl,'inTheaters','正在热映') 
    this.getMovieListData(comingSoonUrl,'comingSoon','即将上映')
    this.getMovieListData(top250Url,'top250','豆瓣Top250')
    
    console.log(this.data)//转化的数据结构
  },
  // 获取豆瓣API
  getMovieListData: function (url, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        that.processDoubanData(res.data,settedKey,categoryTitle)
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },
  // 转化所需JSON格式
  processDoubanData: function(moviesDouban,settedKey,categoryTitle){
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