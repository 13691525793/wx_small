// pages/service/service.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text1: '1、一切移动客户端用户在下载、使用并浏览“中国防伪-企业版”微信小程序软件、微信小程序时均被视为已经仔细阅读本条款并完全同意。凡以任何方式使用本微信小程序，或直接、间接使用本微信小程序资料者，均被视为自愿接受本微信小程序相关声明和用户服务协议的约束。',
    text2: '2、“中国防伪-企业版”微信小程序转载的内容并不代表本微信小程序之意见及观点，也不意味着本微信小程序赞同其观点或证实其内容的真实性.',
    text3: ' 3、“中国防伪-企业版”微信小程序转载的文字、图片、音视频等资料均由本微信小程序用户提供，其真实性、准确性和合法性由信息发布人负责。本微信小程序不提供任何保证，并不承担任何法律责任。',
    text4: '4、“中国防伪-企业版”微信小程序所转载的文字、图片、音视频等资料，如果侵犯了第三方的知识产权或其他权利，请联系本微信小程序开发者进行处理。',
    text5: '5、“中国防伪-企业版”微信小程序不保证为向用户提供便利而设置的外部链接的准确性和完整性，同时，对于该外部链接指向的不由本微信小程序实际控制的任何网页上的内容，本微信小程序不承担任何责任。',
    text6: '6、用户明确并同意其使用“中国防伪-企业版”微信小程序网络服务所存在的风险将完全由其本人承担；因其使用本微信小程序网络服务而产生的一切后果也由其本人承担，本微信小程序对此不承担任何责任。',
    text7: '7、除“中国防伪-企业版”微信小程序注明之服务条款外，其它因不当使用本微信小程序P而导致的任何意外、疏忽、合约毁坏、诽谤、版权或其他知识产权侵犯及其所造成的任何损失，本微信小程序概不负责，亦不承担任何法律责任。',
    text8: '8、对于因不可抗力或因黑客攻击、通讯线路中断等“中国防伪-企业版”微信小程序不能控制的原因造成的网络服务中断或其他缺陷，导致用户不能正常使用本微信小程序，本微信小程序不承担任何责任，但将尽力减少因此给用户造成的损失或影响。',
    text9: '9、本声明未涉及的问题请参见国家有关法律法规，当本声明与国家有关法律法规冲突时，以国家法律法规为准。',
    text10: '10、“中国防伪-企业版”微信小程序相关声明版权及其修改权、更新权和最终解释权均属本微信小程序所有。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '免责声明'
    })
  }
})