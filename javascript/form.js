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
            url: "",
            dataType: "json",
            success: function(msg) {
                alert("データの送信に成功しました。ありがとうございます。");
                location.reload();
            },
            error: function(e) {
                alert("データの送信に失敗しました。お手数ですが、もう一度送信していただくか、直接私たちのメールアドレスに連絡してください。")
            }

        });

    });
});
