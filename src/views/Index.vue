<template>
    <TopPing></TopPing>
    <HeaderPing></HeaderPing>
    <NavPing></NavPing>
    <MainPing></MainPing>
    <RecomPing></RecomPing>
    <LikePing></LikePing>
    <FloorPing v-for="item in title" :title="item"></FloorPing>
    <FooterPing></FooterPing>
</template>

<script setup>
import TopPing from '@/componts/index/Top/TopPing.vue';
import HeaderPing from '@/componts/index/Header/HeaderPing.vue';
import NavPing from '@/componts/index/NavPing.vue';
import MainPing from '@/componts/index/MainPing.vue';
import RecomPing from '@/componts/index/RecomPing.vue'
import LikePing from '@/componts/index/LikePing.vue';
import FloorPing from '@/componts/index/FloorPing.vue';
import FooterPing from '@/componts/index/footer/FooterPing.vue';
let title = ["家用电器", "手机通讯", "电脑办公", "精品家居"]
</script>

<style></style>