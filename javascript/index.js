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
                    code += '<li><a href="single.html?id=' + data[i]['id'] + '">' + data[i]['created'] + ' ' + data[i]['title'] + '</a></li>';
                }

                $('.newsList').html(code);
            },
            error: function(e) {
                console.log(e);
            }
        });
});