//ヘッダー背景変化
$(function() {
  //var imgHeight = $('.hero').outerHeight(); 画像の高さを取得。これがイベント発火位置になる。
  var imgHeight = 1;
  var header = $('.header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < imgHeight) {
      //メインビジュアル内にいるので、クラスを外す。
      header.removeClass('transform');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      header.addClass('transform');
    }
  });
});


//レスポンシブ用ヘッダー背景変化
$(function() {
  //var imgHeight = $('.hero').outerHeight(); 画像の高さを取得。これがイベント発火位置になる。
  var imgHeight = 1;
  var header = $('.res-header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < imgHeight) {
      //メインビジュアル内にいるので、クラスを外す。
      header.removeClass('transform');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      header.addClass('transform');
    }
  });
});

//スクロールによるスライドイン
$(function() {
  var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
  var slideContsRect = []; // 要素の位置を入れるための配列
  var slideContsTop = []; // 要素の位置を入れるための配列
  var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
  var windowH = window.innerHeight; // ウィンドウの高さを取得
  var remainder = 80; // ちょっとはみ出させる部分
  // 要素の位置を取得
  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }
  // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
  window.addEventListener('resize', function() {
    windowH = window.innerHeight;
  });
  // スクロールされたら
  window.addEventListener('scroll', function() {
    // スクロール位置を取得
    windowY = window.pageYOffset;

    for (var i = 0; i < slideConts.length; i++) {
      // 要素が画面の下端にかかったら
      if (windowY > slideContsTop[i] - windowH + remainder) {
        // .showを付与
        slideConts[i].classList.add('show');
      } else {
        // 逆に.showを削除
        slideConts[i].classList.remove('show');
      }
    }
  });
});

//フェードイン
$(function() {
  $(window).scroll(function() {
    $(".fadein").each(function() {
      var b = $(this).offset().top;
      var a = $(window).scrollTop();
      var c = $(window).height();
      if (a > b - c + 230) {
        $(this).addClass("scrollin")
      }
    })
  })
});


//マーカーアニメーション
$(function() {
  $(window).scroll(function() {
    $(".marker-animation").each(function() {
      var b = $(this).offset().top;
      var a = $(window).scrollTop();
      var c = $(window).height();
      if (a > b - c + 250) {
        $(this).addClass("active")
      }
    })
  })
});

//ボタンスクロール
$(function() {
  $("a[href^=#]").click(function() {
    var c = 400;
    var b = $(this).attr("href");
    var d = $(b == "#" || b == "" ? "html" : b);
    var a = d.offset().top;
    $("body,html").animate({
      scrollTop: a
    }, c, "swing");
    return false
  })
});

//入力チェック

$(function() {
  $('input:submit[id="btn_submit"]').click(function() {
    if (!input_check()) {
      return false
    }
  })
});
function input_check() {
  var b = true;
  $("#name").removeClass("inp_error");
  $("#mailaddress").removeClass("inp_error");
  $("#tel").removeClass("inp_error");
  $("#remarks").removeClass("inp_error");
  $("#name_error").empty();
  $("#mailaddress_error").empty();
  $("#tel_error").empty();
  $("#remarks_error").empty();
  var d = $("#name").val();
  var a = $("#mailaddress").val();
  var c = $("#tel").val().replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi, "");
  var e = $("#remarks").val();
  if (d == "") {
    $("#name_error").html("名前を入力して下さい");
    $("#name").addClass("inp_error");
    b = false
  } else {
    if (d.length > 25) {
      $("#name_error").html("25字以内で入力して下さい");
      $("#name").addClass("inp_error");
      b = false
    }
  }
  if (a == "") {
    $("#mailaddress_error").html("メールアドレスを入力して下さい");
    $("#mailaddress").addClass("inp_error");
    b = false
  } else {
    if (!a.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      $("#mailaddress_error").html("正しい入力ではありません");
      $("#mailaddress").addClass("inp_error");
      b = false
    } else {
      if (a.length > 255) {
        $("#mailaddress_error").html("正しい入力ではありません");
        $("#mailaddress").addClass("inp_error");
        b = false
      }
    }
  }
  if (c == "") {
    $("#tel_error").html("電話番号を入力して下さい");
    $("#tel").addClass("inp_error");
    b = false
  } else {
    if ((!c.match(/^[0-9]+$/)) || (c.length < 10)) {
      $("#tel_error").html("正しい入力ではありません");
      $("#tel").addClass("inp_error");
      b = false
    }
  }
  if (e == "") {
    $("#remarks_error").html("問い合わせ内容を入力して下さい");
    $("#remarks").addClass("inp_error");
    b = false
  } else {
    if (e.match(/[<(.*)>.*<\/\1>]/)) {
      $("#remarks_error").html(" HTML and URL is prohibited.");
      $("#remarks").addClass("inp_error");
      b = false
    } else {
      if (e.match(/^[ 　\r\n\t]*$/)) {
        $("#remarks_error").html("正しい入力ではありません");
        $("#remarks").addClass("inp_error");
        b = false
      }
    }
  }
}
