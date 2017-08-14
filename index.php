<?php
 header('Content-Type:text/html;charset=utf-8');


if(array_key_exists("PATH_INFO",$_SERVER)){

     $path = $_SERVER["PATH_INFO"];   //获取到的是地址栏index.php后面的字符串
     //截取字符串
     $path = substr($path,1);   //把index.php之后的/截取到最后
     $arr = explode('/',$path);
     //根据数组的长度 判断字符串的拼接
     if(count($arr) == 2){
         $path = '/views'.$path;
     }else if(count($arr) == 1){
         $path = '/views'.'/dashboard/'.$path;
     }
}else{
    $path = '/views/dashboard/index';
}

 //$path = $_SERVER["PATH_INFO"];   //获取到的是地址栏index.php后面的字符串

 include $path.".html";    //字符串的拼接

?>