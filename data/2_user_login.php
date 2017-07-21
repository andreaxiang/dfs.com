<?php
/**
*接收客户端提交的uname和upwd，验证用户名和是否正确，返回'login-succ'或'login-err'
*/

@$n = $_REQUEST['uname'] or die('用户名不能为空');
@$p = $_REQUEST['upwd'] or die('密码不能为空');

require('1_init.php');

$sql = "SELECT uid FROM dfs_user WHERE uname='$n' AND upwd='$p'";
$result = mysqli_query($conn,$sql);

if($result===false){	//SQL语法错误
	echo "sql err";
}else {  //SQL执行成功
	$row = mysqli_fetch_row($result); //抓取一行
	if($row===null){		//能够抓取一行
		echo 'login-err';
	}else {					//无法抓取任何记录
		echo 'login-succ';
	}
}