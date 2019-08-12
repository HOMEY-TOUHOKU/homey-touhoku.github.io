$(function() {
    $.ajax({
        type: "GET",
        url: "https://us-central1-homey-touhoku.cloudfunctions.net/blog",
        dataType: "json",
        success: function(data) {

            $('.newsList').html(data.items.map(item => {
                item.description
                item.link
                const created = new Date(item.created);
                const date = `${created.getFullYear()}-${created.getMonth() + 1}-${created.getDate()}`;
                const date_jp = `${created.getFullYear()}年${created.getMonth() + 1}月${created.getDate()}日`;

                return `<li><section><h3><a href="${item.link}">${item.title}</a></h3><p><time datetime="${date}">${date_jp}</time></p><div class="content">${item.description}</div></li></section>`;
            }).join(''));
        },
        error: function(e) {
            console.log(e);
        }
    });
});
