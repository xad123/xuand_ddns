define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'ddns.record_list/index',
        add_url: 'ddns.record_list/add',
        edit_url: 'ddns.record_list/edit',
        delete_url: 'ddns.record_list/delete',
        export_url: 'ddns.record_list/export',
        modify_url: 'ddns.record_list/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},                    {field: 'id', title: '序号'},                    {field: 'name', title: '域名'},                    {field: 'punyCode', title: 'punycode编码后的域名'},                    {field: 'grade', title: '域名的等级'},                    {field: 'owner', title: '域名所有者的邮箱账号'},                    {field: 'ext_status', title: '域名扩展状态信息：notexist、dnserror、“”/域名为注册、DNS设置错误、正常'},                    {field: 'ttl', title: '域名下的解析记录默认的TTL值'},                    {field: 'min_ttl', title: '当前域名允许的最小的TTL'},                    {field: 'dnspod_ns', title: '域名应该设置的NS地址'},                    {field: 'status', title: '域名的状态：enable、pause、spam、lock/正常、暂停解析、已被封禁、已锁定', templet: ea.table.switch},                    {field: 'q_project_id', title: '域名所在项目的id'},                    {field: 'create_time', title: '添加时间'},                    {width: 250, title: '操作', templet: ea.table.tool},
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});