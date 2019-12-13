// pages/comment/comment.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    content:"",
    rate:3,
    img:[],
    fileId:[],
    movieId:-1
  },
  onContentChange:function(event){
    this.setData({
      content:event.detail
    })
  },
  onRateChange:function(event){
    this.setData({
      rate:event.detail
    })
  },
  getImg:function(){
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(res)=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        this.setData({
          img: this.data.img.concat(tempFilePaths)
        })
      }
    })
  },
  submit:function(){
    wx.showLoading({
      title: '提交中',
    })
    console.log(this.data.content,this.data.rate);
    let promiseArray=[];
    for(let i=0;i<this.data.img.length;i++){
     promiseArray.push(new Promise((reslove,reject)=>{
       let item = this.data.img[i];
       let suffix = /\.\w+$/.exec(item)[0];
       wx.cloud.uploadFile({
         cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
         filePath: item, // 小程序临时文件路径
         success: res => {
           // 返回文件 ID
           console.log(res.fileID)
           this.setData({
             fileId: this.data.fileId.concat(res.fileID)
           });
           reslove();
         },
         fail: console.error
       })
     }))
    }
    Promise.all(promiseArray).then(res=>{
      db.collection('comment').add({
        data:{
          content: this.data.content,
          rate: this.data.rate,
          fileId: this.data.fileId,
          movieId: this.data.movieId
        }
      }).then(()=>{
        wx.hideLoading();
        console.log("提交成功");
        wx.showToast({
          title: '提交成功',
        })
      }).catch((err)=>{
        wx.hideLoading();
        console.error(err);
        wx.showToast({
          title: '提交失败',
        })
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      movieId:options.movieid
    })
    console.log(options.movieid);
    wx.cloud.callFunction({
      name:"getDetails",
      data:{
        movieid:options.movieid
      }
    }).then(res=>{
      wx.hideLoading();
      console.log(res);
      this.setData({
        detail: JSON.parse(res.result)
      })
      console.log(this.data.detail)
    }).catch(err=>{
      wx.hideLoading();
      console.error(err);
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