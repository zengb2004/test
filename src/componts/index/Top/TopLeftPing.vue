<template>
    <div class="fl">
        <ul>
            <li>{{ TopLeftChild[0] }}</li>
            <li>
                <a href="javascript:;">{{ TopLeftChild[1] }}</a>
            </li>
            <li>
                <RouterLink to="./registration" class="style_red">{{ TopLeftChild[2] }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['TopLeftChild'])
</script>

<style></style>