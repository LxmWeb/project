(function () {
    $("#register").click(function () {
        console.log('12423');
        var pwd = $('#pwd').val();
        var pwd2 = $('#pwd-sure').val();

        if (pwd != pwd2) {
            layer.alert('两次密码不一致');
        }
    });
})($);
