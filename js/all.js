var list = document.querySelector('.list')
var pagination = document.querySelector('.pagination')
var btnTop = document.querySelector('.top-btn')
var data = [];
var str = 0;
var pageTotle = 0;
var pageRemain = 0;

var xhrURL = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json';
var xhr = new XMLHttpRequest();
xhr.open('GET', xhrURL,true);

xhr.send(null);

// 載入好資料後再執行
xhr.onload = function(){
    data = JSON.parse(xhr.responseText)
    data = data.result.records;
    init();
}


document.querySelector('.choose').addEventListener('change',updata,false);
document.querySelector('.popular-btns').addEventListener('click',updataBtn,false);

// TOP btn 顯示+效果
window.addEventListener('scroll', btnReveal);
btnTop.addEventListener('click', topscrollTo);




// 使用 change 執行選擇
function updata(e) {
    var select = e.target.value;
    var addtext = '';
    document.querySelector('.list-title').textContent = select
    for (var i = 0; i < data.length; i++) {
        if (select == data[i].Zone) {
            addtext += '<li><div class="card-img" style="background: url('+ data[i].Picture1 +');background-size: cover;background-position-y: center;"><h3 class="card-title">' + data[i].Name + '<span>' + data[i].Zone + '</span></h3></div><div class="info"><p class="card-time"><img src="images/icons_clock.png" alt=""><span>' + data[i].Opentime + '</span></p><p class="card-address"><img src="images/icons_pin.png" alt=""><span>' + data[i].Add + '</span></p><p class="card-tel"><img src="images/icons_phone.png" alt=""><span>' + data[i].Tel + '</span></p><p class="card-tag"><img src="images/icons_tag.png" alt=""><span>' + data[i].Ticketinfo + '</span></p></div></li>';
        }
        list.innerHTML = addtext;
    }
}
// 熱門卡片 a 選擇區
function updataBtn(e) {
    if (e.target.nodeName !== 'A') {
        return;
    }

    var select = e.target.textContent;
    e.preventDefault();
    var addtext = '';
    document.querySelector('.list-title').textContent = select
    for (var i = 0; i < data.length; i++) {
        if (select == data[i].Zone) {
            addtext += '<li><div class="card-img" style="background: url('+ data[i].Picture1 +');background-size: cover;background-position-y: center;"><h3 class="card-title">' + data[i].Name + '<span>' + data[i].Zone + '</span></h3></div><div class="info"><p class="card-time"><img src="images/icons_clock.png" alt=""><span>' + data[i].Opentime + '</span></p><p class="card-address"><img src="images/icons_pin.png" alt=""><span>' + data[i].Add + '</span></p><p class="card-tel"><img src="images/icons_phone.png" alt=""><span>' + data[i].Tel + '</span></p><p class="card-tag"><img src="images/icons_tag.png" alt=""><span>' + data[i].Ticketinfo + '</span></p></div></li>';
        }
        list.innerHTML = addtext;
    }
}



//回到上放按鈕：控制顯示
function btnReveal(){
    if (window.scrollY <= 200) {
        btnTop.classList.remove('btn-none');
    } else {
        btnTop.classList.add('btn-none');
    } 
};
function topscrollTo(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};




// 這邊往下 是測試 未完成 分頁功能

/* document.querySelector('.choose').addEventListener('change',pageNum,false);

function pageNum(e) {
    str = 0;
    for (var i = 0; i < data.length; i++) {
        if (e.target.value == data[i].Zone) {
            str += 1;
        }
    }
    // 一頁4個的頁數 無條件進位
    pageTotle = Math.ceil(str / 4)
    // 餘數
    pageRemain = str - (pageTotle-1)*4

    if (str <= 4) {
        //待做 渲染分頁 並且後面要改出上方的Card渲染資料再存到另外一個變數才能讓分頁渲染
    }
} */

// 這邊往上 是測試 未完成 分頁功能












// 預選 三民區去覆蓋掉HTML內的樣板
function init(e) {
    var select = '三民區';
    var addtext = '';
    document.querySelector('.list-title').textContent = select
    for (var i = 0; i < data.length; i++) {
        if (select == data[i].Zone) {
            addtext += '<li><div class="card-img" style="background: url('+ data[i].Picture1 +');background-size: cover;background-position-y: center;"><h3 class="card-title">' + data[i].Name + '<span>' + data[i].Zone + '</span></h3></div><div class="info"><p class="card-time"><img src="images/icons_clock.png" alt=""><span>' + data[i].Opentime + '</span></p><p class="card-address"><img src="images/icons_pin.png" alt=""><span>' + data[i].Add + '</span></p><p class="card-tel"><img src="images/icons_phone.png" alt=""><span>' + data[i].Tel + '</span></p><p class="card-tag"><img src="images/icons_tag.png" alt=""><span>' + data[i].Ticketinfo + '</span></p></div></li>';
        }
        list.innerHTML = addtext;
    }
}

