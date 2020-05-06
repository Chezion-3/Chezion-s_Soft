const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodds: [],
    toCartMsg: [],
    person: {
      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let id=options.currentTarget.dataset.id;

    this.setData({
      goodds: app.globalData.detail
    })
    //  console.log(this.data.goodds)
  },
  tocart: function () {
    this.setData({
      toCartMsg: this.data.goodds
    })
    app.globalData.tocartMsg.push(this.data.toCartMsg);
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    })
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

  }
})