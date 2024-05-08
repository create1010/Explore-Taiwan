$(document).ready(function() {
    $('.menu').click(function() {
        $('.Sub-navigation').toggleClass('cas');
    });
});

// document.getElementById('img1').forEach(function(element) {
//     element.addEventListener('click', function() {
//         window.open('./Exp-alert1.html', 'Experience-alert1', 'width=600,height=600');
//     });
// });

// 取得所有具有相同 class 的元素
var cardImgs = document.querySelectorAll('.card');

// 使用迴圈為每個元素添加事件監聽器
cardImgs.forEach(function(element, index) {
    element.addEventListener('click', function() {
        // 根據元素的索引(index)來決定要打開的彈跳視窗
        window.open('./Exp-alert' + (index + 1) + '.html', 'Experience-alert-' + (index + 1), 'width=800,height=600');

    });
});

