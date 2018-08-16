// pages/dev/dev.js
const app = getApp()
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedTagId:'0',
    //旧有选中的标签id
    oldTagId:'0',
    //请求第几页的数据
    pageNum:'1',
    currentTag:'',
    listData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.currentTag = 'Android';
    this.requestData();
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
    wx.showLoading({
      title: '加载中',
    })
    this.data.pageNum++;
    this.requestData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  checkPage: function (event) {
    var newTagId = event.target.id;
    this.checkTagStyle(newTagId);
    this.scrollTop();
    switch (newTagId) {
      case '0':
        this.data.currentTag='Android'
        break;
      case '1':
        this.data.currentTag='iOS'
        break;
      case '2':
        this.data.currentTag='前端'
        break;
      case '3':
        this.data.currentTag = 'App'
        break;
      case '4':
        this.data.currentTag = '拓展资源'
        break;
      default:
        break;
    }
    
    if(this.data.oldTagId!=newTagId){
      this.data.pageNum=1;
    }
    this.requestData();
    this.data.oldTagId=newTagId;
    
  },

  checkTagStyle:function(newTagId){
    this.setData({ selectedTagId: newTagId })
  },
  requestData:function(){
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    console.log("pageNum"+that.data.pageNum)
    wx.request({
      url: 'https://gank.io/api/data/'+that.data.currentTag+'/15/'+that.data.pageNum,
      data: {},
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (that.data.pageNum == 1) {
          that.data.listData = [];
          that.setData({ listData: that.data.listData })
        }
        for (var i = 0; i < res.data.results.length; i++) {
          res.data.results[i].publishedAt = res.data.results[i].publishedAt.substring(0,10)
          that.data.listData.push(res.data.results[i])
        }
        wx.hideLoading()
        that.setData({listData:that.data.listData})
      },
      fail: function () {},
      complete: function () {}
    })

  },

  scrollTop:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration:500
    })
  },

  devItemClick:function(e){
    var idx= e.target.id;
    var item = this.data.listData[idx];
    var link = item.url;
    if(item.images!=null){
      app.globalData.devDetailImages=item.images;
      wx.navigateTo({
        url: 'devdetail/devdetail?desc=' + item.desc+'&url='+item.url,
      })
      return;
    }
    utils.copyToClipBoard(link)
    
  }
})