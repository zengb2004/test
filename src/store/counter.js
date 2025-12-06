import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
    state() {
        return {
            links: [
                "联系我们",
                "联系客服",
                "商家入住",
                "营销中心",
                "手机品优购",
                "友情链接",
                "销售联盟",
                "品优购社区",
                "品优购公益",
                "English Site",
                "Contact U",
            ],
            copyright: [
                "地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400 - 618 - 4000 传真：010 - 82935100 邮箱: zhanghj + itcast.cn<br>京ICP备08001421号京公网安备110108007702",
            ],
        };
    },
});
