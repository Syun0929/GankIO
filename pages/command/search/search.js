// pages/command/search/search.js
var utils = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyWord:'',
    results:[],
    pageNum:1
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
    this.data.pageNum++;
    this.requestData(this.data.keyWord)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  searchClick:function(){
    this.data.results=new Array()
    this.data.pageNum=1
    this.requestData(this.data.keyWord)
  },

  bindKeyInput:function(e){
    this.data.keyWord = e.detail.value
  },


  requestData:function(v){
    wx.showLoading({
      title: '加载中',
    })
    var keyWord = v;
    var that = this;
    wx.request({
      url: 'https://gank.io/api/search/query/'+v+'/category/all/count/50/page/'+that.data.pageNum,
      success:function(res){
        var len = res.data.results.length
        if(len==0){
          if(that.data.pageNum>1){
            that.data.pageNum--
            wx.showToast({
              title: '没有更多了！',
              icon: 'none'
            })
            return
          }
          if(that.data.pageNum==1){
            that.data.results.push({desc:"未查找到任何数据，请确认关键词是否填写正确"})  
            that.setData({resultss:that.data.results})
            wx.showToast({
              title: '未查找到任何结果',
              icon:'none'
            })
            return
          }          
        }        
        for(var i=0;i<len;i++){
          res.data.results[i].publishedAt = res.data.results[i].publishedAt.substring(0,10)
          that.data.results.push(res.data.results[i])
        }
        that.setData({ resultss: that.data.results })
        wx.hideLoading()
      },
      fail:function(e){
        console.log(e)
      }
    })
  },

  itemClick:function(e){
    console.log(e.target.id)
    var idx = e.target.id;
    var item = this.data.results[idx];
    if(item.url!=null){
      utils.copyToClipBoard(item.url)
    }
  }
})