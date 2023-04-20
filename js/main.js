'use strict';

// $(function() {
//   var height=$(".header").height();
//   $(".fv-wrapper").css("margin-top"), height + 0;//10pxだけ余裕をもたせる
// });



$(window).on('load', function () {
  // ページのURLを取得
  const url = $(location).attr('href'),
    // headerの高さを取得してそれに30px追加した値をheaderHeightに代入
    headerHeight = $('header').outerHeight() + 70;

  // urlに「#」が含まれていれば
  if (url.indexOf("#") != -1) {
    // urlを#で分割して配列に格納
    const anchor = url.split("#"),
      // 分割した最後の文字列（#◯◯の部分）をtargetに代入
      target = $('#' + anchor[anchor.length - 1]),
      // リンク先の位置からheaderHeightの高さを引いた値をpositionに代入
      position = Math.floor(target.offset().top) - headerHeight;
    // positionの位置に移動
    $("html, body").animate({ scrollTop: position }, 500);
  }
});


var parent = document.querySelectorAll(".global-li1, .global-li2"); //.sub-menu要素を全て取得
var node = [].slice.call(parent, 0); //sub-menuの要素を全て配列に変換している(foreachを使用するために)

node.forEach(function (element) {     //配列から要素を一個ずつ取り出して仮引数elementにいれている
  element.addEventListener("mouseover", function () {  //要素にマウスオーバーしたら
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


// function fadeAnime(){

//   $('.fadeup-item').each(function(){ //fadeUpTriggerというクラス名が
//     var elemPos = $(this).offset().top-50;//要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//     $(this).addClass('fademove');// 画面内に入ったらfadeUpというクラス名を追記
//     }else{
//     $(this).removeClass('fademove');// 画面外に出たらfadeUpというクラス名を外す
//     }
//     });
// }

function fadeAnime() {
  // fadeAnime関数を実行したときの処理
  $('.js-fadeup').each(function () { //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('active-fadeup');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('active-fadeup');// 画面外に出たらfadeUpというクラス名を外す
    }
  });

  $('.js-faderight').each(function () { //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('active-right');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('active-right');// 画面外に出たらfadeUpというクラス名を外す
    }
  });

}
// 画面をスクロールをしたら動かす
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});



// $('.typemove').each(function () {
//   $(this)
//     .children()
//     .addBack()
//     .contents()
//     .each(function () {
//       if (this.nodeType == 3) {
//         $(this).replaceWith(
//           $(this).text().replace(/(\S)/g, "<span>$1</span>")
//         );
//       }
//     });
//   $(this).on('inview', function () {
//     $(this).css({ opacity: 1 });
//     for (var i = 0; i <= $(this).children('span').length; i++) {
//       $(this)
//         .children('span')
//         .eq(i)
//         .delay(200 * i)
//         .animate({ opacity: 1 }, 2000);
//     }
//   });
// });


$(window).on('scroll', function () {
  if ($('.fv-wrapper').height() < $(this).scrollTop()) {
    $('.global').addClass('change-color');
  } else {
    $('.global').removeClass('change-color');
  }
});



$(window).on('load', function() {
  $('body').addClass('appear');
});