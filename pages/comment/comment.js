// pages/comment/comment.js
var mylist=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color_1:'',
    color_2:'',
    sel_id:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mylist.push({name:'赵健',data:'2021-6-29',value:4,com:'很好看'},{name:'林世骄',data:'2021-6-29',value:4,com:'很好看'})
    this.setData({
      color_1:'#DC143C',
      color_2:'#000000',
      sel_id:1,
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
  bindComtap_introduce:function(){
    this.setData({
      color_1:'#DC143C',
      color_2:'#000000',
      sel_id:1
    })
  },
  bindComtap_comment:function(){
   
    this.setData({
      color_1:'#000000',
      color_2:'#DC143C',
      sel_id:2
      
    })
  },
  bind_return_first:function(){
    wx.switchTab({
      url: '../video/video'
    })
  },
  bind_return_buy:function(){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  bind_return_coll:function(){
    wx.navigateTo({
      url: '../mycollection/mycollection',
    })
  }
})