// pages/wode/wode.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    checked: false
  },
  wodeLogin() {
    if (!this.data.checked) {
      Toast('请先勾选协议');
    } else {
      wx.getUserProfile({
        desc: '必须授权才能使用',
        success: res => {
          let user = res.userInfo
          wx.setStorageSync('user', user)
          console.log(res)
          if (res.cloudID) {
            Toast.loading({
              message: '登录中...',
              forbidClick: true,
              onClose: () => {
                Toast.loading({
                  message: '获取数据中...',
                  forbidClick: true,
                  onClose: () => {
                    this.setData({
                      userInfo: user
                    })
                    wx.switchTab({
                      url: '/pages/wode/wode'
                    })
                  }
                });
              },
            });
          }
        },
        fall: res => {
          console.log(res)
        }
      })
    }
  },
  wodeOnLogin() {
    Dialog.confirm({
        title: '退出登录',
        message: '退出登录将不可恢复，确定要继续吗？',
      })
      .then(() => {
        this.setData({
          userInfo: ''
        })
        wx.setStorageSync('user', null);
        Toast('退出成功');
        wx.switchTab({
          url: '/pages/wode/wode'
        })
      })
      .catch(() => {
        Toast('取消退出');
      });
  },
  wodeChekbox(e) {
    let checked = e.detail.value.length;
    if (checked == 1) {
      this.setData({
        checked: true
      })
    } else {
      this.setData({
        checked: false
      })
    }
  },
  wodeOne() {
    wx.navigateTo({
      url: '/pages/wodeOne/wodeOne'
    })
  },
  wodeTwo() {
    wx.navigateTo({
      url: '/pages/wodeTwo/wodeTwo'
    })
  },
  wodeThr() {
    wx.navigateTo({
      url: '/pages/wodeThr/wodeThr'
    })
  },
  wodeFor() {
    wx.navigateTo({
      url: '/pages/wodeFor/wodeFor'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let user = wx.getStorageSync('user')
    this.setData({
      userInfo: user
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