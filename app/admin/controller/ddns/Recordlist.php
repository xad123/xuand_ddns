<?php

namespace app\admin\controller\ddns;

use app\admin\service\DdnsPodService;
use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;

/**
 * @ControllerAnnotation(title="域名解析记录表")
 */
class Recordlist extends AdminController
{

    use \app\admin\traits\Curd;

    public function __construct(App $app)
    {
        parent::__construct($app);

        $this->model = new \app\admin\model\DdnsRecordlist();
        
    }

    /**
     * @获取域名解析记录
     */
    public function getRecordList()
    {
        dd("12312313");
        //获取域名解析记录信息
//        $record_list = (new DdnsPodService())->getRecordList();

        return json($record_list,'200');

    }
    
}