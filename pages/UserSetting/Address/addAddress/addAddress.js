// pages/UserSetting/Address/editAddress/editAddress.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["湖南省", "长沙市", "芙蓉区"],
    name:"",
    telephone:"",
    address:"",
    WebAddress: app.data.WebAddressTwo
  },
  bindPickerChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindNameChange: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindteleChange: function (e) {
    this.setData({
      telephone: e.detail.value
    })
  },
  bindAddChange: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  OK:function(e){
    var that = this;
    var user = wx.getStorageSync("UserInfo");
    var WebAddress = this.data.WebAddress;
    wx.request({
      url: WebAddress+'/receivingAddress/addReceivingAddress',
      data: {
        address: that.data.address,
        province: that.data.region[0],
        city:that.data.region[1],
        area:that.data.region[2],
        userName:that.data.name,
        userTelephone:that.data.telephone
      },
      method: "POST",
      header:{
        'content-type': 'application/json;charset=utf-8',// 默认值
        'X-Token': user.data.id
      },
      success:function(res){
        wx.showToast({
          title: '添加成功',
          icon:"success",
          success(res){
            setTimeout(function () {
              wx.navigateBack({
                url:"../Address/Address"
              })
            }, 1000)
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