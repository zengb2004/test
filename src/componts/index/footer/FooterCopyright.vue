<template>
    <div class="mod_copyright">
        <div class="links">
            <a href="javascript:;" v-for="(item, i) in store.links" :key="i">{{ item }}</a>
        </div>
        <div class="copyright" v-html="store.copyright[0]"></div>
    </div>
</template>
<script setup>
import { useCounterStore } from '@/store/counter';
const store = useCounterStore()
</script>