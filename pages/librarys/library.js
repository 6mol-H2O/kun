// pages/library/library.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    list:{},
    dialog:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcbx6vzhurHfsC9uNga4BcZrwwWdNonyKKWBFA.Pr51HAcl8vSIMXIOWzL.PvJP9tqUCcEhP4v5aGBzM5JOtjNMc!/b&bo=OATABgAAAAADF8g!&rf=viewer_4',
    a:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcSL8UZroeFT2Dj7B5HKDSxkej7YeMA2Bbh48p*IzjVtE3JdBrFWkUdrE4EqBREFNx9z2ZhKF*j2EkdPemgiAv0E!/b&bo=NQAoAAAAAAADFy8!&rf=viewer_4',
    flag:false
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
    let va=await request(`/admin/library/${this.data.id}`)
    this.setData({
      list:va.data,
    })
    if(va.data.id==5){
      this.setData({
        flag:true
      })
    }

  },
  click2(){
    this.setData({
      id:this.data.id+1,
      flag:false
    })
    console.log(1)
    this.onShow()
  },
  click:async function(e){
    if(this.data.list.id==16){
      wx.navigateBack({
        delta: 2,
      })
    }
    if(this.data.id==5){
      if(e.detail.x>90&&e.detail.x<127&&e.detail.y>158&&e.detail.y<194){
        this.click2()
      }else{
        return
      }
    }
    this.setData({
      id:this.data.id+1
    })
    this.onShow()
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