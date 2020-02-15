// pages/identify/identify.js
import {check_login } from '../../api/api.js'
import { login } from '../../api/api.js'
import api from '../../utils/request.js'
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
   if(this.data.who == 1){
     wx.navigateTo({

       url: ''

     })

   }
   if(this.data.who == 2){
     wx.navigateTo({

       url: '../search/search'

     })

   }

    
         
    

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
    
    api.get(check_login).then(res=> {
      if (res.statusCode == 401) {
        wx.login({
          success: res => {
            api.post(login,{
              jscode:res.code
            }).then(res=>{
              console.log(res.data.access_token)
              wx.setStorageSync('access_token', res.data.access_token)
                   
          })
        }})
      }
      else if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log(res.errmsg)
      }
      else {
        alert(res.errmsg)
      }

    })},

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