// pages/order/order.js
var mylistx=[]
var mylisty=[]
var mylistsel=[]
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
    for(let i=1;i<9;i++){
      mylistx.pop()
      for(let j=1;j<11;j++){
        mylisty.pop()
      }
    }
    for(let i=1;i<9;i++){
      mylistx.push({x:i})
    }
    for(let i=1;i<9;i++){
      for(let j=1;j<11;j++){
        mylisty.push({x:i,y:j,state:0,price:60})
        mylistsel.push({x:i,y:j,state:0,price:60})
      }
    }
    this.setData({
      mylistx,
      mylisty,
      mylistsel
      
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
  bindOrdertap:function (e) {
    var x = e.currentTarget.dataset.valuex
    var y = e.currentTarget.dataset.valuey
    mylisty[(x-1)*10+y-1].state=1;
    console.log(x,y)
    this.setData({
      mylisty
    })
    
  }
})