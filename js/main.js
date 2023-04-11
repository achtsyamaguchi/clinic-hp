'use strict';

var parent = document.querySelectorAll(".global-li1, .global-li2"); //.sub-menu要素を全て取得
  var node = [].slice.call(parent, 0); //sub-menuの要素を全て配列に変換している(foreachを使用するために)

  node.forEach(function (element) {     //配列から要素を一個ずつ取り出して仮引数elementにいれている
    element.addEventListener("mouseover",function () {  //要素にマウスオーバーしたら
        element.querySelector(".sub-menu").classList.add("active"); //sub-menuにactiveクラスを付与
      },
      // false
    );
    element.addEventListener("mouseout", function () {  //マウスアウトしたら
        element.querySelector(".sub-menu").classList.remove("active");  //要素からクラスを外す
      },
      // false
    );
  });

  // ham----------------------------
  const hum = document.querySelector('.hum');
  const nav = document.querySelector('.global-nav');

  hum.addEventListener('click', function () {
    if (hum.classList.contains('open')) {
      hum.classList.remove('open');
    } else {
      hum.classList.add('open');
    }

    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    } else {
      nav.classList.add('active');
    }
  });