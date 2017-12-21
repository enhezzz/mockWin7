/**
 * Created by 105 on 2017/7/21.
 */
/*构造窗口事件对象*/
function WinEve(option) {
    this.clickID = option.clickID;
    this.targetID = option.targetID;

}
WinEve.prototype = {
    "winArr": ["#recycle_windows", "#network_windows", "#desktop", "#Computer_windows", "#recycle_windows", "#network_windows", "#win,#taskbar", "#Computer_go", "#Computer_back", "#computer_r", "#computer_r .D", "#computer_r .F", "#recycle_r .D", "#recycle_r .F", "#startProp_windows", "#network_prop"]
    ,
    // "delMenu" : ["#menuwin"]
    // ,
    "init": function () {
        var that = this;
        $(this.clickID).on("click", function (e) {


            Folder_Record_network == "";
            if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
                $('#Folder').css("border", "");
            }
            else {
            }
            system_work = that.targetID;
            $(that.winArr).each(function (i, e) {
                $(e).css("z-index", "50")
            })
            // $(that.delMenu).each(function (i,e) {
            //     $(e).css("display" , "none");
            // })
            Hidden_menu();

            $(that.targetID).css("z-index", "100");
            $(that.targetID).css("display", "block");
            moveWin($(that.targetID + ">div").eq(0).attr("id"));

            e.stopPropagation();
        });
        $(this.targetID).on("click", function (e) {

            system_work = that.targetID;
            $(that.winArr).each(function (i, e) {
                $(e).css("z-index", "50")
            })


            $(that.targetID).css("z-index", "100");

            // $(that.delMenu).each(function (i,e) {
            //     $(e).css("display" , "none");
            // })
            Hidden_menu();
        });
        this.pushWinArr();

    },
    "pushWinArr": function () {
        if (!this.winArr.contains(this.targetID))
            this.winArr.push(this.targetID);
    },
    "bindDOM": function () {
        /*-------------------------------------------*/
    }
}


var ctrlPanel = new WinEve({"clickID": "#links #ctrlPanel", "targetID": "#control_panel"});
ctrlPanel.init();


var com = new WinEve({"clickID": ".Computer", "targetID": "#Computer_windows"});
com.init();

// 这个才是需要手动添加的弹出窗口的key


var selfStyle = new WinEve({"clickID": "#Titl_b", "targetID": "#theme_bg"});
selfStyle.init();

var userCstyle = new WinEve({"clickID": "#Titl_u", "targetID": "#userCounter"});
userCstyle.init();

var userC_1_style = new WinEve({"clickID": "#Titl_u1", "targetID": "#userCounter_1"});
userC_1_style.init();

var user_passWrd_style = new WinEve({"clickID": ".OpenPasWd", "targetID": "#user_passWrd"});
user_passWrd_style.init();

var user_pWd_del_style = new WinEve({"clickID": "#DelPasWd", "targetID": "#user_pWd_del"});
user_pWd_del_style.init();

var user_gaiTu_style = new WinEve({"clickID": ".ChangeTu", "targetID": "#user_gaiTu"});
user_gaiTu_style.init();

// 这个才是需要手动添加的弹出窗口的key

/*
 * 构造窗口内容对象，用于菜单属性
 * */
