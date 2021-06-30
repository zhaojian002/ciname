// pages/myvideo/myvideo.js
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
    mylist.push({
      name:"蜘蛛侠",
      date:"2020-02-20",
      hour:"13:00",
      price:30,
      seatx:1,
      seaty:2,
      isbuy:false,
      isend:false
    })
    mylist.push({
      name:"钢铁侠",
      date:"2020-02-20",
      hour:"13:00",
      price:30,
      seatx:1,
      seaty:2,
      isbuy:true,
      isend:false
    })
    mylist.push({
      name:"变形金刚",
      date:"2020-02-20",
      hour:"13:00",
      price:30,
      seatx:1,
      seaty:2,
      isbuy:true,
      isend:true
    })
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

  }
})