// pages/cart/cart.js
const app = getApp()
Page({
  data: {
    selectAllStatus: false,
    totalPrice: 0,
    payCount: 0,
    carMsg: [],
    hid: false,
    WebAddress:app.data.WebAddressTwo
  },
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carMsg = this.data.carMsg;
    for (let i = 0; i < carMsg.length; i++) {

      carMsg[i].selected = selectAllStatus;
    }
    this.setData({
      carMsg,
      selectAllStatus,
    })
    this.getTotalPrice()
  },
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;
    let carMsg = this.data.carMsg;
    const selected = carMsg[index].selected;
    carMsg[index].selected = !selected;
    const a = [];
    for (let i = 0; i < carMsg.length; i++) {
      if (carMsg[i].selected) {
        a.push(carMsg[index])
      }
    }
    if (carMsg.length <= a.length) {
      this.setData({
        selectAllStatus: true, carMsg
      });
    } else {
      this.setData({
        selectAllStatus: false, carMsg
      });
    }
    this.getTotalPrice()
  },
  getTotalPrice: function (e) {
    let carMsg = this.data.carMsg;
    let total = 0;
    for (let i = 0; i < carMsg.length; i++) {
      if (carMsg[i].selected) {
        total += carMsg[i].price;
      }
    }
    // total=total.toFixed(1)
    this.setData({
      totalPrice: total
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    var that = this;
    var user = wx.getStorageSync("UserInfo");
    var WebAddress = this.data.WebAddress;
    wx.request({
      url: WebAddress + '/shopping/findAllShopping',
      method: "GET",
      header: {
        'content-type': 'application/json;charset=utf-8',// 默认值
        'X-Token': user.data.id
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          carMsg:res.data,
          hid:true
        })
      }
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
  toIndex: function () {
    wx.switchTab({
      url: '../MainNavigatePage/MainNavigatePage'
    })
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