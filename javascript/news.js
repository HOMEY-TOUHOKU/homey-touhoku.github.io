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
                const date = `${created.getFullYear()}年${created.getMonth() + 1}月${created.getDate()}日`;

                return `<li><section><h3>${date} ${item.title}</h3>${item.description}</li></section>`;
            }).join(''));
        },
        error: function(e) {
            console.log(e);
        }
    });
});
