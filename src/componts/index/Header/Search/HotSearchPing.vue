<template>
    <div class="search_hotwords">
        <SearchPing></SearchPing>
        <WordssPing :hotWordsDataGrandchild="hotWordsDataChild"></WordssPing>
    </div>
</template>
<script setup>
import SearchPing from './SearchPing.vue';
import WordssPing from './WordssPing.vue';
const props = defineProps(['hotWordsDataChild'])
console.log(props);

</script>
<style></style>