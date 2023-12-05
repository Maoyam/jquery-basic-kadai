$(function () {
  // btnというclassのボタンをクリックした時
  $('.btn').on('click', function(){
    // テキストボックス内にクリックしました！と表示
    $('.text-box').val('クリックしました！');
  });
});