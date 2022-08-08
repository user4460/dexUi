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

export default function handler(req, res) {
   res.status(200).json({ name: 'John Doe' })
}