var props_content = document.querySelector(".Content");
var props_title = document.querySelector("#props_toolBar");
var props_det = document.querySelector("#props_detail");
function MenuProps(arr) {
    this.arr = arr;
}
MenuProps.prototype = {
    "ensure": "<button>确认</button>",
    "cancer": "<button>取消</button>",
    "apply": "<button>应用</button>",
    "bindDOM": function () {

        for (var index in this.arr) {

            for (var title in this.arr[index])

                $(props_title).append(title);
            $(props_det).append(this.arr[index][title]);
        }
    },
    "bindEvent": function () {
        $(props_title).children("li").on("click", function () {

            $(props_title).children("li").each(function (i, e) {

                var target = $(e).data("target");
                $(target).css("display", "none");
            })
            $($(this).data("target")).css("display", "block");

        })
    }
}
var prop_taskBar = [{
    '<li data-target="#prop_taskBar">任务栏</li>': '<div id="prop_taskBar">' +
    '<div id="taskBar_style">' +
    '<span id="title">任务栏外观</span>' +
    '<div style="width: 100%;">' +
    '<input type="checkbox" name="" id="" checked>锁定任务栏<br/>' +
    '<input type="checkbox" name="" id="">自动隐藏任务栏<br/>' +
    '<input type="checkbox" name="" id="">使用小图标<br/>' +
    '任务栏上的位置：' +
    '<select name="" id="">' +
    '    <option value="">左侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
    '<option value="">右侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
    '<option value="">底侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
    '<option value="">顶侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
    '</select><br>' +
    '任务栏按钮：' +
    '<select name="" id="">' +
    '    <option value="">始终合并、隐藏标签</option>' +
    '<option value="">当任务栏被占满是合并</option>' +
    '    <option value="">从不合并</option>' +
    '   </select>' +
    '   </div>' +
    '    </div>' +
    '    <div id="notification_area">' +
    '    <span>通知区域</span>' +
    '    <div>' +
    '    <span>自定义通知区域中出现的图标和通知。</span>' +
    '&nbsp;' +
    '&nbsp;' +
    '&nbsp;' +
    '&nbsp;' +
    '&nbsp;' +
    '&nbsp;' +
    '<button>自定义...</button>' +
    '</div>' +
    '</div>' +
    '<div id="view_desktop"><span>使用Aero Peek预览桌面</span>' +
    '<div><span>当你将鼠标移动到任务栏的末端的“显示桌面”按钮时，会暂时查看桌面。</span>' + '<br>' +
    '<input type="checkbox" id="sel" checked><label for="sel">使用Areo Peek预览桌面</label>' +
    '</div></div>' + '<a href="">如何定义该任务栏？</a>' +
    '    </div>'
}
    ,
    {
        '<li data-target="#prop_startMenu">开始菜单</li>': '<div id="prop_startMenu" style="display: none;">' +
        '<div id="process">' +
        '<span id="title">要自定义链接、图标和开始菜单中的<br>外观和行为，请单击“自定义”。</span>' + '<button>自定义...</button>' +
        '<br><br>' + '电源按钮操作：' + '<select name="" id="">' +
        '<option value="">关机</option>' +
        '<option value="">注销</option>' +
        '<option value="">切换用户</option></select>' +
        '</div>' +
        '    <div id="privacy">' +
        '    <span>隐私</span>' +
        '    <div>' +
        '<input type="checkbox" checked>' +
        '存储并显示最近在开始菜单中打开的程序<br>' +
        '<input type="checkbox" checked>' +
        '存储并显示最近在开始菜单和任务栏打开的项目' +
        '</div>' +
        '</div>' +
        '<a href="">如何更改开始菜单的外观？</a>' +
        '    </div>'
    }
    ,
    {
        '<li data-target="#prop_toolBar">工具栏</li>': '<div id="prop_toolBar" style="display: none;">' +
        '<p>选择要添加到任务栏的工具栏</p>' +
        '<div id="toolBar_style">' +
        '<div style="width: 100%;">' +
        '<input type="checkbox" name="" id="">地址<br/>' +
        '<input type="checkbox" name="" id="">链接<br/>' +
        '<input type="checkbox" name="" id="">TBC输入面板<br/>' +
        '<input type="checkbox" name="" id="">LuDaShi<br>' +
        '<input type="checkbox" name="" id="">桌面' +
        '   </div>' +
        '    </div>' +
        '    </div>'
    }
];


var pt = new MenuProps(prop_taskBar);
// for(var title in prop_taskBar){
//     alert(title)
// $(props_title).appendChild(title);
// $(props_det).appendChild(this.props_detail[title]);

