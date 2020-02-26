import api from '../../utils/request.js'
import { school } from '../../api/api.js'
import { identify} from '../../api/api.js'
 Page({

  /**
   * 页面的初始数据
   */
  data: {
    role:[
      {"rolename":"学生"},
      {"rolename":"教师"},
    ],
    schools:[],
    titles:["辅导员","教务员"],
    index:-1,
    index_:-1,
    
      selectRole:"",
    who:"",
    name:"",
    number:"",
    title:"",
    id:0,
    ok:true,
   
    
  },

  bind1PickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(parseInt(e.detail.value) + 1)
    this.setData({
      index_: parseInt(e.detail.value),
      id: parseInt(e.detail.value) + 1,
      
     
    })
  
  },

  bind2PickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value ,
      
      
    })
    if ( this.data.titles[this.data.index])
    {
      this.setData({
        title: this.data.titles[this.data.index]
      })
    }
    
  
  },


  click: function (e) {
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    this.setData({
      selectRole: e.currentTarget.dataset.id
      
    })
    var selectRole = this.data.selectRole;
    if (selectRole == '学生') {
      this.setData({
        who:0

      })
    }
    if (selectRole == '教师') {
      this.setData({
        who: 1

      })
    }

  },

  
  
  getName: function (e) {
    var val = e.detail.value;
    this.setData({
      name: val
    });
  },  
  getNumber: function (e) {
    var val = e.detail.value;
    this.setData({
     number: val
    });
  },



  submit: function () {
    console.log(this.data.name)
    console.log(this.data.who)
    console.log(this.data.number)
    console.log(this.data.title)
    console.log(this.data.id)
    api.post(identify,{
      name:this.data.name,
      identify:this.data.who,
      number:this.data.number,
      title:this.data.title,
      school_id:this.data.id,
    }).then(res=>{
      console.log(res.data)
      if (this.data.selectRole == '学生') {
        wx.navigateTo({

          url: '../student/search/search'

        })

      }
      if (this.data.selectRole == '教师') {
        wx.navigateTo({

          url: '../teacher/search/search'

        })

      }

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
   api.get(school).then(res=>
   {
     this.setData({
       schools: res.data.items
     });
    
     console.log(this.data.schools)
   }
   )

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