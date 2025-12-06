<template>
    <div class="logo">
        <h1>
            <RouterLink to="/" title="品优购商城"></RouterLink>
        </h1>
    </div>
</template>
<script setup>
import '@/assets/css/common.css'
</script>
<style scoped>
.logo h1 a {
    display: block;
    width: 171px;
    height: 61px;
    background-image: url(/images/logo.png);
    /* font-size: 0; */
}
</style>