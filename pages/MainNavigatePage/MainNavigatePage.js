//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides: [
      { image: 'https://www.chezion.cn/image/index-tiele1.jpg' },
      { image: 'https://www.chezion.cn/image/index-tiele2.jpg' },
      { image: 'https://www.chezion.cn/image/index-tiele3.jpg' },
    ],
    navlist: [
      { image: '../../image/indexIPH.png', title: '手机', url: './mbPhone/mbPhone' },
      { image: '../../image/indexTV.png', title: '电视', url: './TV/Tv' },
      { image: '../../image/indexPC.png', title: '电脑', url: './PC/PC' },
      { image: '../../image/indexLY.png', title: '智能', url: './zhiNeng/zhiNeng' },
      { image: '../../image/indexNewGoods.png', title: '新品', url: './newGs/newGs' }
    ],
    goodsList: [],
    page:1,
    WebAddress:app.data.WebAddress
  },
  onShow: function (options) {
   this.findAllCommodity();
  },
  findAllCommodity:function(){
    var that = this;
    var page = this.data.page;
    wx.request({
      url: that.data.WebAddress +'/commodity/findAllCommodity',
      data:{
        page:page
      },
      method: 'GET',
      header:{
        'content-type': 'application/json;charset=utf-8',// 默认值
      },
      success:function(res){
       that.setData({
         goodsList:res.data.data.list
       })
        console.log(res.data.data.list);
      }
    })
  },
  toDetail: function (e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    // console.log(index) 
    var detail = this.data.goodsList[index];
    // console.log(detail)
    app.globalData.detail = detail;
    console.log(app.globalData.detail)
    // this.setData({
    //   detail:detail
    // })
    wx.navigateTo({
      url: '../CommdityPage/CommdityPage',
    })
  },
  search: function (e) {
    wx.navigateTo({
      url: './search/search',
    })
  }
})

