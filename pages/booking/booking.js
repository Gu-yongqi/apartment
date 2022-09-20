// pages/booking/booking.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    radio: '1',
    n: null,
    y: null,
    r: null,
    day: '',
    number: '',
    text: ''
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  btn() {
    let reg = /^1[3-9][0-9]{9}$/;
    let arr = this.data.day.split('-');
    arr = arr.map(v => {
      return Number(v);
    })
    if (this.data.name == '') {
      Toast('请输入您的姓名');
    } else if (this.data.day == '') {
      Toast('请输入看房日期');
    }else if (this.data.n>arr[0]||this.datay>arr[1]||this.data.r>arr[2]) {
      Toast('请输入有效日期');
    } else if (this.data.number == '') {
      Toast('请输入您的手机号');
    } else if (!reg.test(this.data.number)) {
      Toast('手机号格式错误');
    } else {
      Toast({
        type: 'success',
        message: '预约成功',
        onClose: () => {
          wx.navigateBack({
            delta: 1
          });
        },
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    let myDate = new Date();
    let n = myDate.getFullYear();
    let y = myDate.getMonth() + 1;
    let r = myDate.getDate();
    y = y < 10 ? '0' + y : y;
    r = r < 10 ? '0' + r : r;
    this.setData({
      n: n,
      y: y,
      r: r,
      day: n + '-' + y + '-' + r
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