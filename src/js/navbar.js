$('li, ul').on('click', function() {
    $('li').removeClass('active');
    $(this).addClass('active');
});