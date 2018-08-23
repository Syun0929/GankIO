// pages/about/gank/gank.js
var utils = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    links:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.links.push({ title: "首页", url:"https://gank.io/" })
    this.data.links.push({ title: "闲读", url: "https://gank.io/xiandu" })
    this.data.links.push({ title: "历史", url: "https://gank.io/history" })
    this.data.links.push({ title: "API", url: "https://gank.io/api" })
    this.setData({links:this.data.links})
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  linkClick:function(e){
    utils.copyToClipBoard(e.target.dataset.url)
  }
})