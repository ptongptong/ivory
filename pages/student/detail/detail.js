// pages/student/detail/detail.js
import api from '../../../utils/request.js'
import { list } from '../../../api/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    detailData: [],
    index: 0

  },

  toRead:function(e) {
   
    wx.request({
      url: 'https://guweimumian.cn/api/messages/'+this.data.detailData.id+'/read', //仅为示例，并非真实的接口地址
      data: {
        id: this.data.detailData.id
      },
      header: {
        'content-type': 'application/json',
        'Authorization': wx.getStorageSync('Authorization') // 默认值
      },
      method: 'GET',
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: '已阅！', // 标题
          icon: 'success',  // 图标类型，默认success
          duration: 1500  // 提示窗停留时间，默认1500ms
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.get(list).then(res => {
      console.log(res.data.items)
      this.setData({
        items: res.data.items
      })
      console.log(options)
      let index = options.index;

      this.setData({
        detailData: this.data.items[parseInt(index)],
        index: index
      })
      console.log(this.data.detailData)
    })


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