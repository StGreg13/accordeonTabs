$(document).ready(function(){
    var tab = $('.tab');
    tab.click(function(){
        var target = $(this).attr('data-target');
        $('.tab-content').hide();
        $('.'+target).show();
    });

    // var tab = $('.tab');
    // tab.click(function(){
    //     var target = $(this).attr('href');
    //     console.log("эта ссылка ведет на " + target);
    //     $('.content').hide();
    //     $(target).show();
    // });
});