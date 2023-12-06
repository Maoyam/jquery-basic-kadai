$(function () {
  // 文字色変化ボタンクリック
  $('#change-color').on('click', function(){
    // id"target"の文字色を変える
    $('#target').css('color', 'blue');
  });

  // 文字内容変化ボタンをクリック
  $('#change-text').on('click', function(){
    // id"target"の文字を変える
    $('#target').text('Guten tag!');
  });

  // フェードアウトボタンをクリック
  $('#fade-out').on('click', function(){
    // id"target"の文字をフェードアウトさせる
    $('#target').fadeOut();
  });

    // フェードインボタンをクリック
  $('#fade-in').on('click', function(){
      // id"target"の文字をフェードインさせる
    $('#target').fadeIn();
  });
});