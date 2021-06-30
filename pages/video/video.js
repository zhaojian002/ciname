// pages/video/video.js
var mylist=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mylist.push({id:1,name:'蜘蛛侠',img:'../../icon/test1.png'},{id:2,name:'钢铁侠',img:'../../icon/test2.png'}
    ,{id:3,name:'大人物',img:'../../icon/test5.png'},{id:4,name:'鬼灭之刃',img:'../../icon/test4.png'})
    this.setData({
      mylist
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

  },
  bindVideotap:function(){
    wx.navigateTo({
      url: '../comment/comment'
    })
  }
})