// pages/welfare/welfare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fuliMMs: [],
    fuliPageNum: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestMMData()
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
      this.data.fuliPageNum=1;
      this.requestMMData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.data.fuliPageNum++;
      this.requestMMData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  requestMMData: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: 'https://gank.io/api/data/福利/16/' + that.data.fuliPageNum,
      data: {},
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (that.data.fuliPageNum == 1) {
          that.data.fuliMMs = []
        }
        var list = that.data.fuliMMs;
        for (var i = 0; i < res.data.results.length; i++) {
          that.data.fuliMMs.push(res.data.results[i])
        }
        that.setData({ fuliMMs: that.data.fuliMMs })
        wx.stopPullDownRefresh()
        wx.hideLoading()
      },
      fail: function () { },
      complete: function () { }
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

  clickBtn:function(e){
    wx.navigateTo({
      url: '../index/history/history?date=' + e.target.dataset.date,
    })
  }
})