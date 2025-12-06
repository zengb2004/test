<template>
    <div class="recom w">
        <div class="hd"><img :src="'./images/' + papgImgs[0]" alt="" /></div>
        <div class="bd">
            <ul>
                <li v-for="(item, i) in papgImgs.slice(1)" :key="i">
                    <img :src="'./images/' + item" :alt="item" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
let papgImgs = [
    "01-电商-主页-gai-恢复的-恢复的_03.jpg",
    "01-电商-主页-gai-恢复的-恢复的_05.jpg",
    "01-电商-主页-gai-恢复的-恢复的_06.jpg",
    "01-电商-主页-gai-恢复的-恢复的_07.jpg",
    "01-电商-主页-gai-恢复的-恢复的_08.jpg",
]
</script>

<style></style>