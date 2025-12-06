<template>
    <nav>
        <div class="w">
            <div class="zuo">全部商品分类</div>
            <div class="you">
                <a v-for="(arr, i) in you" :key="i" href="javascript:;">{{ arr }}</a>
            </div>
            <div class="xia">
                <ul>
                    <li v-for="(arr, i) in xia" :key="i">
                        <a href="javascript:;">{{ arr }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import '@/assets/css/base.css'
import '@/assets/css/common.css'
import '@/assets/rightArrow/iconfont.css'
let you = ["服装城", "美妆馆", "传智超市", "全球购", "闪购", "团购", "拍卖", "有趣"]
let xia = [
    "家庭用电",
    "手机、数码、通信",
    "电脑、办公",
    "家居、家具、家装、厨具",
    "男装、女装、童装、内衣",
    "个户化妆、清洁用品、宠物",
    "鞋靴、箱包、珠宝、奢侈品",
    "运动户外、钟表",
    "汽车、汽车用品",
    "母婴、玩具乐器",
    "食品、酒类、生鲜、特产",
    "医药保健",
    "图书、音像、电子书",
    "彩票、旅行、充值、票务",
    "理财、众筹、白条、保险",
]
</script>

<style></style>