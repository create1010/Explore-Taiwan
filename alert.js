        // 點擊上一頁按鈕時的動作
        document.querySelector('.previous').addEventListener('click', function() {
            // 獲取當前頁面的文件名稱
            var currentPage = location.pathname.split('/').pop().replace('Exp-alert', ''); // 從路徑中取得當前文件名稱並移除 'Exp-alert' 部分
            // 將文件名稱轉換為數字
            var currentPageNumber = parseInt(currentPage);

            // 計算上一頁的文件名稱
            var previousPageNumber = currentPageNumber - 1;
            if (previousPageNumber < 1) { // 如果當前頁面已經是第一頁了，則跳轉到最後一頁
                previousPageNumber = 6; // 假設總共有六頁
            }

            // 跳轉到上一頁
            window.location.href = './Exp-alert' + previousPageNumber + '.html';
        });

        // 點擊下一頁按鈕時的動作
        document.querySelector('.next').addEventListener('click', function() {
            // 獲取當前頁面的文件名稱
            var currentPage = location.pathname.split('/').pop().replace('Exp-alert', ''); // 從路徑中取得當前文件名稱並移除 'Exp-alert' 部分
            // 將文件名稱轉換為數字
            var currentPageNumber = parseInt(currentPage);

            // 計算下一頁的文件名稱
            var nextPageNumber = currentPageNumber + 1;
            if (nextPageNumber > 6) { // 如果當前頁面已經是最後一頁了，則跳轉到第一頁
                nextPageNumber = 1;
            }

            // 跳轉到下一頁
            window.location.href = './Exp-alert' + nextPageNumber + '.html';
        });
        // 獲取返回按鈕元素
            var returnBtn = document.querySelector('.return-btn a');

            // 添加點擊事件監聽器
            returnBtn.addEventListener('click', function(event) {
                // 阻止點擊連結時的預設行為（例如跳轉到另一個頁面）
                event.preventDefault();
                
                // 關閉彈跳視窗
                window.close();
            });