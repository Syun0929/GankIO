// pages/index/date/date.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedDate:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestAllDates();
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

  requestAllDates:function(){
    var that = this
    var oneDay = ''
    var year,monthh,dayy
    wx.request({
      url: 'https://gank.io/api/day/history',
      success:function(res){
        console.log(res.data.results)
        for(var i=0; i<res.data.results.length; i++){
          oneDay = res.data.results[i]
          year = oneDay.substring(0,4)
          monthh = oneDay.substring(5, 7)
          dayy = oneDay.substring(8, 10)
          that.data.selectedDate.push({ month: 'current', day: parseInt(dayy), color: 'white', background: '#b49eeb'})
        }
        that.setData({selectedDate:that.data.selectedDate})
      }
    })
  }
})