// pages/UserSetting/Address/Address.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[],
    WebAddress: app.data.WebAddressTwo
  },
  setting:function(res){
    wx.navigateTo({
      url: './editAddress/editAddress?id='+res.target.id,
    })
  },
  addAddress:function(){
    wx.navigateTo({
      url: './addAddress/addAddress',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var user = wx.getStorageSync("UserInfo");
    wx.request({
      url: that.data.WebAddress+'/receivingAddress/findReceivingAddress',
      method: "GET",
      header: {
        'content-type': 'application/json;charset=utf-8',// 默认值
        'X-Token': user.data.id
      },
      success:function(res){
        that.setData({
          addressList:res.data.data.list
        })
      }
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