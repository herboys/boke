<template>
    <div>
<!--    顶部导航栏-->
        <header class="headers">
            <div>
            <ul>
                <li style="text-align: left">返回</li>
                <li style="font-size: .36rem">使用帮助</li>
                <li style="text-align: right">
                    <a @click="substom" v-if="substomstyle===true">
                        <img src="../assets/help/xianshi.png">
                    </a>
                     <a @click="issubstom" v-if="substomstyle===false">
                        <img src="../assets/help/yincang.png">
                    </a>

                </li>
            </ul>
            </div>
        </header>
        <div style="height: 1rem"></div>
<!--        侧边栏-->
        <div class="right-tree" v-if="substomstyle===false">
            <div>
                <h4>目录</h4>
                <ul>
                    <li  v-for="(item,index) in list">
                        <a style="font-size: .32rem;
                            font-weight: bold;
                            color: #30AC65;" :href="'#'+item.id" @click="btnlistid(item)">{{item.title}}</a>
                        <ul>
                            <li v-for="child in item.childlist">
                                <a style="font-size: .28rem;
                                    font-weight: 400;color: #30AC65;" :href="'#'+child.id" @click="childlistbtn(child)">{{child.childtitle}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
<!--        主内容-->
        <div class="main">
            <div v-for="item in list" :id="item.id"  style="padding-top: 1rem;margin-top: -.9rem;">
                <h3 >{{item.title}}</h3>
                <p>{{item.titletext}}</p>
                <div :id="child.id" v-for="child in item.childlist" style="padding-top: 1rem;margin-top: -.9rem;">
                <h5>{{child.childtitle}}</h5>
                    <div v-for="Grandson in child.Grandson"><p>{{Grandson.Grandsontitle}}</p>
                    <img :src="Grandson.Grandsonimg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Headers from "../components/headers";
    export default {
        name: "helpmain",
        data(){
          return{
              substomstyle:true,
              list:[
                  {
                      id:1,
                      title:'1.产品概述',
                      titletext:'',
                      childlist:[
                          {
                              id:2,
                              childtitle:'1.1概述',
                              Grandson:[
                                  {
                                      Grandsontitle:'快友社区，产品涵盖了社区服务、社区周边、社区广场、社区活动等。从生活服务到网上购物，从话题热议到脑洞问答\n' +
                                          '我们一直致力于打造轻快、便捷、舒适的特色社区综合平台每一次更新，只为了追寻更好的生活体验'
                                  }

                              ],
                          },  {
                              id:3,
                              childtitle:'1.2功能',
                              Grandson:[
                                  {
                                      Grandsontitle:'\n' +
                                          '                            1）用户可以在首页浏览和购买快友社区推荐出来的活动，\n' +
                                          '话题和商品。\n' +
                                          '                        '
                                  },{
                                      Grandsontitle:'2）在发布里用户可以发话题、二手、租房等信息。'
                                  },{
                                      Grandsontitle:'\n' +
                                          '                            3）用户可以入住到快友，成为快友的商家、跑腿、家政，\n' +
                                          '通过自己的能力来赚钱。\n' +
                                          '                        '
                                  },{
                                      Grandsontitle:'4）商家和家政可以分别在消息的接单中心接单，跑腿是在消息中的抢单中心抢单。'
                                  },{
                                      Grandsontitle:'\n' +
                                          '                            5）商家可以在“我的”“商品管理”中发布自己店中经营\n' +
                                          '的商品。\n' +
                                          '                        '
                                  },{
                                      Grandsontitle:'6）商家可以在“我的”“活动管理”中发布自己想要举办的活动。'
                                  },{
                                      Grandsontitle:'\n' +
                                          '                            7）商家可以在“我的”“卡券管理”中发布自己想要运营\n' +
                                          '的卡券。\n' +
                                          '                        '
                                  },{
                                      Grandsontitle:'\n' +
                                          '                            8）商家可以在“我的”“我的小店”里设置自己的营业时\n' +
                                          '间。\n' +
                                          '                        '
                                  }
                              ]
                          }, {
                              id:4,
                              childtitle:'1.3性能',
                              Grandson:[
                                  {
                                      Grandsontitle:'\n' +
                                          '                            软件具有良好的易用性和可靠性，并保证信息的安全性和保\n' +
                                          '密性。\n' +
                                          '                        '
                                  }
                                  ]
                          },
                      ]
                  },{
                  id:100,
                      title:'2.运行环境',
                      titletext:'本软件可在Android和iOS  8.0版本以上的手机系统上运行。',
                      childlist:[]
                  },
                  {
                      id:5,
                      title:'3.普通用户使用方法',
                      childlist:[
                          {
                              id:38,
                              childtitle:'3.1软件安装',
                              Grandson:[
                                  {
                                      Grandsonimg:'',
                                      Grandsontitle:'\n' +
                                          '                            安卓手机用户可以通过各大应用市场（360手机助手、百度\n' +
                                          '手机助手、小米应用市场、华为应用市场、应用宝）进行下\n' +
                                          '载安装试用。\n' +
                                          '                        '
                                  }, {
                                      Grandsonimg:'',
                                      Grandsontitle:'\n' +
                                          '                            苹果手机用户可以通过Appstore应用商店搜索“快友社区”\n' +
                                          '进行下载安装试用。\n' +
                                          '                         '
                                  },
                              ]
                          },  {
                              id:6,
                              childtitle:'3.2软件运行',
                              Grandson:[
                                  {
                                      Grandsonimg:'',
                                      Grandsontitle:'\n' +
                                          '                            用户在安装完毕后，点击桌面图标即可进入APP登录页，界\n' +
                                          '面。如图1-1\n' +
                                          '                        ',
                                      Grandsonimg:require('../assets/help/1.png')
                                  }

                              ],
                          }, {
                              id:7,
                              childtitle:'3.3用户注册',
                              Grandson:[
                                  {
                                      Grandsonimg:require('../assets/help/3.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户第一次访问时通过以下步骤进行注册：输入手机号-获取\n' +
                                          '验证码-填写验证码-登录，同时登录即注册。如图1-2\n' +
                                          '                        '
                                  }

                              ],
                          }, {
                              id:8,
                              childtitle:'3.4微信登录/QQ登录',
                              Grandson:[
                                  {
                                      Grandsonimg:require('../assets/help/组 16.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户可以通过点击快捷登录中的微博登录/微信登录/QQ登录等第三方应用，授权登录。如图1-3、1-4、1-5\n' +
                                          '                        '
                                  }

                              ],
                          }, {
                              id:9,
                              childtitle:'3.5手机登录',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/2.png'),
                                      Grandsontitle:'\n' +
                                          '                            注册成功的用户通过以下步骤进行用户登录：点击桌面图标\n' +
                                          '-输入手机号码-密码-登录，进入应用界面。如图1-6\n' +
                                          '                        '
                                  }

                              ],
                          }, {
                              id:10,
                              childtitle:'3.6发布话题、租房、二手、问答',
                              Grandson:[
                                  {   Grandsonimg:require('../assets/help/组 18.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后进入应用首页，点击底部栏中间的“+”号进入\n' +
                                          '发布界面，编辑信息-选择信息类型-添加信息标签-选择可见\n' +
                                          '性，发布。如图1-7\n' +
                                          '                        '
                                  }

                              ],
                          }, {
                              id:11,
                              childtitle:'3.7消息',
                              Grandson:[
                                  {   Grandsonimg:require('../assets/help/组 19.png'),
                                      Grandsontitle:''
                                  }

                              ],
                          }, {
                              id:12,
                              childtitle:'3.8查看个人信息',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 20.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的-设置-个人信息，即进入个人信息页\n' +
                                          '面。如图1-9、1-10\n' +
                                          '                        '
                                  }

                              ],
                          }, {
                              id:13,
                              childtitle:'3.9修改个人信息',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 21.png'),
                                      Grandsontitle:'\n' +
                                          '                            登录后点击我的-设置-个人信息-在这里你可以更改头像、昵\n' +
                                          '称、性别、生日、故乡、标签。如图2-1\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:14,
                              childtitle:'3.10设置/修改登录密码',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 22.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的-设置-账号安全-设置/修改登录密码，\n' +
                                          '输入新的密码，确认密码，修改成功后使用新密码进行登录\n' +
                                          '如图2-2\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:15,
                              childtitle:'3.11设置/修改/找回支付密码',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 23.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的-设置-账号安全-修改支付密码，首次\n' +
                                          '支付时需要设置支付密码，修改、找回操作均需核对绑定手\n' +
                                          '机的短信验证码。如图2-3\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:16,
                              childtitle:'3.12修改/绑定手机号',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 24.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的-设置-账号安全-修改/绑定手机号，\n' +
                                          '输入新手机号码，获取验证码，确认换绑。如图2-4\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:17,
                              childtitle:'3.13关注',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 25.png'),
                                      Grandsontitle:'\n' +
                                          '                            登录后点击我的-关注-这里是你的关注中心，你关注的所有\n' +
                                          '用户都会在这里被记录下来。在这里点击他们可以前往他们\n' +
                                          '的个人主页与他们交流社区信息内容。如图2-5\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:18,
                              childtitle:'3.14我的发布',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 26.png'),
                                      Grandsontitle:'\n' +
                                          '                            登录后点击我的-发布-在这里收集的是你在加号发布入口发\n' +
                                          '布的话题、二手、租房、问答。如图2-6\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:19,
                              childtitle:'3.15收藏',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 27.png'),
                                      Grandsontitle:'如图2-7'
                                  }

                              ],
                          },{
                              id:20,
                              childtitle:'3.16我的钱柜',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 28.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的-我的钱柜，钱柜中包含余额、充值、\n' +
                                          '提现等功能，余额可直接用来下单购买/下单服务，发生取\n' +
                                          '消订单/退款操作后，平台退回的钱款会在24小时内退回到\n' +
                                          '该账户。如图2-8\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:21,
                              childtitle:'3.17充值',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 29.png'),
                                      Grandsontitle:'\n' +
                                          '                            登录后点击我的-我的钱柜-余额-充值-选择充值方式-输入充\n' +
                                          '值金额-输入支付密码-充值成功如图2-9\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:22,
                              childtitle:'3.18提现',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 30.png'),
                                      Grandsontitle:'\n' +
                                          '                            登录后点击我的-我的钱柜-余额-提现-选择提现路径-输入提\n' +
                                          '现金额-输入支付密码-等待处理-提现成功。如图2-10\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:23,
                              childtitle:'3.19我的订单',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 31.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的-我的订单-待付款、待接单、待完成、\n' +
                                          '评价、退款售后，查看全部订单-全部、待付款、待接单、待\n' +
                                          '完成、待评价等。如图3-1\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:24,
                              childtitle:'3.20卡券中心',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 32.png'),
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的--卡券中心-店铺券、商品券、代金券\n' +
                                          '-查看全部-领券入口、立即使用，店铺券（店铺内所有商品\n' +
                                          '通用）商品券（指定商品可用）代金券（平台消费可用）。\n' +
                                          '如图3-2\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:25,
                              childtitle:'3.21快速入驻',
                              Grandson:[
                                  {  Grandsonimg:'',
                                      Grandsontitle:'\n' +
                                          '                            用户登录后，点击我的-发现更多-快速入驻，快速入驻里有\n' +
                                          '商家、跑腿、家政三种入驻类型，对应不同的入驻信息。\n' +
                                          '                        '
                                  },{  Grandsonimg:'',
                                      Grandsontitle:'\n' +
                                          '                            商家：上传店铺头像、店铺名称、经营范围、联系人、联系\n' +
                                          '电话、店铺地址、选择营业时间、上传营业执照、上传身份\n' +
                                          '证正反面，手持证件照。\n' +
                                          '                        '
                                  },{  Grandsonimg:'',
                                      Grandsontitle:'\n' +
                                          '               跑腿：             上传工作头像、真实姓名、性别、年龄、手机号、联\n' +
                                          '系地址、上传身份证正反面、手持身份证证件照。\n' +
                                          '                        '
                                  },{  Grandsonimg:'',
                                      Grandsontitle:'\n' +
                                          '                           家政： 上传工作头像、真实姓名、性别、年龄、手机号、联\n' +
                                          '系地址、选择服务类型（日常清洁、深层清洁）上传身份证\n' +
                                          '正反面、手持身份证证件照。\n' +
                                          '                        '
                                  },{  Grandsonimg:require('../assets/help/组 33.png'),
                                      Grandsontitle:'\n' +
                                          '                            提交入驻申请后，系统会给出提示，并在后台进行审核，若\n' +
                                          '申请成功，则增加相应的身份标识和功能，若申请失败，则\n' +
                                          '按照系统提示修改申请内容后再次提交入驻申请。如图3-3\n' +
                                          '                        '
                                  },

                              ],

                          },
                      ]
                  },{
                      id:26,
                  title:'4.商家/跑腿/家政新增功能使用方法',
                      childlist:[
                          {
                              id:27,
                              childtitle:'4.1商家设置营业时间',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 34.png'),
                                      Grandsontitle:'\n' +
                                          '                            商家登录后，点击我的-更多服务-我的小店-营业时间设置-\n' +
                                          '选择营业的开始时间和打烊时间。如图3-4\n' +
                                          '                        '
                                  }

                              ],
                          },{
                              id:28,
                              childtitle:'4.2商家店铺信息修改',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 35.png'),
                                      Grandsontitle:'商家登录后，点击我的-更多服务-我的小店-店铺信息，在此\n' +
                                          '处商家可以对自己入驻时所填写的店铺信息进行修改。如图\n' +
                                          '3-5'
                                  }

                              ],
                          },{
                              id:29,
                              childtitle:'4.3商品发布及管理',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 36.png'),
                                      Grandsontitle:'商家用户点击我的-商家必备-我的商品，在商家必备里点击\n' +
                                          '发布商品或在我的商品内页面顶部右上角选择发布商品，同\n' +
                                          '时，在我的商品页面可以对商品进行管理（添加商品、删除\n' +
                                          '商品、重新编辑商品、上下架商品。如图3-6'
                                  }

                              ],
                          },{
                              id:30,
                              childtitle:'4.4活动发布及管理',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 37.png'),
                                      Grandsontitle:'商家用户点击我的-商家必备-我的活动，在商家必备里点击\n' +
                                          '发布活动或在我的活动内页面顶部右上角选择发布活动，同\n' +
                                          '时，在我的活动页面可以对活动进行管理（添加活动、删除\n' +
                                          '活动、重新编辑活动）如图3-7'
                                  }

                              ],
                          },{
                              id:31,
                              childtitle:'4.5卡券发布及管理',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 38.png'),
                                      Grandsontitle:'登录后点击我的-商家必备-我的卡券-发布卡券-卡券管理。\n' +
                                          '如图3-8'
                                  }

                              ],
                          },{
                              id:32,
                              childtitle:'4.6我的订单',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 39.png'),
                                      Grandsontitle:'商家/跑腿/家政登录后点击我的-我的订单，快友服务人员，\n' +
                                          '我的订单分为我发出的和我接到的两种订单类型，我发出的\n' +
                                          '订单，不论用户类型，我接收的订单，专为入驻商户提供。\n' +
                                          '如图3-9'
                                  }

                              ],
                          },{
                              id:33,
                              childtitle:'4.7消息',
                              Grandson:[
                                  { Grandsonimg:require('../assets/help/组 40.png'),
                                      Grandsontitle:'接单中心，登陆后点击消息-接单中心。商家有商家接单中\n' +
                                          '心、跑腿有跑腿抢单中心（用户和商家下的跑腿订单都会出\n' +
                                          '现在这里，跑腿人员可以在这里进行抢单）、家政有家政接\n' +
                                          '单中心\n' +
                                          '在接单中心里服务人员可以进行快捷的接单和确认完成订单。\n' +
                                          '如图3-10'
                                  }

                              ],
                          },{
                              id:34,
                              childtitle:'4.8我的钱柜',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 41.png'),
                                      Grandsontitle:'用户登录后点击我的-我的钱柜，入驻平台的快友商户比普\n' +
                                          '通用户多一个本月收益模块，在该页面可查看当月收益。\n' +
                                          '如图4-1'
                                  }

                              ],
                          },{
                              id:35,
                              childtitle:'4.9支付',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 42.png'),
                                      Grandsontitle:'选择商品，填写收货地址和个人信息，点击立即支付，然后\n' +
                                          '选择支付方式（余额、微信、支付宝三种支付方式）立即支\n' +
                                          '付，输入支付密码，支付成功后订单直接发送到商家（服务\n' +
                                          '方），等待商家接单即可。如图4-2'
                                  }

                              ],
                          },{
                              id:36,
                              childtitle:'4.10充值',
                              Grandson:[
                                  {   Grandsonimg:require('../assets/help/组 43.png'),
                                      Grandsontitle:'登录后点击我的-我的钱柜-余额-充值-选择充值方式-输入充\n' +
                                          '值金额-输入支付密码-充值成功。如图4-3'
                                  }

                              ],
                          },{
                              id:37,
                              childtitle:'4.11提现',
                              Grandson:[
                                  {  Grandsonimg:require('../assets/help/组 44.png'),
                                      Grandsontitle:'登录后点击我的-我的钱柜-余额-提现-选择提现路径-输入提\n' +
                                          '现金额-输入支付密码-等待处理-提现成功。如图4-4'
                                  }

                              ],
                          },
                      ]
                  }

              ],
          }
        },
        methods:{
            btnlistid(item){
                this.substomstyle=true
            },
            childlistbtn(child){
                this.substomstyle=true
            },
            substom(){
                this.substomstyle=false
            },
            issubstom(){
                this.substomstyle=true
            },
        },
        components: {Headers},
    }
