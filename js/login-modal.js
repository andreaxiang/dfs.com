//原生JS实现模态登录框
let modal = document.querySelector("#dialog-overlay"),
    dialog = document.querySelector("#dialog-box"),
    btLogin = document.querySelector("#btLogin"),
    enterLogin = document.querySelector("#enterLogin"),
    btSubmit = document.querySelector("#btSubmit");

//点击“登录”按钮，显示出“登录模态框”
btLogin.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
    dialog.style.display = "block";
};

enterLogin.onclick = function () {
    modal.style.display = "block";
    dialog.style.display = "block";
};

//点击模态框本身，隐藏“登录模态框”
modal.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "none";
    dialog.style.display = "none";
};

//点击“提交登录”按钮，发起异步AJAX请求，验证登录信息
btSubmit.onclick = function(){
    var n = uname.value;
    var p = upwd.value;
    /**提交异步请求消息**/
    //1
    var xhr = new XMLHttpRequest();
    //2
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===200){ //响应完成且成功
                doResponse(xhr);
            }else {
                alert('响应完成但有问题');
            }
        }
    }
    //3
    xhr.open('GET','2_user_login.php?uname='+n+'&upwd='+p, true);
    //4
    xhr.send(null);

    function doResponse(xhr){
        console.log('开始处理响应消息');
        if(xhr.responseText==='login-err'){
            loginMsg.style.color = 'red';
            loginMsg.innerHTML = '用户名或密码有误';
        }else if(xhr.responseText==='login-succ'){
            modal.style.display = 'none';
            dialog.style.display = "none";
            welcome.innerHTML = '欢迎回来：'+ n;
        }else {
            alert('不可识别的错误消息！');
        }
    }
}
