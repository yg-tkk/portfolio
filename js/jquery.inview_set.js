//main h2またはblurクラスがついた要素が画面内にきたら、スタイルblurstyleを適用する
$('main h2, .blur').not('.simple').on('inview', function() {
	$(this).addClass('blurstyle');
});

//upスタイルが画面内にきたら、スタイルupstyleを適用する
$('.up').on('inview', function() {
	$(this).addClass('upstyle');
});

//leftスタイルが画面内にきたら、スタイルleftstyleを適用する
$('.left').on('inview', function() {
	$(this).addClass('leftstyle');
});

//rightスタイルが画面内にきたら、スタイルrightstyleを適用する
$('.right').on('inview', function() {
	$(this).addClass('rightstyle');
});

