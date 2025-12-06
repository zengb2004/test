<template>
    <div class="hotwords">
        <a v-for="(arr, i) in hotWordsDataGrandchild" href="javascript:;" :key="i">{{ arr }}</a>
    </div>
</template>
<script setup>
const props = defineProps(['hotWordsDataGrandchild'])


</script>
<style></style>