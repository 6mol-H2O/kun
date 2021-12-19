// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcbx6vzhurHfsC9uNga4BcZr4tJB2WElQcy9fybuSWKp8Mt.y0COLZWTHxxgUUKrHigLZNlEZgX0xVeeScWemjto!/b&bo=OAT3BQAAAAADh2w!&rf=viewer_4',
    b:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcbKKvoBdokcC3FDezbClEUBFswsD5cfLs.8D.43o*E7wFgDe79ItXnsB.q9kl.G1pjvFYrwOdKr*xKYYae*cjUg!/b&bo=0ALQAgAAAAADFzI!&rf=viewer_4'
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
  click1(){
    wx.navigateTo({
      url: '../librarys/library',
    })
  },
  click2(){
    wx.navigateTo({
      url: '../activity/activity',
    })
  },
  click3(){
    wx.navigateTo({
      url: '../gymnasium/gymnasium',
    })
  },
  // click(e){
  //   console.log(e.detail)
  //   if(e.detail.x>90&&e.detail.x<138&&e.detail.y>170&&e.detail.y<220){
  //     wx.navigateTo({
  //       url: '../librarys/library',
  //     })
  //   }
  //   if(e.detail.x>120&&e.detail.x<190&&e.detail.y>370&&e.detail.y<420){
  //     wx.navigateTo({
  //       url: '../activity/activity',
  //     })
  //   }
  //   if(e.detail.x>230&&e.detail.x<300&&e.detail.y>400&&e.detail.y<450){
  //     wx.navigateTo({
  //       url: '../gymnasium/gymnasium',
  //     })
  //   }
  // },
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