<template>
    <section class="shortcut"><!--因为要给顶部添加一整行的背景颜色所以不能把w加载class属性里面-->
        <div class="w top">
            <TopLeftPing :TopLeftChild="TopLeftData"></TopLeftPing>
            <TopRightPing :TopRightChild="TopRightData"></TopRightPing>
        </div>
    </section>
</template>

<script setup>
import '@/assets/css/base.css'
import '@/assets/css/common.css'
import '@/assets/bottomArrow/iconfont.css'
import TopLeftPing from './TopLeftPing.vue'
import TopRightPing from './TopRightPing.vue'

let TopLeftData = ["品优购欢迎你！", "请登入", "免费注册"]
let TopRightData = [
    "我的订单",
    "我的品优购",
    "品优购会员",
    "企业采购",
    "关注品优购",
    "客户服务",
    "网站导航",
]
</script>

<style></style>