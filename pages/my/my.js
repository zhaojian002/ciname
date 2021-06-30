// pages/my/my.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  // 事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTap1: function() {
    wx.navigateTo({
      url: '../myvideo/myvideo'
    })
  },
  bindViewTap2: function() {
    wx.navigateTo({
      url: '../mycollection/mycollection'
    })
  },
  bindViewTap3: function() {
    wx.navigateTo({
      url: '../myinformation/myinformation'
    })
  },
  bindDeltap:function(){
    wx.showModal({
      title:'警告',
      content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
      showCancel:false,
      confirmText:'返回授权',
      success:function(res){
          if (res.confirm) {
              console.log('用户点击了“返回授权”')
              wx.openSetting({
                withSubscriptions: true,
              })
              
          } 
      }
  })

  }
})