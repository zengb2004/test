<template>
    <div class="c-container">
        <div class="w">
            <div class="cart-filter-bar">
                <em>全部商品</em>
            </div>
            <!-- 购物车主要核心区域 -->
            <div class="cart-warp">
                <!-- 头部全选模块 -->
                <div class="cart-thead">
                    <div :class="cartWarp[0].class">
                        <input type="checkbox" name="" id="" class="checkall" />{{ cartWarp[0].name }}
                    </div>
                    <div v-for="item in cartComputed" :class="item.class">{{ item.name }}</div>
                </div>
                <!-- 商品详细模块 -->
                <div class="cart-item-list">
                    <div class="cart-item" v-for="item in imgs">
                        <div class="p-checkbox">
                            <input type="checkbox" name="" id="" class="j-checkbox" />
                        </div>
                        <div class="p-goods">
                            <div class="p-img">
                                <img :src="item.img" alt="" />
                            </div>
                            <div class="p-msg">
                                {{ item.word }}
                            </div>
                        </div>
                        <div class="p-price">{{ item.price }}</div>
                        <div class="p-num">
                            <div class="quantity-form">
                                <a href="javascript:;" class="decrement">-</a>
                                <input type="text" class="itxt" value="1" />
                                <a href="javascript:;" class="increment">+</a>
                            </div>
                        </div>
                        <div class="p-sum">{{ item.sum }}</div>
                        <div class="p-action"><a href="javascript:;">{{ item.delete }}</a></div>
                    </div>
                </div>

                <!-- 结算模块 -->
                <div class="cart-floatbar">
                    <div class="select-all">
                        <input type="checkbox" name="" id="" class="checkall" />全选
                    </div>
                    <div class="operation">
                        <a href="javascript:;" class="remove-batch"> 删除选中的商品</a>
                        <a href="javascript:;" class="clear-all">清理购物车</a>
                    </div>
                    <div class="toolbar-right">
                        <div class="amount-sum">已经选<em>1</em>件商品</div>
                        <div class="price-sum">总价： <em>￥12.60</em></div>
                        <div class="btn-area">去结算</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from "vue";
import '@/assets/css/shoppingCart.css';
import '@/assets/js/shoppingCar.js'
let cartWarp = [
    { class: "t-checkbox", name: "全选" },
    { class: "t-goods", name: "商品" },
    { class: "t-price", name: "单价" },
    { class: "t-num", name: "数量" },
    { class: "t-sum", name: "小计" },
    { class: "t-action", name: "操作" }
];
let imgs = [
    {
        img: '/images/p1.jpg',
        word: '【5本26.8元】经典儿童文学彩图青少版八十天环游地球中学生语文教学大纲',
        price: '￥12.60',
        sum: '￥12.60',
        delete: '删除'
    },
    {
        img: '/images/p2.jpg',
        word: '【2000张贴纸】贴纸书 3-6岁 贴画儿童 贴画书全套12册 贴画 贴纸儿童气',
        price: '￥24.80',
        sum: '￥24.80',
        delete: '删除'
    },
    {
        img: '/images/p3.jpg',
        word: '唐诗三百首+成语故事全2册 一年级课外书 精装注音儿童版 小学生二三年级课外阅读书籍',
        price: '￥29.80',
        sum: '￥29.80',
        delete: '删除'
    }
]
let cartComputed = computed(() => cartWarp.slice(1));
</script>
