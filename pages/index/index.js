// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    androidList:[],
    appList:[],
    iOSList:[],
    relaxList:[],
    webList:[],
    moreList:[],
    commandList:[],
    fuliList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  requestData:function(){
    var that = this;
    wx.request({
      url: 'https://gank.io/api/today',
      method:'GET',
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        that.data.androidList = res.data.results["Android"]
        that.data.appList = res.data.results["App"]
        that.data.iOSList = res.data.results["iOS"]
        that.data.relaxList = res.data.results["休息视频"]
        that.data.webList = res.data.results["前端"]
        that.data.moreList = res.data.results["拓展资源"]
        that.data.commandList = res.data.results["瞎推荐"]
        that.data.fuliList = res.data.results["福利"]
        that.setData({
          fuliList:that.data.fuliList,
          androidList:that.data.androidList,
          appList:that.data.appList,
          iOSList:that.data.iOSList,
          relaxList:that.data.relaxList,
          webList:that.data.webList,
          moreList:that.data.moreList,
          commandList:that.data.commandList,
          fuliList:that.data.fuliList,
        })

        wx.stopPullDownRefresh();
      }
    })
  },

  chooseDateClick:function(){
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

  itemClick:function(event){
    console.log(event.target.id)

  }
})