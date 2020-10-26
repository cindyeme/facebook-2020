$(function () {
    $('#navInput').focus(function () {
        $('#prependText').css("background", "#4d86f7");
    })
    $('#shortcuts').hover(function () {
        $(this).css({ 'background': 'none', 'cursor': 'default' });
        $('#shortcut_text').css({ 'display': 'block' });
    })
    $('#explore').hover(function () {
        $(this).css({
            'background': 'none',
            'cursor': 'default'
        });
    })
    $('#seeMore').hover(function () {
        $(this).css({
            'background': 'none',
            'cursor': 'default',
        });
    })
    // $('header').scrollTop(function () {
    //     $(this).css({'positon': 'fixed', 'z-index': '1'})
    // })
})