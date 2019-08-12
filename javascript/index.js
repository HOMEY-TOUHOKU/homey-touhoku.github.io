$(function() {
  $.ajax({
            type: "GET",
            url: "https://us-central1-homey-touhoku.cloudfunctions.net/blog",
            dataType: "json",
            success: function(data) {

                $('.newsList').html(data.items.map(item => {
                    const created = new Date(item.created);
                    const date = `${created.getFullYear()}年${created.getMonth() + 1}月${created.getDate()}日`;

                    return `<li><a href="/news.html#${item.title}">${date} ${item.title}</a></li>`;
                }).join(''));
            },
            error: function(e) {
                console.log(e);
            }
        });
});
