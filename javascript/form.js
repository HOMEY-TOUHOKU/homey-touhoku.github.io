$(function() {

    // 確認ボタンが押されたときの処理
    $('#confirm').on('click', function() {

        $('#name2').val($('#name').val());
        $('#email2').val($('#email').val());
        $('#message2').val($('#message').val());
    });

    $('#send').on('click', function() {

        $.ajax({
            type: "POST",
            url: "https://8wvww12zeh.execute-api.ap-northeast-1.amazonaws.com/default/send_email",
            data: {
                "name" : $('#name2').val(),
                "email" : $('#email2').val(),
                "message" : $('#message2').val()
            },
            dataType: "json",
            success: function() {
                alert("メッセージの送信に成功しました!");
                location.reload();
            },
            error: function(e) {
                alert("メッセージの送信に失敗しました... 時間をおいてからもう一度送信していただくか、homeytouhoku@gmail.com に直接メールで連絡いただけると嬉しいです。");
                console.log(e);
            }
        });
    });
});
