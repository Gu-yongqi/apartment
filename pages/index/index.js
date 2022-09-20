// index.js
import Toast from '@vant/weapp/toast/toast';
Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    list: [],
    active: false,
    limit: 10,
    house_type: 0,
    flag: true,
    value: '',
    areaid: 0, //区域
  },
  onReady() {
    this.Banner();
    this.houseType();
  },
  //触底函数
  onReachBottom() {
    if (this.data.count >= this.data.limit) {
      this.setData({
        limit: this.data.limit + 10
      })
      this.houseType();
    } else {
      return false;
    }
  },
  //上拉函数
  onPullDownRefresh() {
    this.setData({
      limit: 10
    })
    Toast.loading({
      message: '刷新中...',
      forbidClick: true,
      onClose: () => {
        Toast('刷新成功');
        this.houseType();
      },
    });
  },
  Banner() {
    wx.request({
      url: 'https://b1e93e38-5267-48b7-aefb-016e5c1d7445.bspapp.com/http/house/get_banner',
      method: 'GET',
      success: res => {
        console.log(res);
        this.setData({
          imgUrls: res.data.data
        })
      }
    })
  },
  houseType() {
    wx.request({
      url: 'https://b1e93e38-5267-48b7-aefb-016e5c1d7445.bspapp.com/http/house/get_house_list',
      method: 'POST',
      data: {
        skip: 0,
        limit: this.data.limit,
        areaid: this.data.areaid,
        xiaoqu_id: 0,
        zujin: 0,
        lng: '',
        lat: '',
        house_type: this.data.house_type,
        weishengjian: '',
        yangtai: '',
        chaoxiang: '',
        liangren: '',
        paixu: '',
        fangjianshu: '',
        tejia_lx: ''
      },
      success: res => {
        console.log(res);
        this.setData({
          list: res.data.data,
          active: true,
          count: res.data.count
        })
      }
    })
  },
  listingTrue() {
    this.setData({
      house_type: 1
    })
    this.houseType();
    wx.navigateTo({
      url: '/pages/listing/listing?list=' + JSON.stringify(this.data.list) + '&houseType=' + this.data.house_type
    })
  },
  listingFalse() {
    this.setData({
      house_type: 0
    })
    this.houseType();
    wx.navigateTo({
      url: '/pages/listing/listing?list=' + JSON.stringify(this.data.list) + '&houseType=' + this.data.house_type
    })
  },
  listing() {
    wx.navigateTo({
      url: '/pages/listing/listing?flag=' + this.data.flag
    })
  },
  search() {
    //获取区域
    let that=this;
    wx.request({
      url: 'https://b1e93e38-5267-48b7-aefb-016e5c1d7445.bspapp.com/http/house/get_area',
      method: 'GET',
      success: res => {
        console.log(res);
        let arr = res.data.data;
        arr = arr.find(v => {
          let name = v.name.endsWith('区') ? v.name.slice(0, -1) : v.name;
          let reg = new RegExp(name);
          return reg.test(that.data.value);
        })
        that.setData({
          areaid: arr._id||'',
          house_type: 1
        })
      }
    })
    this.houseType();
    wx.navigateTo({
      url: '/pages/listing/listing?list=' + JSON.stringify(this.data.list) + '&houseType=' + this.data.house_type + '&value=' + this.data.value
    })
  },
  map() {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },
  detail(e) {
    let bianhao = e.currentTarget.dataset.bianhao;
    wx.navigateTo({
      url: '/pages/detail/detail?bianhao=' + bianhao
    })
  }
})