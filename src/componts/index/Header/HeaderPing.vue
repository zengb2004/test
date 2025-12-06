<template>
    <header class="header w">
        <LogoPing></LogoPing>
        <HotSearchPing :hotWordsDataChild="hotWordsData"></HotSearchPing>
        <ShopCarPing></ShopCarPing>
    </header>
</template>
<script setup>
import LogoPing from './LogoPing.vue';
import HotSearchPing from './Search/HotSearchPing.vue';
import ShopCarPing from './ShopCarPing.vue';
let hotWordsData = [
    "优惠购首发",
    "亿元优惠",
    "9.9团购",
    "美满99减30",
    "办公用品",
    "电脑",
    "通信"
]
</script>
<style></style>