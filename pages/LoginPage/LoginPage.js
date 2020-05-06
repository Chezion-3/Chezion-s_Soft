// pages/LoginPage/LoginPage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  userInfo:"",
  WebAddress:app.data.WebAddressTwo
  },
  doLogin: function (e) {
    var that = this;
    console.log(e.detail.userInfo);
    wx.login({
      success: function (res) {
        console.log(res);
        var code = res.code;
        wx.request({
          url: that.data.WebAddress+'/user/login?code=' + res.code + "&wxNickname=" + e.detail.userInfo.nickName+"&avatarUrl="+e.detail.userInfo.avatarUrl,
          method: 'GET',
          success: function (request) {
            console.log(request.data);
            wx.setStorageSync("UserInfo",request.data);
            wx.navigateBack({
              url: "./UserNavigatePage/UserNavigatePage"
            })
          }
        })
      }
    })
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

  }
})