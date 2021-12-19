// pages/activity/activity.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    id:1
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
  onShow: async function () {
    let va=await request(`/admin/activity/${this.data.id}`)
    this.setData({
      list:va.data,
    })
  },
  click(e){
    if(e.target.id==this.data.list.correct){
      this.setData({
        id:this.data.id+1
      })
      if(this.data.list.id==6){
        wx.navigateBack({
          delta: 2,
        })
      }
      this.onShow()
    }else{
      wx.showToast({
        title: '你选错啦',
        icon: 'error'
      })
    }
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