pt.bindDOM();
pt.bindEvent();


/*/构造对象结束*/

/*刷新操作开始*/
$("#Display_menu #refresh").on("click", function () {
    window.location.reload();
})


/*控制面板內容设置高度*/
var allHeight = 0;
$("#ControlBaner").children().each(function (i, e) {

    allHeight += $(this).height();

})
$("#ControlBaner").css("height", allHeight / 2 + "px");
/*-----------------------------*/





/*构造主题对象*/
function Theme(theme) {
    this.desktopBg = theme.desktopBg;
    this.winColor = theme.winColor;
    this.voice = theme.voice;
    this.prot_program = theme.prot_program;
}
Theme.prototype = {}
/*/构造主题对象*/


/*构造窗口菜单对象*/
var arr = [
    {
        "组织": [
            {
                "剪切": []
            },
            {
                "复制": []
            },
            {
                "粘贴": []
            },
            {
                "布局": [
                    {
                        "菜单栏": [{
                            "a": [{
                                "dsad" : []
                            },{
                                "asdas" : []
                            }]
                        }]
                        // {
                        //     "asda" : []
                        // }]
                    },
                    {
                        "细节窗格": []
                    },
                    {
                        "预览窗格": []
                    }
                ]
            }
        ]
    }
];

// ------测试用------

function WinMenu(menuArr) {
    this.menuArr = menuArr;
}
WinMenu.prototype = {


    "bindDOM": function () {
        var ul = $("<ul style='z-index: 1;'></ul>");
        var left = 0;
        for (var outMenu in this.menuArr) {
            for (var menuName in this.menuArr[outMenu]) {

                var li = $("<li>" + menuName + "</li>");

                if (this.menuArr[outMenu][menuName].length > 0){
                    var u = this.callBackQuery(this.menuArr[outMenu][menuName]);
                    u.css("left" , left);
                    left += 64;
                    li.append(u);
                }

                ul.append(li);


            }
        }


        return ul;
    },
    "callBackQuery": function (arr) {
        var ul = $("<ul></ul>");
        for (var innerMenu in arr) {
            for (var menuName in arr[innerMenu]) {
                var li = $("<li>" + "&nbsp&nbsp&nbsp&nbsp&nbsp" + menuName + "</li>");

                if (arr[innerMenu][menuName].length > 0) {
                    li = $("<li>" + "&nbsp&nbsp&nbsp&nbsp&nbsp" + menuName + "<img src='../images/sub_menu.png'' align ='right'/>" + "</li>");
                    li.append(this.callBackQuery(arr[innerMenu][menuName]));

                }
                ul.append(li);

            }


        }
        var ulHeight = 0;
        ul.children("li").each(function (i, e) {

            ulHeight += 26;
        });

        ul.css("height", ulHeight);
        return ul;
    }
}

var winmenu = new WinMenu(arr);
$("#ControlBaner").after(winmenu.bindDOM())
/*/构造窗口菜单对象*/
// var json = {"啊" : 4};
// alert(json.啊)



