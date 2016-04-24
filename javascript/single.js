$(function() {

  var id = getQueryString();

  // idが数字だったら、true
  if(isFinite(id)) {
    return false;
  }

  $.ajax({
    type: "GET",
    url: "http://homey.php.xdomain.jp/news/" + id,
    dataType: "json",
    success: function(data) {
        console.log('success');
        console.log(data);

        var code = '';

        for(var i = 0; i < data.length; i++) {
            code += '<li><a href="single.html?id=' + data[i]['id'] + '">' + data[i]['created'] + ' ' + data[i]['content'] + '</a></li>';
        }

        $('.newsList').html(code);
    },
    error: function(e) {
        console.log(e);
    }
});
});

/*
    urlのoptionから値を取得する関数
    参考サイト : http://so-zou.jp/web-app/tech/programming/javascript/sample/get.htm
*/

function getQueryString()
{
    var result = {};
    if( 1 < window.location.search.length )
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = window.location.search.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }
    return result;
}