</script>

<style scoped lang="scss">
    .headers{
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 999;
        div{
        background-color: #30AC65;
        padding: .2rem;
        margin: auto;
        color: white;
        ul{
            /*background-color: white;*/
            display: flex;
            align-items: center;
            li{
                font-size: .26rem;
                font-weight: bold;
                text-align: center;
                flex: 1;
                a{
                    width: .4rem;
                    height: .4rem;
                    overflow: hidden;
                    float: right;
                    img{
                        width: .4rem;
                        height: .4rem;
                    }
                }
            }
        }
    }
    }
    .right-tree{
      position: fixed;
        background: white;
        top: 1rem;
        right: 0;
        width: 70%;
        border-left: .01rem solid #eeeeee;
        overflow-y: scroll;
        height: 100%;
        padding-bottom: 1rem;
        div{
            padding:.1rem .4rem;
            margin: auto;
            margin-bottom: 1rem;
            h4{
                font-size: .3rem;
                text-align: center;
                padding-bottom: .1rem;
                margin-bottom: .2rem;
                border-bottom: .02rem solid #eeeeee;
            }
            ul{

                li{
                    margin: .1rem 0px;
                }
            }
        }

    }
    .main{
        padding: .2rem;
        div{
            h3{
                text-align: center;
                font-size: .38rem;
                font-weight: bold;
                color: #333333;
                padding: .2rem;
            }
            div{
                h5{
                    font-size: .32rem;
                    padding: .2rem 0rem;
                }
                div{

                    p{
                        font-size: .28rem;
                        color: #666666;
                        margin: .1rem 0rem;
                    }
                    img{

                        width: 100%;
                    }
                }

            }
        }
    }
</style>
