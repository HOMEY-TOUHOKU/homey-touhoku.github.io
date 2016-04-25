$(function() {
  $.ajax({
            type: "GET",
            url: "http://homey.php.xdomain.jp/news/*",
            dataType: "json",
            success: function(data) {
                console.log('success');
                console.log(data);

                var code = '';

                for(var i = 0; i < data.length; i++) {
                    code += '<li><a href="single.html?id=' + data[i]['news_id'] + '">' + data[i]['created'] + ' ' + data[i]['title'] + '</a></li>';
                }

                if(data.length == 0) {
                    code = '<div class="alert alert-info" role="alert">現在新たなお知らせはありません。</div>';
                }

                $('.newsList').html(code);
            },
            error: function(e) {
                console.log(e);
            }
        });
});
