<template>
    <div class="fr">
        <ul>
            <li v-for="(arr, i) in TopRightChild" class="iconfont icon-shanglajiantou" :key="i">{{ arr }}</li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['TopRightChild'])
</script>

<style></style>