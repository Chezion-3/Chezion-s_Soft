var app = getApp()
Page({
  //定义全局变量data 
  data: {
    UserInfo: null,
    account: "",
    money:'',
    avatar:'',
    commodityCollectionNum: '',
    brandCollectionNum: '',
    orderNum: '',
    footprintNum:'',
    navlist: [
      { image: '../../image/payfor.png', title: '待支付', url: '' },
      { image: '../../image/beOwn.png', title: '待收货', url: './TV/Tv' },
      { image: '../../image/commer.png', title: '待评价', url: './PC/PC' },
      { image: '../../image/refund.png', title: '退货', url: './zhiNeng/zhiNeng' },
      { image: '../../image/order.png', title: '我的订单', url: './newGs/newGs' }
    ],
    
  },
  onLoad:function(){
    var Userinfo = wx.getStorageSync("UserInfo");
  },
  onShow:function(){
    var that = this;
    var Userinfo = wx.getStorageSync("UserInfo");
    if (Userinfo == null||Userinfo=="") {
      setTimeout(function () {
        wx.navigateTo({
          url: '../LoginPage/LoginPage',
        })
      }, 1000)
    }else{
    this.setData({
      account: Userinfo.data.wxNickname,
      avatar: Userinfo.data.avatarUrl,
      commodityCollectionNum: Userinfo.data.commodityCollectionNum,
      brandCollectionNum: Userinfo.data.brandCollectionNum,
      orderNum: Userinfo.data.orderNum,
      footprintNum: Userinfo.data.footprintNum,
      money: Userinfo.data.money,
    })
    
    }
  },
  setting: function () {
    wx.navigateTo({
      url: '../UserSetting/UserSetting',
    })
  },
  oldshare: function () {
    wx.navigateTo({
      url: '../oldshare/oldshare?account=' + this.data.account,
    })
  },
  collect: function () {
    wx.navigateTo({
      url: '../collect/collect?account=' + this.data.account,
    })
  },
  follow: function () {
    wx.navigateTo({
      url: '../follow/follow?account=' + this.data.account,
    })
  }

})