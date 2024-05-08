// 當螢幕寬度小於 390 時執行
function toggleStructure() {
    var screenWidth = window.innerWidth;
    var areaUl = document.querySelector('.area');
    var areaSelect = document.querySelector('.area-wrap select');

    if (screenWidth < 390) {
        // 隱藏 <ul>，顯示 <select>
        areaUl.style.display = 'none';
        if (!areaSelect) {
            areaSelect = document.createElement('select');
            areaSelect.classList.add('area-select');
            areaUl.parentNode.insertBefore(areaSelect, areaUl.nextSibling);

            // 將每個 <li> 內容添加到 <select> 中作為選項
            var liElements = areaUl.getElementsByTagName('li');
            for (var i = 0; i < liElements.length; i++) {
                var option = document.createElement('option');
                option.text = liElements[i].textContent;
                areaSelect.add(option);
            }
        }
    } else {
        // 如果螢幕寬度不小於 390，則顯示 <ul>，隱藏 <select>
        areaUl.style.display = 'flex';
        if (areaSelect) {
            areaSelect.parentNode.removeChild(areaSelect);
        }
    }
}

// 當文檔加載完成和視窗大小變化時，調用 toggleStructure 函數
document.addEventListener('DOMContentLoaded', toggleStructure);
window.addEventListener('resize', toggleStructure);

document.addEventListener('DOMContentLoaded', function() {
    const areaLinks = document.querySelectorAll('.food .area-wrap .area li a');
    const foodContent = document.getElementById('food-content');

});
