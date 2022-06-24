$('.allBtn').click(function(){
    $('nav').animate({left:0})
});

$('nav button').click(function(){
    $('nav').animate({left:'-100%'})
});


$(window).resize(function(){
    if ($('nav').removeAttr('style'));
});
//navdp script가 적용된 게 있으면 화면이 resize될 때 없애준다.