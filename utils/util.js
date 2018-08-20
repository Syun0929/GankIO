const copyToClipBoard=function(link){
  wx.showModal({
    title: '复制该链接',
    content: '完成后请手动打开浏览器，是否继续？' + link,
    success: function (res) {
      if (res.confirm) {
        wx.setClipboardData({
          data: link,
          success: function () {
            wx.showToast({
              title: '复制成功',
              duration: 1500,
            })

          },
          fail: function () {
            wx.showToast({
              title: '复制失败',
              icon: 'none',
              duration: 500,
            })
          }
        })
      } else if (res.cancel) {
        wx.showToast({
          title: '取消复制',
          icon: 'none',
          duration: 500,
        })
      }
    }
  })
}


module.exports = {
  copyToClipBoard: copyToClipBoard
}
