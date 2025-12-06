<template>
    <div class="mod_service">
        <ul>
            <li v-for="(item, i) in service" :key="i">
                <h5 :class="item.class"></h5>
                <div class="zi">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps(['service'])
</script>