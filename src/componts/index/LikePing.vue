<template>
    <div class="like w">
        <div class="like1">
            <h4><a href="javascript:;">猜你喜欢</a></h4>
            <h6>换一批</h6>
        </div>
        <div class="like2">
            <ul>
                <li v-for="(item, i) in like2" :key="i">
                    <!-- item包含每个like2下的元素-->
                    <div class="photo">
                        <img :src="'./images/' + item.image" alt="" />
                    </div>
                    <p v-html="item.text"></p>
                    <h3 v-html="'￥' + item.price + '.00'"></h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
let like2 = [
    {
        image: "图层152.png",
        text: "阳光美包新款单肩包女 包时尚子母包四件套女",
        price: "116",
    },
    {
        image: "图层153.png",
        text: "爱仕达30CM炒锅不粘 锅NWG8330E电磁炉炒",
        price: "99",
    },
    {
        image: "图层154.png",
        text: "捷波朗<br>(jabra)BOOSI劲步",
        price: "245",
    },
    {
        image: "图层156.png",
        text: "欧普<br>JYLZ08面板灯平板灯铝",
        price: "238",
    },
    {
        image: "图层158.png",
        text: "三星<br>(G5500)移动联",
        price: "649",
    },
    {
        image: "图层159.png",
        text: "韩国所望<br>紧致湿润精华露400ml",
        price: "649",
    },
]
</script>

<style></style>