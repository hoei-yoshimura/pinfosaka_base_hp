
var process_flg = false;
var end_flg = false;
$(window).bottom({proximity: 0.05});
$(window).on('bottom', function() {
    if (process_flg == false && end_flg == false) {
        var max_page = $("#max_page").text();
        var next_page = $('#next_page').text();
        if (eval(max_page) >= eval(next_page)) {
            $.ajax({
                url: "{LoadItemsPageURL}" + next_page + "{LoadItemsPageURLParams}",
                dataType: 'html',
                beforeSend: function () {
                    process_flg = true;
                    $('#loading').css('display', 'block');
                },
                success: function (data) {
                    $('#mainContent').append(data);
                    next_page = eval(next_page) + 1;
                    $('#next_page').text(next_page);
                },
                complete: function () {
                    process_flg = false;
                    $('#loading').css('display', 'none');
                }
            });
        } else {
            end_flg = true;
        }
    }
});
