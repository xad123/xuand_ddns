<?php
/**
 *文件描述
 *名称ddns.php
 *创建于：2022/5/1 16:09
 *创建者：Antonio
 */
use think\facade\Route;

Route::rule('ddns/getlist','Recordlist/getRecordList','get');
