// pages/identify/identify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    who:0,
    name:"",
    code:"",
    ok:true,
  },
  getName: function (e) {
    var val = e.detail.value;
    this.setData({
      name: val
    });
  },  
  getCode: function (e) {
    var val = e.detail.value;
    this.setData({
    code: val
    });
  },  
  submit: function () {
    // if ok 按钮可用 进入
    // this.data.ok=false;
    // if 字段非空
    // wx.request({
    //   url: 'test.php', 
    //   data: {
    //     data1: '',
    //     data2: '',
    //     data3: '',
    //   },
    //   header: {
    //     'content-type': 'application/json' 
    //   },
    //   success(res) {
    //     console.log(res.data);
    //     wx.navigateTo({
    //       url: '/pages/contest/contest',
    //     })
    //   }，
    //   fail(err){

    //   }，
    //   complete(){
    //     this.data.ok=true
    //   }
    // })
    // wx.navigateTo({
    //   url: '/pages/contest/contest',
    // })
  },
  radioChange: function (e) {
    if (e.detail.value == "student") {
      this.setData({
        who: 1
      })
    }
    if (e.detail.value == "teacher") {
      this.setData({
        who: 2
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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