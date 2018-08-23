// pages/about/project/project.js
var utils = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alreadyList:[
      { title: "获取最新一天的干货", finished: true },
      { title: "搜索 API", finished: true },
      { title: "分类数据：开发，瞎推荐，福利...", finished: true },
      { title: "每日数据", finished: true },
      { title: "获取发过干货日期", finished: true },
      { title: "提交干货到审核区", finished: false },
      { title: "获取闲读数据", finished: false }]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  clickProjPage:function(){
    utils.copyToClipBoard("https://github.com/Ganart/GankIO");
  }
})