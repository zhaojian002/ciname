// pages/first/first.js
var mylist=[]
var mylist_detailed=[]
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
    mylist.push({id:0,data:"今天6月29号", color:'#DC143C'},{id:1,data:"明天6月30号",color:'#000000'},{id:2,data:"后天7月1号",color:'#000000'})
    mylist_detailed.push({start:'18:55',end:'20:32',name:'蜘蛛侠',cinema:'3号厅',price:'￥30'},
    {start:'19:55',end:'21:32',name:'蜘蛛侠',cinema:'1号厅',price:'￥30'},
    {start:'19:55',end:'22:32',name:'蜘蛛侠',cinema:'1号厅',price:'￥30'},
    {start:'22:55',end:'23:32',name:'蜘蛛侠',cinema:'2号厅',price:'￥30'})
    this.setData({
      mylist,
      mylist_detailed
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
  bind_first_data:function(e){
    var z=e.currentTarget.dataset.value
    for(let i=0;i<mylist.length;i++){
      mylist[i].color='#000000'
    }
    mylist[z].color='#DC143C'
    this.setData({
      mylist
    })
  },
  bind_first_buy:function(){
    
    wx.navigateTo({
      url: '../order/order',
     
    })
  
  }
})