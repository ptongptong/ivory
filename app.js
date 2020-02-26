//app.js
import { check_login } from 'api/api.js'
import { login } from 'api/api.js'
import {debug} from 'api/api.js'
import api from 'utils/request.js'
App({
 
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    api.get(check_login).then(res => {
      console.log(res.data)
      if (res.statusCode == 401) {
        wx.login({
          success: res => {
            api.post(login, {
               jscode: res.code,
              
            }).then(res => {
              console.log(res.data)
              wx.setStorageSync('Authorization', res.data.Authorization)

            })
          }
        })
      }
      else if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log(res.data)
      }
      else {
        alert(res.data)
      }

    })
      
    
 
  },
  globalData: {
    userInfo: null,
    host: 'https://'
  },
 
})