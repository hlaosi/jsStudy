jQuery.accordion = jQuery.fn.accordion = function (a) {

    var totleli = $(this).find('li').length;
    var allw = $(this).width();
    var everyliw = allw / totleli;

    $(this).find('li').css('width', everyliw);

    for (var i = 0; i < totleli; i++) {
        $($(this).find('li')[i]).css('background-color', a.colors[i])
    }

    var minwidth = a.minwidth;
    if (minwidth >= 100) {
        minwidth = 100
    } else if (minwidth <= 50) {
        minwidth = 50
    }else{
        minwidth = 100
    }
    var dowidth = allw - (totleli - 1) * minwidth;
    
    $(this).find('li').on('mouseenter', function () {
        $(this).stop(true).animate({ width: dowidth }).siblings().stop(true).animate({ width: minwidth })
    })
    $(this).find('li').on('mouseleave', function () {
        $(this).parent().find('li').stop(true).animate({ width: allw / totleli })
    })




}
