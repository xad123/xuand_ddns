<?php
/**
 *文件描述
 *名称DdnsPodService.php
 *创建于：2022/5/1 15:41
 *创建者：Antonio
 */

namespace app\admin\service;

use think\facade\Config;

class DdnsPodService
{
    protected $Action;
    protected $Version;
    protected $Region;
    public function __construct()
    {
        $this->Action = Config::get('Action');
        $this->Version = Config::get('Version');
        $this->Region = Config::get('Region');

    }

    public function getRecordList()
    {
       print_r($this->Action);die;
    }
}