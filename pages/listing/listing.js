// pages/listing/listing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    houseType: 0,
    active: false,
    flag: true,
    value: '',
    option1: [{
        text: '地铁',
        value: 0
      },
      {
        text: '不限',
        value: 1
      },
      {
        text: '活动商品',
        value: 2
      },
    ],
    option2: [{
        text: '默认排序',
        value: 'a'
      },
      {
        text: '好评排序',
        value: 'b'
      },
      {
        text: '销量排序',
        value: 'c'
      },
    ],
    option3: [{
        text: '默认排序',
        value: 'a'
      },
      {
        text: '好评排序',
        value: 'b'
      },
      {
        text: '销量排序',
        value: 'c'
      },
    ],
    option4: [{
        text: '默认排序',
        value: 'a'
      },
      {
        text: '好评排序',
        value: 'b'
      },
      {
        text: '销量排序',
        value: 'c'
      },
    ],
    option5: [{
        text: '默认排序',
        value: 'a'
      },
      {
        text: '好评排序',
        value: 'b'
      },
      {
        text: '销量排序',
        value: 'c'
      },
    ],
    value1: 0,
    value2: 'a',
    value3: 'a',
    value4: 'a',
    value5: 'a',
  },
  detail(e) {
    let bianhao = e.currentTarget.dataset.bianhao;
    wx.navigateTo({
      url: '/pages/detail/detail?bianhao=' + bianhao
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: options.list == undefined ? [] : JSON.parse(options.list),
      houseType: options.houseType == undefined ? 0 : options.houseType,
      flag: options.flag || false,
      active: true,
      value: options.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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