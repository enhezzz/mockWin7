/**
 * Created by 105 on 2017/7/21.
 */
/*构造窗口事件对象*/
var manuCode = 1;//操作码开始序列
var manuArr =[];//操作序列
Array.prototype.contains = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}
function WinEve(option) {
    this.clickID = option.clickID;
    this.targetID = option.targetID;
    this.flag = false;
}
WinEve.prototype = {
    "winArr": ["#recycle_windows", "#network_windows", "#desktop", "#Computer_windows", "#recycle_windows", "#network_windows", "#win,#taskbar", "#Computer_go", "#Computer_back", "#computer_r", "#computer_r .D", "#computer_r .F", "#recycle_r .D", "#recycle_r .F", "#startProp_windows", "#network_prop"]
    ,
    // "delMenu" : ["#menuwin"]
    // ,
    // "flag" : false
    // ,
    "init": function () {
        var that = this;
        $(this.clickID).on("click", function (e) {
            // console.log(that.reAdd.children())
            // console.log(that.resetWinStatus)

            if(that.resetWinStatus)
            that.resetWinStatus.length = 0;
                if(that.reAdd && that.flag){
                    $("#computer_r_menu #newDir").off("click");//解除创建文件夹的绑定
                    $("#computer_r_menu #newText").off("click");//解除创建文件的绑定
                    that.add = that.reAdd.clone(true,true);

                    $(that.targetID + "_main").remove();
                    $(that.targetID + "_Content").append(that.newone.init());



                    // that.reAdd = that.reAdd.children().clone(true);

                }
            that.flag = true;
            // if(that.reAdd) {
            //     console.log(that.reAdd)
            //     $(that.targetID + "_main").html("");
            //     that.reAdd.each(function (i,e) {
            //         var alter = $(e).clone(true);
            //         console.log(alter)
            //         $(that.targetID + "_main").append(alter);
            //     })
            // }
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

/*实例几个窗口事件触发*/
var ctrlPanel = new WinEve({"clickID": "#links #ctrlPanel", "targetID": "#control_panel"});
ctrlPanel.init();


var com = new WinEve({"clickID": ".Computer", "targetID": "#Computer_windows"});
com.init();




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



/*
 * 构造窗口内容对象，用于菜单属性
 * */
//将这个module也放入win module中
function MenuProps(option) {
    this.arr = option.arr;
    this.toolMenu = option.toolMenu;
    this.content = option.content;
}
MenuProps.prototype = {
    "ensure": "<button>确认</button>",
    "cancer": "<button>取消</button>",
    "apply": "<button>应用</button>",
    "bindDOM": function () {

        for (var index in this.arr) {

            for (var title in this.arr[index])

                $(this.toolMenu).append(title);
            $(this.content).append(this.arr[index][title]);
        }
    },
    "bindEvent": function () {
        var that = this;
        $(this.toolMenu).children("li").on("click", function () {
            $(that.toolMenu).children("li").each(function (i, e) {

                var target = $(e).data("target");
                $(target).css("display", "none");
            });
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


var pt = new MenuProps({"arr" : prop_taskBar,"toolMenu" : "#props_toolBar","content" : "#props_detail"});
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
        "组织#id": [
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
    // "manuCode" :　2,
    "bindDOM": function () {
        var ul = $("<ul style='z-index: 1;'></ul>");
        ul[0].dataset["code"] = manuCode;
        var left = 0;
        for (var outMenu in this.menuArr) {
            for (var menuName in this.menuArr[outMenu]) {
                // console.log(typeof outMenu)
                // var matRes = menuName.match(/#\S*[^.]$/);
                // // console.log(matRes.search(/./))
                //
                // // var claRes = menuName.match(/.\S*[^.]$/);
                // var id;
                // if(matRes != null) {
                //     if (matRes.length > 0) {
                //         // alert(matRes[0])
                //         if(matRes[0].search(/\./) != -1) {
                //             matRes = matRes[0].substring(0, matRes.indexOf("."));
                //
                //             var temp = matRes;
                //             matRes = [],matRes[0] = temp
                //             console.log(matRes)
                //         }
                //         id = matRes[0].replace(/#/, "");
                //         console.log(id)
                //     }
                //     else id = ""
                // }
                // else id = "";
                // console.log(id)
                // var claRes = menuName.match(/.\S*[^#]$/);
                // // console.log(matRes.search(/./))
                //
                // // var claRes = menuName.match(/.\S*[^.]$/);
                // var cla;
                // if(claRes != null) {
                //     if (claRes.length > 0) {
                //         // alert(matRes[0])
                //         if(claRes[0].search(/\./) != -1) {
                //             claRes = claRes[0].substring(0, claRes.indexOf("."));
                //
                //             var temp = claRes;
                //             claRes = [],claRes[0] = temp
                //             console.log(claRes)
                //         }
                //         cla = claRes[0].replace(/#/, "");
                //         console.log(cla)
                //     }
                //     else cla = ""
                // }
                // else cla = "";
                // console.log(cla)
                // console.log(menuName.match(/\.\S$/))
                var index = menuName.indexOf("#");
                var claInd = menuName.indexOf(".");
                var tempIndex;
                if(index == -1)
                    index = menuName.length;
                if(claInd == -1)
                    claInd = menuName.length;
                tempIndex = index;
                if(claInd < index){
                    tempIndex = claInd;
                }
                var li = $("<li id='"+menuName.substring(index+1,claInd)+"' class='"+menuName.substring(claInd+1)+"'>" + menuName.substring(0,tempIndex) + "</li>");
                    li[0].dataset["code"] = manuCode+"-"+(parseInt(outMenu)+1);
                    li.on("click",function (e) {
                        manuArr.push(this.dataset["code"]);
                        e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
                    });
                if (this.menuArr[outMenu][menuName].length > 0){
                    var u = this.callBackQuery(this.menuArr[outMenu][menuName],li[0].dataset["code"]);
                    u.css("left" , left);
                    left += 64;
                    li.append(u);
                }

                ul.append(li);


            }
        }

        manuCode++;
        return ul;
    },
    "callBackQuery": function (arr,parentCode) {
        var ul = $("<ul></ul>");
        for (var innerMenu in arr) {
            for (var menuName in arr[innerMenu]) {
                var index = menuName.indexOf("#");
                var claInd = menuName.indexOf(".");
                var tempIndex;
                // console.log(index)


                if(claInd == -1) {
                    claInd = menuName.length;
                }
                if(index == -1)
                    index = menuName.length;
                tempIndex = index;
                if(claInd < index){
                    tempIndex = claInd;
                }
                // console.log(menuName.substring(index+1,claInd))
                var li = $("<li id='"+menuName.substring(index+1,claInd)+"' class='"+menuName.substring(claInd+1)+"'>" + "&nbsp&nbsp&nbsp&nbsp&nbsp" + menuName.substring(0,tempIndex) + "</li>");
                    li[0].dataset["code"] = parentCode + "-" + (parseInt(innerMenu) + 1);
                    li.on("click",function (e) {
                    manuArr.push(this.dataset["code"]);
                    e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
                    });
                if (arr[innerMenu][menuName].length > 0) {
                    // console.log(menuName.substring(index+1,claInd))
                    li = $("<li id='"+menuName.substring(index+1,claInd)+"' class='"+menuName.substring(claInd+1)+"'>" + "&nbsp&nbsp&nbsp&nbsp&nbsp" + menuName.substring(0,tempIndex) + "<img src='images/sub_menu.png'' align ='right'/>" + "</li>");
                    li[0].dataset["code"] = parentCode + "-" + (parseInt(innerMenu) + 1);
                    li.on("click",function (e) {
                        manuArr.push(this.dataset["code"]);
                        e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
                    });
                    li.append(this.callBackQuery(arr[innerMenu][menuName],li[0].dataset["code"]));

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
// $("#ControlBaner").after(winmenu.bindDOM())
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
                                      <a href="#" onclick="showmenu(' + this.postfix + ')"><img src="' + title.imgUrl + '" height="16" width="16">  ' + title.name + ' </a>\
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
                                      <a href="#" onclick="showmenu(' + this.postfix + ')"><img src="' + title.imgUrl + '" width="16" height="16">  ' + title.name + ' </a>\
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




/*右侧栏对象构建*/
function RightMenu(id) {
    this.id = id;
    this.saveContainer = [];
}
RightMenu.prototype = {
    "init": function () {
        var that = this;
        var lm = $('<div id="' + this.id.substring(1) + '_main" class="right_main">\
            </div>');
        // 空白处右键单击显示菜单栏
        lm.mousedown(function (ele) {
            if (3 == ele.which) {
                Hidden_menu();
                $('#computer_r_menu').css('left', mouse_x)
                $('#computer_r_menu').css('top', mouse_y);
                $('#computer_r_menu').css('display', 'block');
                $('#computer_r_menu').data("parent",ele.target);
                // console.log(ele.target);
                // document.getElementById("computer_r_menu").dataset["parent"] = ele.target;
            }
            ele.stopPropagation?ele.stopPropagation() : ele.cancelBubble = true;
            // return false;//阻止链接跳转
        });
        /*创建文件夹*/
        $("#computer_r_menu #newDir").on("click",function (e) {
            // console.log(e.target);
            // console.log($("#computer_r_menu").data("parent"));
            var newDir = $('<div class="Current Q Root" style="display: block;background-image: url(images/Folder.png);\
                            background-size : 99px 99px" data-code="3-新建文件夹">\
                                <div class="i">\
                                    <input type="text" value="新建文件夹" readonly>\
                                </div>\
                            </div>').find("input").on("click",function (e) {
                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
            }).end();
            newDir.attr("data-backFlag",true);
            // console.log(outClassName+inClassName)
            $($("#computer_r_menu").data("parent"))
                .append(newDir);
            newDir.find("input").trigger("select");
            // console.log($($("#computer_r_menu").data("parent")));
            winFile($($("#computer_r_menu").data("parent")),newDir,that);
            newDir.find("input").trigger("click");
            manuArr.push(this.dataset["code"]);


            e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
        });
        /*/创建文件夹*/

        /*创建文本文档*/
            $("#computer_r_menu #newText").on("click",function (e) {
                Hidden_menu();
                var newText = $('<div class="Current Q Root" style="display: block;background-image: url(images/txt.png);\
                            background-size : 99px 99px" data-code="4-新建文本文档">\
                                <div class="i">\
                                    <input type="text" value="新建文本文档.txt" readonly>\
                                </div>\
                            </div>').find("input").on("click",function (e) {
                    e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
                }).end();
                $($("#computer_r_menu").data("parent"))
                    .append(newText);
                newText.find("input").trigger("click");
                winFile($($("#computer_r_menu").data("parent")),newText,that);
                newText.find("input").trigger("click");
                manuArr.push(this.dataset["code"]);
                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
            })
        /*/创建文本文档*/

        $(document).on("click",function (e) {//对窗口内的文件夹或文件的取焦和失焦操作

            lm.find(".Q")
                .css("background-color","#fff")
                .find("input")
                .css("background-color","#fff")
                .trigger("blur");
            e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
        });

        $(this.id + "Pane>#left_main>.leftbox").each(function (i, e) {
            var item = $(e).children(".leftbox_title").eq(0).children("a").eq(0);
            var imgurl = item.children("img").eq(0).attr("src"), text = item.text();
            var code;
            if(imgurl == "images/Folder.png"){
                code = 3 + "-" + text.trim();
            }
            if(imgurl == "images/txt.png"){
                code = 4 + "-" + text.trim();
            }
            var bread = $('<div class="Current Q Root" style="display: block;background-image: url(' + imgurl + ');\
                            background-size : 99px 99px" data-code="'+code+'">\
                                <div class="i">\
                                    <input type="text" value="' + text + '" readonly>\
                                </div>\
                            </div>');
            bread.attr("data-backFlag",true);
            bread.on("dblclick",function (e) {
                // alert(1)
                // alert(bread[0].innerHTML)
                $(this).addClass("current");
                $(this).children(".Q").css("display","block");
                that.saveContainer.push($($(this).parent("div")[0]).children(".Q").clone(true));//用于回退或前进
                // console.log($(bread.parent("div")[0]))
                if($(this).attr("data-backFlag") && $(this).hasClass("current")){
                    lm.html($(this).children(".Q"));
                    $(this).attr("data-backFlag" , false);
                }

                $(that.id + " #Computer_back").css("background-position","left top");

                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
            });
            bread.on("click",function (e) {
                $(this).css("background-color","#CCE8FF").siblings().css("background-color","#fff")
                    .children(".i").children("input").css("background-color","#fff");
                $(this).children(".i").children("input").css("background-color","#CCE8FF");
                // alert($(this) .children(".i").children("input")[0].value)
                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
            });
            bread.on("mousedown",function (e) {

                // 如果是右键则选中并且弹出菜单栏
                if (3 == e.which) {
                    Hidden_menu();
                    $('#comSelet_menu').css('left', mouse_x);
                    $('#comSelet_menu').css('top', mouse_y);
                    $('#comSelet_menu').css('display', 'block');
                    $('#comSelet_menu').data("target",e.target);
                }
                $(this).css("background-color","#CCE8FF").siblings().css("background-color","#fff")
                    .children(".i").children("input").css("background-color","#fff");
                $(this).children(".i").children("input").css("background-color","#CCE8FF");
                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
                // return false;//阻止链接跳转
            });
            /*对该内容下的input设置点击事件*/
            bread.children(".i").children("input").on("click",function (e) {
                // e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
                $(this).css("background-color","#fff").removeAttr("readonly").trigger("select");
            })
            .on("keydown",function (e) {
                if(e.keyCode == 13) {
                    // this.blur();

                    this.parentNode.parentNode.dataset["code"] = this.parentNode.parentNode.dataset["code"]
                                                                .charAt(0) + "-" + this.value;
                    manuArr.push(this.parentNode.parentNode.dataset["code"]);
                    $(document).trigger("click");
                }
                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
            });
            if($(e).children(".leftbox_m").eq(0).children().length > 0)
                that.bindDOM($(e).children(".leftbox_m").eq(0), bread,lm);
            lm.append(bread);
        });
        var farToLast = 0;
        var originLength = that.saveContainer.length;
        $(that.id + " #Computer_back").on("click",function () {

            var containLen = that.saveContainer.length;
                if(originLength != containLen){
                    farToLast = 0;
                    originLength = containLen;
                }

            var index = originLength - farToLast -1;
            if(index >= 0) {
                // if(index + 1 < originLength) {
                //     console.log(that.saveContainer[index + 1]);
                //     alert(index+1)
                //     that.saveContainer[index + 1].each(function (i,e) {
                //         $(e).css("display" , "none");
                //     });
                // }
                that.saveContainer[index].each(function (i,e) {
                    if($(e).hasClass("current")){
                        $(e).children(".Q").css("display","none");
                    }
                });
                // that.saveContainer[index].children(".Q").css("display","none");//回退时让子代隐藏
                lm.html(that.saveContainer[index]);
                farToLast++;
                $(that.id + " #Computer_back").css("background-position","left top");
                $(that.id + " #Computer_go").css("background-position","right top");
            }
            else{
                $(that.id + " #Computer_back").css("background-position","left bottom");
            }
        });

        $(that.id + " #Computer_go").on("click",function () {
            var containLen = that.saveContainer.length;
            if(originLength != containLen){
                farToLast = 0;
                originLength = containLen;
            }

            var index = originLength - farToLast -1;
            if(index < originLength ) {
                // if(index + 1 < originLength) {
                //     console.log(that.saveContainer[index + 1]);
                //     alert(index+1)
                //     that.saveContainer[index + 1].each(function (i,e) {
                //         $(e).css("display" , "none");
                //     });
                // }
                console.log(that.saveContainer[index])
                that.saveContainer[index].each(function (i,e) {
                    if($(e).hasClass("current")){
                        $(e).children(".Q").css("display","none");
                    }
                });
                // that.saveContainer[index].children(".Q").css("display","none");//前进时让子代隐藏
                lm.html(that.saveContainer[index]);
                farToLast--;
                $(that.id + " #Computer_go").css("background-position","right top");
            }
            else{
                $(that.id + " #Computer_go").css("background-position","right bottom");
            }
        })
        // lm.find(".Current").each(function (i,e) {
        //     $(e).on("click",function () {
        //         alert(1)
        //         $(e).children(".Current").css("display","block");
        //         lm.html($(e).children(".Current"));
        //     })
        // });
        return lm;
    },
    "bindDOM": function (source, location,sup) {

        var that = this;
        source.children(".leftbox").each(function (i, e) {
            var item = $(e).children(".leftbox_title").eq(0).children("a").eq(0);
            var imgurl = item.children("img").eq(0).attr("src"), text = item.text();
            var code;
            if(imgurl == "images/Folder.png"){
                code = 3 + "-" + text.trim();
            }
            if(imgurl == "images/txt.png"){
                code = 4 + "-" + text.trim();
            }
            var bread = $('<div class="Current Q Root" style="display: none;background-image: url(' + imgurl + ');\
                            background-size:  99px 99px" data-code="'+code+'">\
                                <div class="i">\
                                    <input type="text" value="' + text + '" readonly>\
                                </div>\
                            </div>');
            // function fn() {
            //     alert(2);
            //     bread.children('.Q').css('display','block');
            //     sup.html(bread.children('.Q'));
            // }
            // bread.attr("onclick","fn()")
            // bread.on("dblclick",function () {
            //     alert(2)
            //     bread.children(".Q").css("display","block");
            //
            //    sup.html(bread.children(".Q"));
            // });
                bread[0].setAttribute("data-backFlag",true);
                bread[0].onclick = function (e) {
                    $(this).css("background-color","#CCE8FF")
                        .siblings().css("background-color","#fff")
                        .children(".i").children("input").css("background-color","#fff")
                        .end().end().end().children(".i").children("input").css("background-color","#CCE8FF");
                    if(e.stopPropagation)
                        e.stopPropagation();
                    else
                        e.cancelBubble  = true;
                }
            bread[0].onmousedown = function (e) {

                // 如果是右键则选中并且弹出菜单栏
                if (3 == e.which) {
                    Hidden_menu();
                    $('#comSelet_menu').css('left', mouse_x);
                    $('#comSelet_menu').css('top', mouse_y);
                    $('#comSelet_menu').css('display', 'block');
                    $('#comSelet_menu').data("target",e.target);
                }
                $(this).css("background-color","#CCE8FF").siblings().css("background-color","#fff")
                    .children(".i").children("input").css("background-color","#fff");
                $(this).children(".i").children("input").css("background-color","#CCE8FF");
                if(e.stopPropagation)
                    e.stopPropagation();
                else
                    e.cancelBubble  = true;

                // return false;//阻止链接跳转
            }

                /*该内容内input被点击事件*/

                    bread[0].children[0].children[0].onclick = function (e) {
                        // this.removeAttribute("readonly");
                        // this.style.backgroundColor = "rgb(255, 255, 255)"
                        $(this).css("background-color","#fff").removeAttr("readonly").trigger("select");
                        // if(e.stopPropagation)
                        //     e.stopPropagation();
                        // else
                        //     e.cancelBubble  = true;
                    }
            bread[0].children[0].children[0].onkeydown = function (e) {
                        if(e.keyCode == 13){
                            // this.blur();
                            this.parentNode.parentNode.dataset["code"] = this.parentNode.parentNode.dataset["code"]
                                                                            .charAt(0) + "-" + this.value;
                            manuArr.push(this.parentNode.parentNode.dataset["code"]);
                            // console.log(this.parentNode.parentNode.dataset["code"])
                            $(document).trigger("click");
                            // console.log(this.getAttribute("data-code"))
                        }
                if(e.stopPropagation)
                    e.stopPropagation();
                else
                    e.cancelBubble  = true;
            }
            bread.children(".i").children("input").on("click",function (e) {
                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
                $(this).css("background-color","#fff").removeAttr("readonly").trigger("select");
            });

                bread[0].ondblclick = function (e) {
                    this.className += " current";
                    //为之前的双击对象做标记，为了能去到该对象（待完成）
                    // $(that.saveContainer[that.saveContainer.length -1][1]).append(sup.html());
                    var len = that.saveContainer.length - 1 >=0?that.saveContainer.length - 1 : 0;
                    console.log(len)
                    that.saveContainer[len].each(function (i,e) {
                        // console.log(e.getAttribute("data-backFlag"))
                        // console.log($(e).hasClass("current"))
                        if($(e).hasClass("current") && bread[0].getAttribute("data-backFlag")){
                            // alert(1)
                            $(e).append(sup.html());
                            bread[0].setAttribute("data-backFlag",false);
                        }
                    });
                    that.saveContainer.push($(bread[0].parentNode).children(".Q").clone(true));
                    sup.html("");
                    var c = $(this).children().toArray();
                    console.log(that.saveContainer)

                    c.forEach(function (val,index) {
                        // alert(index);

                                if(val.className == "Current Q Root") {
                                    val.style.display = "block";
                                    sup[0].appendChild(val)
                                }
                    });

                    if(e.stopPropagation)
                        e.stopPropagation();
                    else
                        e.cancelBubble  = true;

                }




            //
            //
            // bread.attr("ondblclick",'$(this).children(".Q").css("display","block");\
            //     $(document.body).find("'+that.id+'_main").eq(0).html($(this).children(".Q"));\
            //     ');
            // bread.attr("onclick",'$(this).css("background-color","#5097C9")\
            //     .siblings().css("background-color","#fff")');






            // console.log(bread)
            if($(e).children(".leftbox_m").eq(0).children().length > 0)
                that.bindDOM($(e).children(".leftbox_m").eq(0), bread,sup);
            location.append(bread);
        });
    }
}
/*/右侧栏对象构建*/
console.log($("<div><a href=''></a></div>").find("a").length);
// var rightMenu = new RightMenu("#netAndInter");
// console.log(rightMenu.init().appendTo($(document.body)))




/*构造窗口对象*/
function Win(option) {
    this.winWidth = option.winWidth  || 700;
    this.winHeight = option.winHeight || 500;
    this.ID = option.ID;
    this.triggerID = option.triggerID;
    this.toolBar = new WinEve({"clickID": option.triggerID, "targetID": option.ID});
    this.winMenu = new WinMenu(option.toolBarItems);
    this.currentLocation = option.currentLocation;
    this.seekLocation = option.seekLocation;
    this.leftMenu = new LeftMenu(option.leftMenuItems,option.ID);
    this.rightMenu = new RightMenu(option.ID);
    this.isSelfDef = option.isSelfDef || false;
    // this.selfDef = option.selfDef;
    // this.menuProps = new MenuProps({"arr" : })
}
Win.prototype = {
    "baseFrame": function () {

        return '<div id="' + this.ID.substring(1) + '" class="moveBar" name="windows" style="	height: '+this.winHeight+'px;' +
            'width: '+this.winWidth+'px;' +
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
            '<input id="'+this.ID.substring(1)+'Input" name="Search_txt" type="text" placeholder="搜索' + this.seekLocation + '" value="" id="Search_txt" onclick="this.select()"/></div>' +
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
        var rm;
        var thisId = this.ID;
        // console.log(this.rightMenu.init())
        $(document.body).append(this.baseFrame());
        //给这类ｉｎｐｕｔ赋予一个操作code
        $(this.ID+"Input")[0].dataset["code"] = manuCode++;
        $(this.ID+"Input").on("focus",function (e) {
            var that = this;
            $(document).on("keydown.winInput",function (e) {
                if(e.keyCode == 13) {
                    // console.log("按下" + e.keyCode);
                    var searchValue = that.value.trim();
                    var searchRes = $(thisId+"_main").find(".i input[value*='"+searchValue+"']")
                                                            .css("color","#FFC939")
                                                            .parent("div").css({    top: "10px",
                                                                                "left": "49px"})
                                                            .removeClass("list-view-in")
                                                            .parent("div").addClass("searchResult")
                                                            .removeClass("list-view-out");
                    manuArr.push($(that)[0].dataset["code"]);
                    // console.log(searchRes)
                    if(searchRes.length != 0) {
                        $(thisId + "_main").empty().html(searchRes);
                        searchRes.css("display","block");
                    }
                    // console.log(searchValue)
                }
                e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
            });
            e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
        });
        $(this.ID+"Input").on("blur",function (e) {
            $(document).off(".winInput");
            e.stopPropagation?e.stopPropagation() : e.cancelBubble = true;
        })
        $(this.ID+"Input").on("blur",function () {
            $(document).off(".winInput");
        });
        if(this.isSelfDef){//如果有自定义内容
            $(this.ID + "_Content").append()
        // '<ul id="props_toolBar">\
        //         <!--    <li data-target="prop_startBar">任务栏</li>\
        //         <li data-target="prop_startMenu">开始菜单</li>\
        //         <li data-target="prop_toolBar">工具栏</li>-->\
        //         </ul>\
        //         <div id="props_detail">\
        //         <!--<div id="prop_startMenu"></div>\
        //         <div id="prop_toolBar"></div>-->\
        //         </div>\
        //         <div style="position: absolute;bottom: 0;right: 0;">\
        //         <button>确认</button>\
        //         <button>取消</button>\
        //         <button>应用</button>\
        //         </div>'
        }
        else {
            $(this.ID + "_Content")
                .append(this.winMenu.bindDOM())
                .append(this.leftMenu.init())
                .append(rm = this.rightMenu.init());

            // console.log(rm.children())
            this.toolBar.reAdd = rm.clone(true, true);
            this.toolBar.newone = this.rightMenu;//窗口文件持续性有待解决
            this.toolBar.resetWinStatus = this.rightMenu.saveContainer;
        }

        // $(this.ID + "_Content ul li").on("mouseenter",function () {
        //     $(this).children("ul").css("display","block");
        // }).on("mouseleave",function () {
        //     $(this.ID+"_Content ul ul").css("display","none");
        // });

        this.toolBar.init();

    }
}
/*!/构造窗口对象*/


/*测试窗口实例*/
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
                    "布局.sd": [                  //一定是先#后.可以只写#或.    分别表示id和类（只写.的时候有点bug，但不影响效果）
                        {
                            "菜单栏": [
                                        {
                                        "a": [
                                                {
                                                "dsad" : []
                                                },
                                                {
                                                "asdas" : []
                                                 }
                                        ]
                                    }
                            ]
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
            "编辑": [
                {
                    "撤销删除（U）": []
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
                            "菜单栏": [
                                        {
                                            "a": [
                                                    {
                                                        "dsad" : []
                                                    },
                                                    {
                                                        "asdas" : []
                                                    }
                                            ]
                                        }
                            ]
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
        },{
            "查看" : [
                {
                    "列表形式#asd.listView"　: []
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
                                "content" : []}]
        },

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
                             "content" : []}]}]}]
        },
        {
            "title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
            "content" : [   {"title" : {"imgUrl" : "images/Folder.png","name" : "收藏夹"},
                "content" : []}]
        }
    ]
});
win.bindDOM();
// console.log(WinEve.prototype.winArr)
// new WinEvent({"clickID" : "#word","targetID" : "#netAndInter"}).init()


// var ctrlPanel = new WinEvent({"clickID" : "#links #ctrlPanel","targetID" : "#control_panel"});
// ctrlPanel.init();


// console.log($(".menu18").clone().last().appendTo($(document.body)))


// /*桌面图标移动*/
//     function logoMove(clickSrc,targetSrc) {
//         $(clickSrc).on("mousedown",function (e) {
//             e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
//             var preXaxis = e.clientX;
//             var preYaxis = e.clientY;
//             $(this).click(function (e) {
//                 Folder_Record_Computer = ""
//                 if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
//                     $('#Folder').css("border", "");
//                 }
//                 else {
//                 }
//
//
//                 var nowXaxis = e.clientX, nowYaxis = e.clientY;
//
//                 system_work = "#Computer_windows";
//                 // alert(preYaxis == nowYaxis && preXaxis == nowXaxis)
//                 if(preYaxis == nowYaxis && preXaxis == nowXaxis) {
//                     $(targetSrc).css("display", "block");
//                     $(targetSrc).css("z-index", "100");
//                 }
//                 else{
//                     $(targetSrc).css("display", "none");
//                     $(targetSrc).css("z-index", "50");
//                 }
//                 e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
//             });
//         });
//     }
// /*/桌面图标移动*/
// var myarr = [5,1,2,3,4];
// console.log(myarr.shift())
// console.log(window)