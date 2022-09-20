// pages/detail/detail.js
import Toast from '@vant/weapp/toast/toast';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bianhao: '',
    list:{},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    image:[
      {
        icon:'/image/icon/chuang.png',
        name:'床'
      },
      {
        icon:'/image/icon/kongtiao.png',
        name:'空调'
      },
      {
        icon:'/image/icon/bingxiang.png',
        name:'冰箱'
      },
      {
        icon:'/image/icon/reshuiqi.png',
        name:'热水器'
      },
      {
        icon:'/image/icon/shuzhuo.png',
        name:'书桌'
      },
      {
        icon:'/image/icon/xiyiji.png',
        name:'洗衣机'
      },
      {
        icon:'/image/icon/yigui.png',
        name:'衣柜'
      },
      {
        icon:'/image/icon/youyanji.png',
        name:'油烟机'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      bianhao: options.bianhao
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.request({
      url: 'https://b1e93e38-5267-48b7-aefb-016e5c1d7445.bspapp.com/http/house/get_house_detail',
      method: 'POST',
      data: {
        bianhao: this.data.bianhao
      },
      success: res => {
        console.log(res);
        this.setData({
          list:res.data.data
        })
      }
    })
  },
  calling () {
    wx.makePhoneCall({
      phoneNumber: '15225930470', 
      success: function () {
        Toast('成功拨打电话');
      },
      fail: function () {
        Toast('取消拨打电话');
      }
    })
  },
  yuyue(){
    wx.navigateTo({
      url:'/pages/booking/booking'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})