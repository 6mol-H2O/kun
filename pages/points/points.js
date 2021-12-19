// pages/24points/points.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:2,
    num2:6,
    num3:8,
    num4:4,
    s1:'',
    s2:'',
    s3:'',
    s4:'',
    s5:'',
    s6:'',
    s7:'',
    i:1,
    isshow:true
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
  onShow: function () {

  },
  cal(){
    let res
    switch(this.data.s2){
      case '+':
        res=this.data.s1+this.data.s3
        break;
      case '*':
        res=this.data.s1*this.data.s3
        break;
      case '÷':
        res=this.data.s1/this.data.s3
        break;
      case '-':
        res=this.data.s1-this.data.s3
        break;
    }
    switch(this.data.s4){
      case '+':
        res=res+this.data.s5
        break;
      case '*':
        res=res*this.data.s5
        break;
      case '÷':
        res=res/this.data.s5
        break;
      case '-':
        res=res-this.data.s5
        break;
    }
    switch(this.data.s6){
      case '+':
        res=res+this.data.s7
        break;
      case '*':
        res=res*this.data.s7
        break;
      case '÷':
        res=res/this.data.s7
        break;
      case '-':
        res=res-this.data.s7
        break;
    }
    if(res==24){
      wx.navigateBack({
        delta: 1,
      })
    }else{
      wx.showToast({
        title: res+'不等于24',
        icon : 'error',
        duration : 1000
      })
      this.setData({
        s1:'',
        s2:'',
        s3:'',
        s4:'',
        s5:'',
        s6:'',
        s7:'',
        i:1,
        isshow:true
      })
    }
  },
  but(e){
    if(e.target.dataset.type=='clear'){
      this.setData({
        s1:'',
        s2:'',
        s3:'',
        s4:'',
        s5:'',
        s6:'',
        s7:'',
        i:1,
        isshow:true
      })
    }else{
    switch(this.data.i){
      case 1:{
        this.setData({
          isshow:false,
          s1:e.target.dataset.type,
          i:this.data.i+1
        })
        break;
      }
      case 2:{
        this.setData({
          isshow:true,
          s2:e.target.dataset.type,
          i:this.data.i+1
        })
        break;
      }
      case 3:{
        this.setData({
          isshow:false,
          s3:e.target.dataset.type,
          i:this.data.i+1
        })
        break;
      }
      case 4:{
        this.setData({
          isshow:true,
          s4:e.target.dataset.type,
          i:this.data.i+1
        })
        break;
      }
      case 5:{
        this.setData({
          isshow:false,
          s5:e.target.dataset.type,
          i:this.data.i+1
        })
        break;
      }
      case 6:{
        this.setData({
          isshow:true,
          s6:e.target.dataset.type,
          i:this.data.i+1
        })
        break;
      }
      case 7:{
        this.setData({
          s7:e.target.dataset.type,
        })
        this.cal()
        break;
      }
    }
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