// pages/index/history/history.js
var utils = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    fuliList: [],
    results:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.date = options.date
    wx.setNavigationBarTitle({
      title: this.data.date+'日干货',
    })
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
    this.requestData()
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

  requestData: function () {
    var that = this;
    var year = this.data.date.substring(0, 4)
    var month = this.data.date.substring(5, 7)
    var day = this.data.date.substring(8, 10)
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://gank.io/api/day/' + year + '/' + month + '/' + day,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.data.fuliList = res.data.results["福利"]
        var resultss = res.data
        console.log(resultss.length)
        that.data.results = resultss
        that.setData({
          fuliList: that.data.fuliList,
          results:that.data.results
        })
        wx.hideLoading()
        wx.stopPullDownRefresh();
      }
    })
  },

  chooseDateClick: function () {
    wx.navigateTo({
      url: 'date/date',
    })
  },

  clickImage: function (event) {
    var imgUrl = event.target.dataset.url
    console.log(imgUrl)
    var imgsArray = new Array();
    imgsArray.push(imgUrl)
    wx.previewImage({
      current: imgUrl,
      urls: imgsArray
    })
  },

  clickBtnOpen: function (event) {
    utils.copyToClipBoard(event.target.dataset.url)
  },

})