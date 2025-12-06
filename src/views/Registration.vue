<template>
    <register></register>
    <FooterCopyright></FooterCopyright><!--一个组件想直接用另一个子组件，但是另一个子组件的数据在父组件上-->
</template>
<script setup>
import register from '@/componts/registration/register.vue';
import FooterCopyright from '@/componts/index/footer/FooterCopyright.vue';
</script> 