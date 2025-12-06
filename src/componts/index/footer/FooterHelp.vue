<template>
    <div class="mod_help">
        <dl v-for="(item, i) in help" :key="i">
            <dt>
                <a href="javascript:;">{{ item[0] }}</a>
            </dt>
            <dd v-for="(text, i) in item.slice(1)" :key="i">{{ text }}</dd>
        </dl>
        <dl>
            <dt>帮助中心</dt>
            <dd><img src="/images/wx_cz.jpg" alt="" /></dd>
            <dd>品优购客户端</dd>
        </dl>
    </div>
</template>
<script setup>
const props = defineProps(['help'])
</script>