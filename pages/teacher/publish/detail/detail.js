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
  toDelete:function(e){
    wx.request({
      url: 'http://gc.cbfgo.cn/messages/'+this.data.detailData.id, //仅为示例，并非真实的接口地址
      data: {
        msg_id:this.data.detailData.id
      },
      header: {
        'content-type': 'application/json',
        'Authorization': wx.getStorageSync('Authorization') // 默认值
      },
      method: 'DELETE',
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: '已删除！', // 标题
          icon: 'success',  // 图标类型，默认success
          duration: 1500  // 提示窗停留时间，默认1500ms
        })
      }
    })
  },


  toExport:function (e) {
 
    wx.downloadFile({
      
      url: 'https://gc.cbfgo.cn/export_read?id=' + this.data.detailData.id,
      data: {
       id:this.data.detailData.id
      },
      header: {
        'content-type': 'application/json', 
         'Authorization': wx.getStorageSync('Authorization')
        // 默认值
      },

      success(res) {
        
        if (res.statusCode === 200) {
         var fPath = res.tempFilePath
         console.log(fPath)
          wx.openDocument({
            filePath: fPath,
            fileType: 'xls',
            success: function (res) {
              console.log('打开文档成功')
          
        }
      })


    }
   
  }})},
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