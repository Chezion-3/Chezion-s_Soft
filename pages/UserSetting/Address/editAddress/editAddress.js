// pages/UserSetting/Address/editAddress/editAddress.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    WebAddress:app.data.WebAddressTwo,
    name:"",
    telephone:"",
    address:"",
    id:''
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
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      id:this.options.id
    })
    var user = wx.getStorageSync("UserInfo");
    var that  = this;
    wx.request({
      url: that.data.WebAddress + '/receivingAddress/getReceivingAddress/'+that.options.id,
      method: "GET",
      header: {
        'content-type': 'application/json;charset=utf-8',// 默认值
        'X-Token': user.data.id
      },
      success: function (res) {
        var reg = [res.data.province, res.data.city, res.data.area]
       that.setData({
         name:res.data.userName,
         telephone:res.data.userTelephone,
         address:res.data.address,
         region:reg
       })
        
      }
    })
  },
  delete:function(){
    var user = wx.getStorageSync("UserInfo");
    var that = this;
    wx.showModal({
      title: '提示',
      content: '您要删除这条住址吗？',
      confirmText: '取消',
      cancelText: '确认',
      success(res) {
        if (res.cancel) {
    wx.request({
      url: that.data.WebAddress + '/receivingAddress/deleteReceivingAddress/'+that.data.id,
      method: "POST",
      header: {
        'content-type': 'application/json;charset=utf-8',// 默认值
        'X-Token': user.data.id
      },
      success: function (res) {
        wx.showToast({
          title: '删除成功',
          icon: "success",
          success(res) {
            setTimeout(function () {
              wx.navigateBack({
                url: "../Address/Address"
              })
            }, 1000)
          }
        })

      }
    })
        }
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
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  update:function(){
    var user = wx.getStorageSync("UserInfo");
    var that = this;
    wx.request({
      url: that.data.WebAddress + '/receivingAddress/updateReceivingAddress',
      method: "POST",
      header: {
        'content-type': 'application/json;charset=utf-8',// 默认值
        'X-Token': user.data.id
      },
      data:{
        address: that.data.address,
        province: that.data.region[0],
        city: that.data.region[1],
        area: that.data.region[2],
        userName: that.data.name,
        userTelephone: that.data.telephone,
        id:that.data.id
      },
      success: function (res) {
        wx.showToast({
          title: '编辑成功',
          icon: "success",
          success(res) {
            setTimeout(function () {
              wx.navigateBack({
                url: "../Address/Address"
              })
            }, 1000)
          }
        })

      }
    })
  },
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