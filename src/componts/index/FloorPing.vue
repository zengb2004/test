<template>
    <div class="floor w">
        <div class="jiadian">
            <div class="box_hd">
                <h3>{{ title }}</h3>
                <div class="tab_list">
                    <ul>
                        <li v-for="(item, i) in tabList" :key="i">
                            <a href="javascript:;">{{ item }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box_bd">
                <div class="tab_content">
                    <div class="tab_list_item1">
                        <ul>
                            <li class="col1">
                                <a href="javascript:;">
                                    <ul>
                                        <li v-for="(item, i) in col1" :key="i">
                                            <a href="javascript:;">{{ item }}</a>
                                        </li>
                                    </ul>
                                    <img :src="'/images/' + tabListItem1[0]" alt="" />
                                </a>
                            </li>
                            <li>
                                <img v-for="(item, i) in middleTabListItems" :src="'/images/' + item" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="box_fr">
                <img :src="'./images/' + tabListItem1[tabListItem1.length - 1]" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['title'])
let tabList = ["热门", "大家电", "生活厨房", "个护健康", "应季电器", "空气/净水", "新奇特", "高端电器"]
let col1 = ["节能补贴", "4k电视", "空气净化器", "IH电饭锅", "滚筒洗衣机", "电热水器"]
let tabListItem1 = [
    "01-电商-主页-gai-恢复的-恢复的_14.jpg",
    "01-电商-主页-gai-恢复的-恢复的_17.jpg",
    "01-电商-主页-gai-恢复的-恢复的_20.jpg",
    "01-电商-主页-gai-恢复的-恢复的_18.jpg",
    "01-电商-主页-gai-恢复的-恢复的_19.jpg",
    "图层119.png"
]
const middleTabListItems = computed(() => tabListItem1.slice(1, tabListItem1.length - 1))
</script>

<style></style>