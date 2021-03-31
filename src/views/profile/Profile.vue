<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <div class="login">
      <img src="~assets/img/profile/avatar.svg" alt="">
      <div>
        <p>登陆/注册</p>
        <div>
          <img src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div><img src="~assets/img/common/arrow-left.svg" alt=""></div>
    </div>
    <div class="score-bar">
      <div class="bar-item first-item">
        <div><p>0.00</p>元</div>
        <p>我的余额</p>
      </div>
      <div class="bar-item">
        <div><p>0</p>元</div>
        <p>我的优惠</p>
      </div>
      <div class="bar-item last-item">
        <div><p>0</p>分</div>
        <p>我的积分</p>
      </div>
    </div>
    <div class="message">
      <div class="msg-item"><img src="~assets/img/profile/message.svg" alt=""><span>我的消息</span></div>
      <div class="msg-item"><img src="~assets/img/profile/pointer.svg" alt=""><span>积分商城</span></div>
      <div class="msg-item"><img src="~assets/img/profile/vip.svg" alt=""><span>会员卡</span></div>
    </div>
    <div class="cart">
      <div class="cart-item"><img src="~assets/img/profile/cart.svg" alt=""><span>我的购物车</span></div>
      <div class="cart-item"><img src="~assets/img/profile/shopping.svg" alt=""><span>下载购物APP</span></div>
    </div>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Profile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

  .profile{
    background-color: #eee;
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }

  .login{
    padding: 0 20px;
    display: flex;
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 400;
    justify-content: space-between;
    align-items: center;
    height: 15%;
  }

  .login img{
    width: 90px;
    height: 90px;
  }

  .login div img{
    width: 20px;
    height: 20px;
  }

  .score-bar{
    display: flex;
    height: 13%;
  }

  .bar-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }

  .score-bar div :first-child{
      display: inline;
      text-align: center;
  }

  .score-bar div p{
      text-align: center;
  }
  .score-bar div :first-child p{
    color: orangered;
    font-size: 26px;
    font-weight: 600;
  }

  .first-item{
    border-right: 3px solid #eee;
  }
  .last-item{
    border-left: 3px solid #eee;
  }

  .message{
    margin-top: 5%;
    background-color: #fff;
    height: 21%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 5px;
  }

  .message img{
    width: 25px;
    height: 25px;
    margin: 0 14px;
  }

  .message div{
    height: 100%;
  }

  .msg-item{
    display: flex;
    align-items: center;
    border-bottom:3px solid #eee;
    border-radius: 5px;
  }
  .cart{
    margin-top: 5%;
    background-color: #fff;
    height: 14%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 5px;
  }

  .cart img{
    width: 25px;
    height: 25px;
    margin: 0 14px;
  }
  .cart div{
    height: 100%;
  }
  .cart-item{
    flex: 1;
    border-bottom:3px solid #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
</style>
