$(function() {
$(window).on('scroll load', (e) => {
  // スクロールされた場合
  if(e.type === 'scroll'){
  console.log('scrollイベントが発生しました');
};
  // ロードされた場合
  if(e.type === 'load'){
    console.log('loadイベントが発生しました');
  };
});
});