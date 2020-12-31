var interval_1,interval_2;
function startTicker1(){
    $('#newsTicker1 li:first').slideUp(function(){
        $(this).appendTo($('#newsTicker1')).slideDown();
    });
}
function startTicker2(){
    $('#newsTicker2 li:first').slideUp(function(){
        $(this).appendTo($('#newsTicker2')).slideDown();
    });
}
function stopTicker1(){
    clearInterval(interval_1);
}
function stopTicker2(){
    clearInterval(interval_2);
}
$(function(){
    interval_1=setInterval(startTicker1,3000);
    interval_2=setInterval(startTicker2,3000);
    $('#newsTicker1').hover(function(){
        stopTicker1();
    },function(){
        interval_1=setInterval(startTicker1,3000);
    });
    $('#newsTicker2').hover(function(){
        stopTicker2();
    },function(){
        interval_2=setInterval(startTicker2,3000);
    });
});