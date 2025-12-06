<template>
    <div class="w">
        <header>
            <RouterLink to="/"></RouterLink>
        </header>
        <div class="content">
            <div class="hd">
                <h3>注册新用户</h3>
                <p>我有账号，去<a href="#">登陆</a></p>
            </div>
            <div class="bd">
                <div class="age_form">
                    <form action="#">
                        <ul>
                            <li><label for="">手机号：</label><input type="tel"
                                    class="inp"><span><i></i>手机号码格式不正确，请从新输入</span>
                            </li>
                            <li><label for="">短信验证码：</label><input type="tel"
                                    class="inp"><span><i></i>手机号码格式不正确，请从新输入</span></li>
                            <li><label for="">登入密码：</label><input type="tel"
                                    class="inp"><span><i></i>手机号码格式不正确，请从新输入</span>
                            </li>
                            <li class="safety">安全程度<em class="ruo">弱</em><em class="zhong">中</em><em
                                    class="qiang">强</em>
                            </li>
                            <li><label for="">确认密码：</label><input type="tel"
                                    class="inp"><span><i></i>手机号码格式不正确，请从新输入</span>
                            </li>
                            <li class="tongyi"><input type="checkbox"><label for="">同意协议并注册</label><a
                                    href="#">《知晓用户协议》</a>
                            </li>
                            <li><input type="submit" value="完成注册"></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import '@/assets/css/register.css'
import { RouterLink } from 'vue-router';
</script>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 105px;
}

header a {
    display: block;
    width: 171px;
    height: 61px;
    background-image: url(/images/logo.png);
    font-size: 0;
}
</style>