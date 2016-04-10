$(function() {
  $.ajax({
            type: "GET",
            url: "http://homey.php.xdomain.jp/news/*",
            dataType: "json",
            success: function(msg) {
                console.log('success');
                console.log(msg);
            },
            error: function(e) {
                console.log(e);
            }
        });
});