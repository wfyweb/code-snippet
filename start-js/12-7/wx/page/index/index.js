Page({
  data:{
    loading:false,
    expressList:[],
    nu:null,
    value:null,
    flag:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  upper:function(e){
    console.log(e)
  },
  searchTap:function(){
    this.setData({
      loading:true
    })
    wx.request({
      url: 'http://route.showapi.com/64-19', //仅为示例，并非真实的接口地址
      data: {
        showapi_appid: '41712' ,
        showapi_sign: '9f9953a121b3416583790d848451e480',
        nu:this.data.nu,
        com:'auto'
      },
      success: function(res) {
        console.log(res.data.showapi_res_body.data)
        this.setData({
          expressList:res.data.showapi_res_body.data,
          flag:res.data.showapi_res_body.flag,
          value:null,
          loading:false
        })
      }.bind(this)
    })
  },
  expressInput:function(e){
    this.setData({
      nu:e.detail.value
    })
  }
})

//   http://route.showapi.com/64-19?showapi_appid=41712&showapi_sign=9f9953a121b3416583790d848451e480&com=auto&nu=535962308717