/*窗口左侧手风琴菜单*/
function LeftMenu(menuArr,id) {
    this.menuArr = menuArr;
    this.id = id;
}
var a = [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []}];
LeftMenu.prototype = {
    "postfix" : 13
    ,
    // "idPost" : 1
    // ,
    "init" : function () {
        var leftFrame =$('<div id="'+this.id.substring(1)+'Pane" class="navigation_pane">\
            <div id="left_main" class="left_main"></div>\
            </div>');
        // $(this.id).append(leftFrame);

        for(var menuObj in this.menuArr) {
            // console.log(menuObj)
            if (!isNaN(menuObj)) {
                var title = this.menuArr[menuObj].title;

                //  var test =   $(' <img src=" '+title.imgUrl+' ">');
                // var test = $('<img src="'+title.imgUrl+'" '+' align ="left" height="16" width="16" />');


                var node = $('<div class="leftblankline"></div>\
                               <div class="leftbox">\
                                <div class="leftbox_t"></div>\
                                   <div class="leftbox_title">\
                                      <a href="#" onclick="showmenu(' + this.postfix + ')"><img src="' + title.imgUrl + '">  ' + title.name + ' </a>\
                                   </div>\
                                        <div class="leftbox_m menu' + this.postfix + '" style="padding-left: 17px;">\
                                        </div>\
                          </div>');

                // console.log(node)
                // var node = $('<div class="leftblankline"></div>\
                //     <div class="leftbox">\
                //         <div class="leftbox_t"></div>\
                //             <div class="leftbox_title">\
                //                 <a href="#" onclick="showmenu('+this.postfix+')">\
                //     <img src="'+title.imgUrl+'" '+' align ="left" height="16" width="16" />'+title.name+'</a>\
                //                 </div>\
                //                     <div class="leftbox_m menu"'+this.postfix +'></div></div>');

                leftFrame.find("#left_main").append(node);

                if (this.menuArr[menuObj].content.length > 0) {
                    this.bindDOM(leftFrame.find(".menu"+this.postfix), this.menuArr[menuObj].content);
                }
                else this.postfix++;

            }

        }
        // console.log(leftFrame)
        /*前面的按数组对象写，然后对于触发对象另构建一个类（对象是一个键值对）*/
        return leftFrame;



    },
    "bindDOM" : function (jqueryNode,arr) {
        this.postfix++;
        for(var menuObj in arr){
            if(!isNaN(menuObj)) {
                var title = arr[menuObj].title;

                var node = $('<div class="leftblankline"></div>\
                               <div class="leftbox">\
                                <div class="leftbox_t"></div>\
                                   <div class="leftbox_title">\
                                      <a href="#" onclick="showmenu(' + this.postfix + ')"><img src="' + title.imgUrl + '">  ' + title.name + ' </a>\
                                   </div>\
                                        <div class="leftbox_m menu' + this.postfix + '" style="padding-left: 17px">\
                                        </div>\
                          </div>');

                jqueryNode.append(node);

                if (arr[menuObj].content.length > 0) {
                    this.bindDOM(jqueryNode.find(".menu"+this.postfix), arr[menuObj].content);
                }
                else this.postfix++;
            }
        }

    }
}
/*/窗口左侧手风琴菜单*/


/*左侧手风琴菜单测试*/
// var lf  = new LeftMenu([{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//     "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},
//         {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
//             "content" : []}]},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
//     "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//         "content" : []},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
//         "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},
//             {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []}]}]}]}]);
// $(document.body).append(lf.init());
//
// for(var item in Array.prototype ){
//     console.log(item)
// }
// console.log(Array.prototype)

/*窗口右侧对象*/







