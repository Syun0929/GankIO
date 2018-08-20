// pages/about/about.js
var utils = require('../../utils/util.js')
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

  clickToGank:function(){
    wx.setClipboardData({
      data: 'https://gank.io/',
      success:function(){
        wx.showModal({
          title: '关于干货集中营',
          content: '过两天写啦...链接已经复制到剪贴板，自己打开浏览器去看吧',
        })
      }
    })
    

    /*wx.navigateTo({
      url: 'gank/gank'
    })*/

  },

  clickToProject: function () {
    wx.showModal({
      title: '关于本项目',
      content: '过两天写啦...',
    })
    /*wx.navigateTo({
      url: 'project/project',
    })*/
  },

  clickToAuthor: function () {
    wx.showModal({
      title: '关于作者',
      content: '98年生，杂粮程序员，没啥好说的...',
    })
    /*wx.navigateTo({
      url: 'author/author',
    })*/
  }
})