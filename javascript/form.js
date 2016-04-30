$(function() {

    // 確認ボタンが押されたときの処理
    $('#confirm').on('click', function() {

        $('#name2').val($('#name').val());
        $('#email2').val($('#email').val());
        $('#message2').val($('#message').val());

    })

    $('#send').on('click', function() {

        $.ajax({
            type: "POST",
            url: "http://homey.php.xdomain.jp/mailSender.php",
            data: {
                "name" : $('#name2').val(),
                "email" : $('#email2').val(),
                "message" : $('#message2').val()
            },
            dataType: "json",
            success: function(msg) {
                console.log(msg);

                if(msg == true) {
                    alert("データの送信に成功しました。ありがとうございます。");
                    location.reload();
                }
                else {
                    err_alert();
                }
            },
            error: function(e) {
                err_alert();
                console.log(e);
            }

        });
    });

    function err_alert() {
        alert("データの送信に失敗しました。お手数ですが、もう一度送信していただくか、直接メールアドレスに連絡してください。")
    }
});
