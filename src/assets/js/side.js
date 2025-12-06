window.addEventListener('load', function () {
    initSide();
});

function initSide() {
    var guding = document.querySelector('.guding');
    if (!guding) return;

    var gudingLis = Array.from(guding.querySelectorAll('li'));
    var floors = Array.from(document.querySelectorAll('.floor>div'));
    var flag = true;

    function getOffsetTop(el) {
        return el.getBoundingClientRect().top + window.pageYOffset;
    }

    function smoothScrollTo(target) {
        return new Promise(function (resolve) {
            var start = window.pageYOffset;
            var distance = target - start;
            var duration = 500;
            var startTime = null;

            function step(time) {
                if (!startTime) startTime = time;
                var progress = Math.min((time - startTime) / duration, 1);
                var ease = 0.5 - Math.cos(progress * Math.PI) / 2; // easeInOut
                window.scrollTo(0, start + distance * ease);
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    resolve();
                }
            }
            requestAnimationFrame(step);
        });
    }

    gudingLis.forEach(function (li, idx) {
        li.addEventListener('click', function () {
            if (!floors[idx]) return;
            flag = false;
            console.log('点击了第' + idx + '个楼层按钮');
            var move = getOffsetTop(floors[idx]);
            smoothScrollTo(move).then(function () {
                flag = true;
            });
            gudingLis.forEach(function (n) { n.classList.remove('bgce'); });
            li.classList.add('bgce');
            var a = li.querySelector('a');
            if (a) a.style.color = '#ffffff';
            gudingLis.forEach(function (n, i) {
                if (n !== li) {
                    var aa = n.querySelector('a');
                    if (aa) aa.style.color = '#666666';
                }
            });
        });
    });

    function toggleTool() {
        var like = document.querySelector('.like');
        if (!like) return;
        var likeMove = getOffsetTop(like);
        if (window.pageYOffset >= likeMove) {
            guding.style.display = 'block';
        } else {
            guding.style.display = 'none';
        }
    }

    document.addEventListener('scroll', function () {
        toggleTool();
        if (flag) {
            floors.forEach(function (ele, i) {
                if (window.pageYOffset >= getOffsetTop(ele)) {
                    gudingLis.forEach(function (n) { n.classList.remove('bgce'); });
                    var cur = gudingLis[i];
                    if (cur) cur.classList.add('bgce');
                    gudingLis.forEach(function (n, idx) {
                        var aa = n.querySelector('a');
                        if (aa) aa.style.color = (idx === i ? '#ffffff' : '#666666');
                    });
                }
            });
        }
    });

    // initial check
    toggleTool();
}