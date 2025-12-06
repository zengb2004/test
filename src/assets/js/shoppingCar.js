document.addEventListener('DOMContentLoaded', function () {
    // Helper to select multiple
    function $all(selector, root = document) {
        return Array.from(root.querySelectorAll(selector));
    }

    // 全选 / 反选
    $all('.checkall').forEach(function (chk) {
        chk.addEventListener('change', function () {
            var checked = this.checked;
            $all('.j-checkbox, .checkall').forEach(function (el) { el.checked = checked; });
        });
    });

    // 单个复选框改变时，更新全选框
    $all('.j-checkbox').forEach(function (cb) {
        cb.addEventListener('change', function () {
            var total = $all('.j-checkbox').length;
            var checked = $all('.j-checkbox:checked').length;
            $all('.checkall').forEach(function (el) { el.checked = (checked === total); });
        });

        // 点击复选框切换行背景
        cb.addEventListener('click', function () {
            var cartItem = this.closest('.cart-item');
            if (cartItem) cartItem.classList.toggle('check-cart-item');
        });
    });

    // 全选时加/移除行背景
    $all('.checkall').forEach(function (chk) {
        chk.addEventListener('click', function () {
            if (this.checked) {
                $all('.cart-item').forEach(function (ci) { ci.classList.add('check-cart-item'); });
            } else {
                $all('.cart-item').forEach(function (ci) { ci.classList.remove('check-cart-item'); });
            }
        });
    });

    // 删除单个商品
    $all('.p-action a').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var cartItem = this.closest('.cart-item');
            if (cartItem) cartItem.remove();
            getSum();
        });
    });

    // 全部删除
    $all('.clear-all').forEach(function (btn) {
        btn.addEventListener('click', function () {
            $all('.cart-item').forEach(function (ci) { ci.remove(); });
            getSum();
        });
    });

    // 删除选中的商品
    $all('.remove-batch').forEach(function (btn) {
        btn.addEventListener('click', function () {
            $all('.j-checkbox:checked').forEach(function (cb) {
                var item = cb.closest('.cart-item');
                if (item) item.remove();
            });
            getSum();
        });
    });

    // 增加数量
    $all('.increment').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var itxt = this.closest('.p-num')?.querySelector('.itxt');
            if (!itxt) return;
            var n = parseInt(itxt.value) || 0;
            n++;
            itxt.value = n;
            var cart = this.closest('.cart-item');
            var pEl = cart?.querySelector('.p-price');
            var sumEl = cart?.querySelector('.p-sum');
            var p = 0;
            if (pEl) p = parseFloat((pEl.textContent || '').replace(/^\D+/, '')) || 0;
            if (sumEl) sumEl.textContent = '￥' + (p * n).toFixed(2);
            getSum();
        });
    });

    // 减少数量
    $all('.decrement').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var itxt = this.closest('.p-num')?.querySelector('.itxt');
            if (!itxt) return;
            var n = parseInt(itxt.value) || 0;
            if (n <= 1) return;
            n--;
            itxt.value = n;
            var cart = this.closest('.cart-item');
            var pEl = cart?.querySelector('.p-price');
            var sumEl = cart?.querySelector('.p-sum');
            var p = 0;
            if (pEl) p = parseFloat((pEl.textContent || '').replace(/^\D+/, '')) || 0;
            if (sumEl) sumEl.textContent = '￥' + (p * n).toFixed(2);
            getSum();
        });
    });

    // 用户直接修改数量
    $all('.itxt').forEach(function (input) {
        input.addEventListener('change', function () {
            var n = parseInt(this.value) || 0;
            var cart = this.closest('.cart-item');
            var pEl = cart?.querySelector('.p-price');
            var sumEl = cart?.querySelector('.p-sum');
            var p = 0;
            if (pEl) p = parseFloat((pEl.textContent || '').replace(/^\D+/, '')) || 0;
            if (sumEl) sumEl.textContent = '￥' + (p * n).toFixed(2);
            getSum();
        });
    });

    // 计算总数和总价
    getSum();
    function getSum() {
        var count = 0;
        var money = 0;
        $all('.itxt').forEach(function (ele) { count += parseInt(ele.value) || 0; });
        var amountEl = document.querySelector('.amount-sum em');
        if (amountEl) amountEl.textContent = count;
        $all('.p-sum').forEach(function (ele) {
            var num = parseFloat((ele.textContent || '').replace(/^\D+/, '')) || 0;
            money += num;
        });
        var priceEl = document.querySelector('.price-sum em');
        if (priceEl) priceEl.textContent = '￥' + money.toFixed(2);
    }
});