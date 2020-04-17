// pages/teacher/bindS/bindS.js
import api from '../../../utils/request.js'
import { bind } from '../../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[],
    showInput:false,
    inputValue:"",
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

  },

  submit:function(){
    console.log(this.data.num)
    api.post(bind,{
      numbers:this.data.num
    }).then(res=>{
      wx.showToast({
        title: '成功绑定！', // 标题
        icon: 'success',  // 图标类型，默认success
        duration: 1500  // 提示窗停留时间，默认1500ms
    })
  })},

  click:function(){
    wx.navigateTo({

      url: '../search/search'

    })

  },

  delete:function(){
    this.setData({
     
      inputValue:'',//将data的inputValue清空
      num:[]
    });
  },

  add:function(e){
    var val = e.detail.value;
    this.data.num.push(val);
    console.log(this.data.num)
  }
})