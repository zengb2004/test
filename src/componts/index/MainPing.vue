<template>
    <main class="w">
        <div class="jiao">
            <div class="newsflash">
                <ul>
                    <li v-for="item in slideshow">
                        <a href="javascript:;"><img :src="item" alt="" /></a>
                    </li>
                </ul>
                <ol></ol>
                <a href="javascript:;" class="left">&lt;</a>
                <a href="javascript:;" class="right">&gt;</a>
            </div>
            <div class="lifeservice">
                <div class="shang">
                    <div class="hd">
                        <h5>品优购快报</h5>
                        <p>更多</p>
                    </div>
                    <div class="bd">
                        <p v-for="(item, i) in bd" :key="i">
                            <a href="javascript:;"><strong>{{ item.type }}</strong>{{ item.content }}</a>
                        </p>
                    </div>
                </div>
                <div class="zhong">
                    <table>
                        <tr v-for="(row, i) in zhong" :key="i">
                            <td v-for="(cell, i) in row" :key="i" class="t3">
                                <p>{{ cell }}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="xia">
                    <img :src="imgs[imgs.length - 1]" alt="" />
                </div>
            </div>
        </div>
        <ul class="guding">
            <li v-for="(arr, i) in guding" :key="i">
                <a href="javascript:;">{{ arr }}</a>
            </li>
        </ul>
    </main>
</template>

<script setup>
import { computed } from 'vue'
import '@/assets/css/base.css'
import '@/assets/css/index.css'
import '@/assets/shoppingCart/iconfont.css'
import { initCarousel } from '@/assets/js/slideshow.js'
import '@/assets/js/side.js'
import { onMounted } from 'vue'
let imgs = [
    "./images/图层179.png",
    "./images/focus1.jpg",
    "./images/focus2.jpg",
    "./images/focus3.jpg",
    "./images/图层178.png"
]
let slideshow = computed(() => imgs.slice(0, imgs.length - 1))
let bd = [
    { type: "[特惠]", content: "备战开学季 全民半价数码" },
    { type: "[公告]", content: "品优稳占家电购六成份额" },
    { type: "[特惠]", content: "百元中秋全品类礼券限量领" },
    { type: "[公告]", content: "上品优生鲜 想阳澄湖大闸蟹" },
    { type: "[特惠]", content: "每日享折扣优品质游" },
]
let zhong = [
    ["话费", "机票", "电影票", "游戏"],
    ["彩票", "加油卡", "酒店", "火车票"],
    ["众筹", "理财", "礼品卡", "白条"],
]
let guding = ["家用电器", "手机通讯", "电脑办公", "精品家居"]

onMounted(() => {
    // 在组件挂载后初始化轮播
    try {
        initCarousel();
    } catch (e) {
        console.warn('初始化轮播失败：', e);
    }
})
</script>

<style></style>