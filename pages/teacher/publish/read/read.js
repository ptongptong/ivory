// pages/publish/read/read.js
import api from '../../../../utils/request.js'
import { getmessage } from '../../../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    

  },

  toDetail:(e) =>{
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../detail/detail?index='+index,
    })
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
    api.get(getmessage).then( res=>
    {
      console.log(res.data.items)
      this.setData({
        items: res.data.items
      });
    
    }
    )

   
    //this.data.items.date = this.data.items.time.substring(0,10)
    //this.data.items.min = this.data.items.time.substring(11,15)
    //console.log(this.data.items)

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