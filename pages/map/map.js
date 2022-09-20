import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
  data: {
    /**
     * 默认中心值
     */
    latitude: 34.75343885,
    longitude: 113.63141921,
    markers: [],
  },
  onReady() {
    /**
     * 获取上下文对象
     */
    wx.createMapContext('myMap').moveToLocation();
    // console.log(this);
    var that=this;
    //是否获取当前位置
    Dialog.confirm({
      title: '定位',
      message: '授权获取当前定位',
    }).then(() => {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          console.log(res);
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude
          })
          that.map();
        }
      })
    }).catch(() => {
      that.setData({
        latitude: 34.75343885,
        longitude: 113.63141921,
      })
      that.map();
    });
  },
  map(){
    wx.request({
      url: 'https://b1e93e38-5267-48b7-aefb-016e5c1d7445.bspapp.com/http/house/get_near',
      method: 'POST',
      data: {
        distance: 3000,
        lng: this.data.longitude,
        lat: this.data.latitude
      },
      success: res => {
        console.log(res);
        // this.setData({
        //   markers:res.data.data.map((v, i) => {
        //     return {
        //       id: i,
        //       latitude: v.lat,
        //       longitude: v.lng,
        //       name: v.xiaoqu_name,
        //       iconPath: '/image/iconPath.png'
        //     }
        //   })
        // })
      }
    })
  },
  moveTolocation() {
    // 将地图中心移置当前定位点，此时需设置地图组件 show-location 为true。'2.8.0' 起支持将地图中心移动到指定位置。
    wx.createMapContext('myMap').moveToLocation();
    this.setData({
      latitude: 34.75343885,
      longitude: 113.63141921,
    })
  }
})