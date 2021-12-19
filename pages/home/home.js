// pages/home/home.js
import request from '../../utils/request'
import req from '../../utils/req'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    id:'',
    list:{},
    protagonist:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcTUYqLYxoJFFcx9DevO.mGrSXNoZpdcHOBvZtp7rka*a*DzNg7Xj.W8N9VFsdGqk2Vi9sFY9xAnHnR64El.qPEs!/b&bo=OATABgAAAAADR5g!&rf=viewer_4',
    chum2:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcSL8UZroeFT2Dj7B5HKDSxkcjRqaC6T3Za9AZMCeUdeL4jmN8iTaFc.4A2zRnxBxm.8N81t.kY.q1sCOtenS9b8!/b&bo=wgHQAgAAAAADFyM!&rf=viewer_4',
    chum3:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcSL8UZroeFT2Dj7B5HKDSxlvhtkiWdCCtKS4GFFcQozLZ3vj1HVUq*BiV7z9nbmedQTTnyKOj9b7qLRUL70sc6o!/b&bo=wgHQAgAAAAADJxM!&rf=viewer_4',
    chum4:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcRGBTSxTXHgGERyCTKc7ly2TMWIMV1lQYQorWbUw3Fqi5SXZ35CpRLnnNdyfD9ofto0INnG*EPgVR0T7sBnK9yQ!/b&bo=wgHQAgAAAAADFyM!&rf=viewer_4',
    chum:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcbKKvoBdokcC3FDezbClEUBv3Y755.*t0KECgoLsCfbj0UAYFrCuSGtRxwf8oyKzbfRovUg1xW53X.cIaJxeqS8!/b&bo=OATABgAAAAADN.g!&rf=viewer_4',
    dialog:'http://m.qpic.cn/psc?/V54DWESa0sRAoU0aTodf0ZH2Ht0OfYHO/45NBuzDIW489QBoVep5mcbx6vzhurHfsC9uNga4BcZrwwWdNonyKKWBFA.Pr51HAcl8vSIMXIOWzL.PvJP9tqeadzwwc6AdMqp26FjQLhCk!/b&bo=OATABgAAAAADF8g!&rf=viewer_4'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:wx.getStorageSync('id'),
      userinfo:wx.getStorageSync('userinfo')
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
  onShow: async function () {
    let va=await request(`/admin/plot/${this.data.id}`)
    let vb=await request(`/admin/userinfo/getById/${this.data.userinfo.id}`)
    if(va.data.id==null){
      this.setData({
        id:this.data.id+1
      })
      this.onShow()
    }
    this.setData({
      list:va.data,
      userinfo:vb.data
    })
    wx.setStorageSync('userinfo', this.data.userinfo)
    if(this.data.list.id==43||this.data.list.id==98||this.data.list.id==118){
      this.click()
    }
    switch(this.data.list.chan){
      case 0:
        this.setData({
          chum:'../../utils/3.png'
        })
        break;
      case 14:
          this.setData({
            chum:this.data.chum2
          })
          break;
      case 15:
            this.setData({
              chum:this.data.chum3
            })
            break;
      case 19:
              this.setData({
                chum:this.data.chum4
              })
              break;
    }
  },
  click:async function(){
    if(this.data.list.game==1){
      wx.navigateTo({
        url: '../points/points',
      })
    }
    if(this.data.list.game==2){
      wx.navigateTo({
        url: '../map/map',
      })
    }
    if(this.data.list.game==3){
      wx.navigateTo({
        url: '../play_ball/play_ball',
      })
    }
    if(this.data.list.game==4){
      wx.navigateTo({
        url: '../play_piano/play_piano',
      })
    }
    if(this.data.list.game==5){
      wx.navigateTo({
        url: '../snake/snake',
      })
    }
    if(this.data.list.game==6){
      wx.navigateTo({
        url: '../sizhengke/sizhengke',
      })
    }
    this.setData({
      id:this.data.id+1
    })
    await request(`/admin/userinfo/update`,{
      id:this.data.userinfo.id,
      openid:this.data.userinfo.openid,
      achieve:this.data.userinfo.achieve,
      power:this.data.userinfo.power,
      social:this.data.userinfo.social,
      wit:this.data.userinfo.wit,
      now:this.data.id
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