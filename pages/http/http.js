let base_url = 'https://b1e93e38-5267-48b7-aefb-016e5c1d7445.bspapp.com/http/house';
const http = (config = {}) => {
  return new Promise((resolve, reject) => {
    let token = wx.getStorageSync('token')
    config['header'] = config['header'] || {};
    config['header']['token'] = token;
    let url = config.url.startsWith('http') ? config.url : base_url + config.url;
    ['url', 'success', 'fail', 'complete'].forEach(v => {
      delete config[v]
    })
    wx.request({
      url,
      ...config,
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}