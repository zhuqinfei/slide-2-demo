let n
初始化()
setInterval(() => {

    makeLeave(getImage(n))//第一个选择器单引号改成上顿号
        .one('transitionend', function (e) {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))//第一个选择器单引号改成上顿号
    n += 1
}, 3000)


function getImage(n) {
    return $(`.images>img:nth-child(${x(n)})`)
}
function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    } //1 2 3
    return n
}

function 初始化() {
    n = 1
    $('.images>img:nth-child(1)').addClass('current').siblings().addClass('enter')
}
function makeCurrent($node) {
    $node.removeClass('leave enter').addClass('current')
}
function makeLeave($node) {
    $node.removeClass('current enter').addClass('leave')
    return $node   //经典之处
}
function makeEnter($node) {
    $node.removeClass('current leave').addClass('enter')
}

