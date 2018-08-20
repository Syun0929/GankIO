// pages/command/command.js
var app = getApp();
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:1,
    listData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
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
    this.data.pageNum=1;
    this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.pageNum++;
    this.requestData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  requestData: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: 'https://gank.io/api/data/' + '瞎推荐' + '/15/' + that.data.pageNum,
      data: {},
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (that.data.pageNum == 1) {
          that.data.listData = [];
          that.setData({ listData: that.data.listData })
        }
        for (var i = 0; i < res.data.results.length; i++) {
          res.data.results[i].publishedAt = res.data.results[i].publishedAt.substring(0, 10)
          that.data.listData.push(res.data.results[i])
        }
        wx.hideLoading()
        wx.stopPullDownRefresh()
        that.setData({ listData: that.data.listData })
      },
      fail: function () { },
      complete: function () { }
    })

  },

  devItemClick: function (e) {
    var idx = e.target.id;
    var item = this.data.listData[idx];
    var link = item.url;
    if (item.images != null) {
      app.globalData.devDetailImages = item.images;
      wx.navigateTo({
        url: '../dev/devdetail/devdetail?desc=' + item.desc + '&url=' + item.url,
      })
      return;
    }
    utils.copyToClipBoard(link)
  },

  searchClick:function(){
    wx.navigateTo({
      url: 'search/search',
    })
  }
})