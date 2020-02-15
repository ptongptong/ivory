// pages/identify/identify.js

import { identify } from '../../api/api.js'
import api from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    who:-1,
    name:"",
    code:"",
    title:"",
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

  getTitle: function (e) {
    var val = e.detail.value;
    this.setData({
      title: val
    });
  },

  submit: function () {
    api.post(identify,{
      name:this.data.name,
      identify:this.data.who,
      number:this.data.code,
      title:this.data.title
    }).then(res=>{
      console.log(res.data)
    })

   if(this.data.who == 0){
     wx.navigateTo({

       url: ''

     })

   }
   if(this.data.who == 1){
     wx.navigateTo({

       url: '../search/search'

     })

   }

    
         
    

  },
  radioChange: function (e) {
    
    if (e.detail.value == "student") {
      this.setData({
        who: 0
      })
    }
    if (e.detail.value == "teacher") {
      this.setData({
        who: 1
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