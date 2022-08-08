//sign up
var app = getApp();
Page({
   data: {
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      isShow: false,
   }
})

function signup() {
   return <div>signup</div>
}

export default signup