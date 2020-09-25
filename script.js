$(document).ready(function(){
    // var tab = $('.tab');
    // tab.click(function(){
    //     var target = $(this).attr('data-target');
    //     $('.tab-content').hide();
    //     $('.'+target).show();
    // });

    // var tab = $('.tab');
    // tab.click(function(){
    //     var target = $(this).attr('href');
    //     console.log("эта ссылка ведет на " + target);
    //     $('.content').hide();
    //     $(target).show();
    // });

    // homework

    var tab = $('.tab');
    tab.click(function(){
        var target = $(this).attr('data-target');
        $(".tab").removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.tab-content').hide();
        $('.'+target).show();
    });
});