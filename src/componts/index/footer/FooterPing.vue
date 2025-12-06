<template>
    <footer>
        <div class="w">
            <FooterService :service="mod_service"></FooterService>
            <FooterHelp :help="mod_help"></FooterHelp>
            <FooterCopyright></FooterCopyright>
        </div>
    </footer>
</template>

<script setup>
import FooterService from './FooterService.vue'
import FooterHelp from './FooterHelp.vue'
import FooterCopyright from './FooterCopyright.vue'
let mod_service = [
    {
        class: "tu1",
        title: "正品保障",
        text: "正品保障，提供发票"
    },
    {
        class: "tu2",
        title: "极速物流",
        text: "急速物流，极速物流"
    },
    {
        class: "tu3",
        title: "无忧售后",
        text: "7天无理由退换货"
    },
    {
        class: "tu4",
        title: "特色服务",
        text: "私人定制家具套餐"
    },
    {
        class: "tu1",
        title: "帮助中心",
        text: "你的购物指南"
    },
]
let mod_help = [
    ["购物指南", "购物流程", "会员介绍", "生活旅行/团购", "常见问题", "大家电", "联系客服"],
    ["配送方式", "上门自提", "211限时达", "配送服务查询", "配送费收取标准", "海外配送"],
    ["支付方式", "货到付款", "在线支付", "分期付款", "邮局汇款", "公司转账"],
    ["售后服务", "售后政策", "价格保护", "退款说明", "返修/退换货", "取消订单"],
    ["特色服务", "夺宝岛", "DIY装机", "延保服务", "品优购E卡", "品优购通信"]
]
</script>

<style></style>