/*构造窗口对象*/
function Win(option) {
    this.ID = option.ID;
    this.triggerID = option.triggerID;
    this.toolBar = new WinEve({"clickID": option.triggerID, "targetID": option.ID});
    this.winMenu = new WinMenu(option.toolBarItems)
    this.currentLocation = option.currentLocation;
    this.seekLocation = option.seekLocation;
    this.leftMenu = new LeftMenu(option.leftMenuItems,option.ID);

}
Win.prototype = {
    "baseFrame": function () {
        return '<div id="' + this.ID.substring(1) + '" class="moveBar" name="windows" style="	height: 500px;' +
            'width: 700px;' +
            'display: none;' +
            'position: absolute;' +
            'top: 140px;' +
            'left: 140px;">' +
            '<div id="' + this.ID.substring(1) + '_banner" style="cursor: default;' +
            'width: 100%;' +
            'height: 30px;' +
            'z-index: 999;"></div>' +
            '<div class="windows_lt"></div>' +
            '<div class="windows_rt"></div>' +
            '<div class="windows_lb"></div>' +
            '<div class="windows_rb"></div>' +
            '<div class="windows_shadow"></div>' +

            '<div class="Goback">' +
            '<ul>' +
            '<li id="Computer_back"></li>' +
            '<li id="Computer_go"></li>' +
            '</ul></div>' +
            '<div class="address_bar"><input name="address_txt" type="text" value="' + this.currentLocation + '" id="address_txt" /></div>' +
            '<div class="Search_bar">' +
            '<input name="Search_txt" type="text" value="搜索' + this.seekLocation + '" id="Search_txt" /></div>' +

            '<div id="' + this.ID.substring(1) + '_Content" class="Content">' + '</div>' + '<div class="onbutton">' +
            '<ul>' +
            '<li class="Minimization" onclick="min(this)"><a href="#"></a></li>' +
            ' <li class="Reduction" onclick="Reduction(this)"><a href="#"></a></li>' +
            ' <li class="Close" onclick="Close(this)"><a href="#"></a></li>' +
            ' </ul>' +
            ' </div>'
    }

    ,
    "bindDOM": function () {


        $(document.body).append(this.baseFrame());
        $(this.ID + "_Content").append(this.winMenu.bindDOM()).append(this.leftMenu.init());
        // $(this.ID + "_Content ul li").on("mouseenter",function () {
        //     $(this).children("ul").css("display","block");
        // }).on("mouseleave",function () {
        //     $(this.ID+"_Content ul ul").css("display","none");
        // });

        this.toolBar.init();

    }
}
/*!/构造窗口对象*/

var win = new Win({
    "triggerID": "#word", "ID": "#netAndInter", "currentLocation": "网络和internet", "seekLocation": "网络和internet",
    "toolBarItems": [
        {
            "组织": [
                {
                    "剪切": []
                },
                {
                    "复制": []
                },
                {
                    "粘贴": []
                },
                {
                    "布局": [
                        {
                            "菜单栏": [{
                                "a": [{
                                    "dsad" : []
                                },{
                                    "asdas" : []
                                }]
                            }]
                            // {
                            //     "asda" : []
                            // }]
                        },
                        {
                            "细节窗格": []
                        },
                        {
                            "预览窗格": []
                        }
                    ]
                }
            ]
        }, {
            "组织": [
                {
                    "剪切": []
                },
                {
                    "复制": []
                },
                {
                    "粘贴": []
                },
                {
                    "布局": [
                        {
                            "菜单栏": [{
                                "a": [{
                                    "dsad" : []
                                },{
                                    "asdas" : []
                                }]
                            }]
                            // {
                            //     "asda" : []
                            // }]
                        },
                        {
                            "细节窗格": []
                        },
                        {
                            "预览窗格": []
                        }
                    ]
                }
            ]
        }
    ],
    "leftMenuItems" : [
        {   "title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
            "content" : [   {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                            "content" : [   {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                                            "content" : []},
                                         {  "title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                                            "content" : []}]},
                            {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
                                "content" : []}]},

        {   "title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
            "content" : [   {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                             "content" : []},
                            {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
                             "content" : [  {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                                             "content" : []},
                            {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                             "content" : [  {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                                             "content" : []},
                            {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
                             "content" : []}]}]}]}]
});
win.bindDOM();
// console.log(WinEve.prototype.winArr)
// new WinEvent({"clickID" : "#word","targetID" : "#netAndInter"}).init()


// var ctrlPanel = new WinEvent({"clickID" : "#links #ctrlPanel","targetID" : "#control_panel"});
// ctrlPanel.init();


// console.log($(".menu18").clone().last().appendTo($(document.body)))
console.log(("确定支付  ￥7.63".replace(/\D/g,"")).toFixed(2)
)


/*右侧栏对象构建*/
function RightMenu(id) {
    this.id = id;
}
RightMenu.prototype = {
    "init" : function () {
        $(this.id+"Pane>#left_main>.leftbox").each(function (i,e) {
            var item = $(e).find("a");
            var img = item.children("img"),text = item.text();

        })
    },
    "bindDOM" : function () {

    }
}
/*/右侧栏对象构建*/


