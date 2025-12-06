export function initCarousel() {
    // 使用更通用的选择器
    var arrowLeft = document.querySelector('.newsflash .left');
    var arrowRight = document.querySelector('.newsflash .right');
    var newsflash = document.querySelector(".newsflash");

    // 添加元素存在性检查
    if (!newsflash || !arrowLeft || !arrowRight) {
        console.warn('轮播图元素未找到，等待重试...');
        setTimeout(initCarousel, 100); // 100ms后重试
        return;
    }

    var newsflashWidth = newsflash.offsetWidth;

    // 清除可能已存在的事件监听器
    var cloneArrowLeft = arrowLeft.cloneNode(true);
    arrowLeft.parentNode.replaceChild(cloneArrowLeft, arrowLeft);
    arrowLeft = cloneArrowLeft;

    var cloneArrowRight = arrowRight.cloneNode(true);
    arrowRight.parentNode.replaceChild(cloneArrowRight, arrowRight);
    arrowRight = cloneArrowRight;

    // 经过盒子显示左右箭头，离开隐藏
    newsflash.addEventListener('mouseenter', function () {
        arrowLeft.style.display = 'block';
        arrowRight.style.display = 'block';
        if (typeof time !== 'undefined') {
            clearInterval(time);
        }
    });

    newsflash.addEventListener('mouseleave', function () {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
        if (typeof time !== 'undefined') {
            clearInterval(time);
        }
        time = setInterval(function () {
            arrowRight.click();
        }, 2000);
    });

    // 动态生成小圆圈
    var ul = newsflash.querySelector('ul');
    var ol = newsflash.querySelector('ol');

    // 清空可能已存在的小圆点
    if (ol) {
        ol.innerHTML = '';
    }

    if (ul && ol) {
        for (var i = 0; i < ul.children.length; i++) {
            var li = document.createElement('li');
            ol.appendChild(li);
            li.setAttribute('index', i);
            // 清除可能已存在的事件监听器
            var cloneLi = li.cloneNode(true);
            li.parentNode.replaceChild(cloneLi, li);
            cloneLi.addEventListener('click', function () {
                for (var j = 0; j < ol.children.length; j++) {
                    ol.children[j].className = '';
                }
                this.className = 'circle';
                var index = this.getAttribute('index');
                picture = parseInt(index);
                circle = parseInt(index);
                animate(ul, -index * newsflashWidth);
            });
        }

        if (ol.children.length > 0) {
            ol.children[0].className = 'circle';
        }

        // 清除可能已存在的克隆节点
        if (ul.children.length > 4) {
            while (ul.children.length > 4) {
                ul.removeChild(ul.lastChild);
            }
        }

        var first = ul.children[0].cloneNode(true);
        ul.appendChild(first);
    }

    // 点击左右鼠标移动图片
    var picture = 0;
    var circle = 0;
    var flag = true;

    // 清除可能已存在的事件监听器
    var cloneArrowLeftClick = arrowLeft.cloneNode(true);
    arrowLeft.parentNode.replaceChild(cloneArrowLeftClick, arrowLeft);
    arrowLeft = cloneArrowLeftClick;

    var cloneArrowRightClick = arrowRight.cloneNode(true);
    arrowRight.parentNode.replaceChild(cloneArrowRightClick, arrowRight);
    arrowRight = cloneArrowRightClick;

    // 点击左箭头
    arrowLeft.addEventListener('click', function () {
        if (flag && ul && ol) {
            flag = false;
            if (picture == 0) {
                picture = ul.children.length - 1;
                ul.style.left = -picture * newsflashWidth + 'px';
            }
            picture--;
            animate(ul, -picture * newsflashWidth, function () {
                flag = true;
            });
            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleReset();
        }
    });

    // 点击右箭头
    arrowRight.addEventListener('click', function () {
        if (flag && ul && ol) {
            flag = false;
            if (picture == ul.children.length - 1) {
                picture = 0;
                ul.style.left = 0;
            }
            picture++;
            animate(ul, -picture * newsflashWidth, function () {
                flag = true;
            });
            circle++;
            circle = circle == ol.children.length ? 0 : circle;
            circleReset();
        }
    });

    // 图片自动播放
    if (typeof time !== 'undefined') {
        clearInterval(time);
    }
    var time = setInterval(function () {
        if (arrowRight) {
            arrowRight.click();
        }
    }, 2000);

    // 封装显示当前小圆点
    function circleReset() {
        if (!ol) return;
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        if (circle >= ol.children.length) {
            circle = 0;
        }
        if (ol.children[circle]) {
            ol.children[circle].className = 'circle';
        }
    }

    // 动画函数
    function animate(obj, target, callback) {
        if (!obj) return;
        clearInterval(obj.time);
        obj.time = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.time);
                if (callback) {
                    callback();
                }
            } else {
                obj.style.left = obj.offsetLeft + step + 'px';
            }
        }, 15);
    }

    return true;
}
// 如果需要，也可以在全局调用 initCarousel()




// function slideshow(){
    
// }