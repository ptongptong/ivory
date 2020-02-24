// pages/teacher/publish/detail/detail.js

import api from '../../../../utils/request.js'
import { getmessage } from '../../../../api/api.js'
import { excel } from '../../../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    detailData:[],
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */

  
  onLoad: function (options) {
    api.get(getmessage).then(res => {
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


  toExport:function (e) {

    console.log(this.data.detailData.id)
    api.get(excel,
      {
        params:{
        id: this.data.detailData.id}
      }).then(res => {
        
      })

  },
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