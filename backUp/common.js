var mouse_x = "";
var mouse_y = "";
var Folder_Record_Computer = "";
var Folder_Record_recycle = "";
var Folder_Record_network = "";
var system_work = "";
var Selected_id = "";
var recycle_Selected_id = ""
var Shear_file = "";
var copy_file = "";
var Locking_focus = "";
var a_i = 30;
var p = 20;
var Trace_ad = 0;
var zsccc = ""
var tArray = new Array();   //先声明一维
for (var k = 0; k < a_i; k++) { //一维长度为i,i为变量，可以根据实际情况改变
    tArray[k] = new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；
    for (var j = 0; j < p; j++) { //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
        tArray[k][j] = ""; //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
    }
}
var Trace = new Array();   //先声明一维
for (var k = 0; k < 20; k++) { //一维长度为i,i为变量，可以根据实际情况改变
    Trace[k] = new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；
}
var ex_files = new Array();　//创建一个数组
var ex_files = new Array([11]);
//扩展名类型
ex_files[0] = "txt";
ex_files[1] = "txt";
ex_files[2] = "rar";
ex_files[3] = "xls";
ex_files[4] = "xlsx";
ex_files[5] = "pptx";
ex_files[6] = "ppt";
ex_files[7] = "doc";
ex_files[8] = "bfc";
ex_files[9] = "txt";
ex_files[10] = "txt";
var types_size = 10;


Trace[0] = "Root";
var Current_address = "Root";
var Before_address = ""
var next_address = ""
tArray[0][1] = "Root_c";
tArray[0][2] = "Root";
tArray[0][3] = "C盘";
tArray[0][4] = "Q";
tArray[0][5] = "2014-8-10";
tArray[0][6] = "2014-8-10";
tArray[0][7] = "2014-8-10";
tArray[0][8] = "12GB";
tArray[0][9] = "8GB";
tArray[0][10] = "Windows";
tArray[0][11] = "none";

tArray[1][1] = "Root_d";
tArray[1][2] = "Root";
tArray[1][3] = "D盘";
tArray[1][4] = "Q";
tArray[1][5] = "2014-8-10";
tArray[1][6] = "2014-8-10";
tArray[1][7] = "2014-8-10";
tArray[1][8] = "12GB";
tArray[1][9] = "8GB";
tArray[1][10] = "Windows";
tArray[1][11] = "block";

tArray[2][1] = "Root_e";
tArray[2][2] = "Root";
tArray[2][3] = "E盘";
tArray[2][4] = "Q";
tArray[2][5] = "2014-8-10";
tArray[2][6] = "2014-8-10";
tArray[2][7] = "2014-8-10";
tArray[2][8] = "12GB";
tArray[2][9] = "8GB";
tArray[2][10] = "Windows";
tArray[2][11] = "block";


tArray[3][1] = "c1";
tArray[3][2] = "Root_c";
tArray[3][3] = "cc";
tArray[3][4] = "D";
tArray[3][5] = "2014-8-10";
tArray[3][6] = "2014-8-10";
tArray[3][7] = "2014-8-10";
tArray[3][8] = "12GB";
tArray[3][9] = "8GB";
tArray[3][10] = "Windows";
tArray[3][11] = "block";

tArray[4][1] = "E1";
tArray[4][2] = "d1";
tArray[4][3] = "ee";
tArray[4][4] = "D";
tArray[4][5] = "2014-8-10";
tArray[4][6] = "2014-8-10";
tArray[4][7] = "2014-8-10";
tArray[4][8] = "12GB";
tArray[4][9] = "8GB";
tArray[4][10] = "Windows";
tArray[4][11] = "block";

tArray[5][1] = "d1";
tArray[5][2] = "Root_d";
tArray[5][3] = "dd";
tArray[5][4] = "D";
tArray[5][5] = "2014-8-10";
tArray[5][6] = "2014-8-10";
tArray[5][7] = "2014-8-10";
tArray[5][8] = "12GB";
tArray[5][9] = "8GB";
tArray[5][10] = "Windows";
tArray[5][11] = "block";

tArray[6][1] = "dd1";
tArray[6][2] = "d1";
tArray[6][3] = "d三级目录";
tArray[6][4] = "D";
tArray[6][5] = "2014-8-10";
tArray[6][6] = "2014-8-10";
tArray[6][7] = "2014-8-10";
tArray[6][8] = "12GB";
tArray[6][9] = "8GB";
tArray[6][10] = "Windows";
tArray[6][11] = "block";

tArray[7][1] = "dd2";
tArray[7][2] = "dd1";
tArray[7][3] = "d四级目录";
tArray[7][4] = "D";
tArray[7][5] = "2014-8-10";
tArray[7][6] = "2014-8-10";
tArray[7][7] = "2014-8-10";
tArray[7][8] = "12GB";
tArray[7][9] = "8GB";
tArray[7][10] = "Windows";
tArray[7][11] = "block";

tArray[8][1] = "d2";
tArray[8][2] = "Root_d";
tArray[8][3] = "d的第二个文件夹";
tArray[8][4] = "D del";
tArray[8][5] = "2014-8-10";
tArray[8][6] = "2014-8-10";
tArray[8][7] = "2014-8-10";
tArray[8][8] = "12GB";
tArray[8][9] = "8GB";
tArray[8][10] = "Windows";
tArray[8][11] = "del";

tArray[9][1] = "d3";
tArray[9][2] = "Root_d";
tArray[9][3] = "测试文件.txt";
tArray[9][4] = "F";
tArray[9][5] = "2014-8-10";
tArray[9][6] = "2014-8-10";
tArray[9][7] = "2014-8-10";
tArray[9][8] = "12GB";
tArray[9][9] = "8GB";
tArray[9][10] = "Windows";
tArray[9][11] = "block";

var data_size = 9;

//alert(tArray[180][2]);
//取扩展名
function Looking_EX(EX_name) {

    var name_EX = EX_name.substring(EX_name.indexOf("."), EX_name.length);
    if (name_EX == EX_name) {
        return "no EX";
    } else {
        if (Looking_EX(name_EX.substring(1, name_EX.length)) == "no EX") {
            return name_EX.substring(1, name_EX.length);
        } else {
            return Looking_EX(name_EX.substring(1, name_EX.length));
        }
    }
}
//判断扩展名是否已知
function Existing_types(e) {
    for (var d = 0; d <= types_size; d++) {
        if (e.toUpperCase() == ex_files[d].toUpperCase()) {
            return ex_files[d];
            break;
        }
    }
    return "General"
}

//下级复制


function Copy_sub(e, bu) {
    //alert("hello");
    for (var x = 0; x <= data_size; x++) {
        if (tArray[x][2] == e) {
            //alert(x+tArray[x][2]);
            data_size = data_size + 1;
            tArray[data_size][2] = bu;
            tArray[data_size][3] = tArray[x][3];
            tArray[data_size][4] = tArray[x][4];
            tArray[data_size][5] = tArray[x][5];
            tArray[data_size][6] = tArray[x][6];
            tArray[data_size][7] = tArray[x][7];
            tArray[data_size][8] = tArray[x][8];
            tArray[data_size][9] = tArray[x][9];
            tArray[data_size][10] = tArray[x][10];
            tArray[data_size][11] = tArray[x][11];
            if (tArray[data_size][4] == "F") {
                EX_name = Existing_types(Looking_EX(tArray[data_size][3]));
            }
            if (tArray[data_size][4] != "F") {
                EX_name = "";
            }
//alert(EX_name);

            $("#" + tArray[data_size][1]).attr('className', EX_name + ' Current ' + tArray[data_size][4] + " " + tArray[data_size][2]);

            $("#Na" + tArray[data_size][1]).val(tArray[data_size][3]);
            $("#computer_r ." + Current_address).css("display", "block");

//在回收站里建立相同驱动器、文件夹、文件 id名字前+re_

            $("#re_" + tArray[data_size][1]).attr('className', EX_name + ' Current ' + tArray[data_size][4] + " " + tArray[data_size][2]);

            $("#re_Na" + tArray[data_size][1]).val(tArray[data_size][3]);

            $("#re_" + tArray[data_size][1]).append('<div class="Selected" ></div>');
            $("#re_" + tArray[data_size][1]).css("display", "none");

            $("#computer_r .del").css("display", "none");
            $("#computer_r .Eliminate").css("display", "none");
            $("#recycle_r .del").css("display", "block");
            ax = x + 1;
            Copy_sub(tArray[x][1], tArray[data_size][1]);
        }
    }
}
//查看当前是否是源下级目录
function Looking_lower(dq, yuan) {
    for (var x = 0; x <= data_size; x++) {
        if (tArray[x][1] == dq) {
            if (tArray[x][2] == yuan) {
                return 1;
                break;
            } else {
                if (Looking_lower(tArray[x][2], yuan) == 1) {
                    return 1;
                    break;
                }
            }
        }
    }
    return 0;
}
//找到数据位置1数据 2项目 3开始位置
function Looking_Position(Data_content, Data_location, S_p) {
    for (var x = S_p; x <= data_size; x++) {
        if (tArray[x][Data_location] == Data_content) {
            return x;
            break;
        }
    }
    return -1;
}
// 查看是否同名 同名添加副本
function Looking_Name(Name_id) {
    var Name_Position = Looking_Position(Name_id, 1, 0);
    var Current_Position = "";
    var name = tArray[Name_Position][3]
    for (var x = 0; x <= data_size; x++) {
        Current_Position = Looking_Position(name, 3, x);
        //alert( Current_Position);
        //alert(tArray[Looking_Position][2]);
        if (Current_Position == "-1") {
//	 alert(tArray[Name_Position][3]);
            return name;
            break;
        } else {
            //alert(tArray[Looking_Position][2]);
            if (tArray[Current_Position][2] == Current_address) {
                name = name + "副本";
                x = 0;
            }
        }
    }
}


$(document).mousemove(function (e) {
    mouse_x = e.pageX;
    mouse_y = e.pageY;
})
//屏蔽鼠标右键
$(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
});
//显示时间
function currentTime() {
    var d = new Date(), str = '';
    str += d.getHours() + '时';
    str += d.getMinutes() + '分';
    str += d.getSeconds() + '秒<br>';
    str += d.getFullYear() + '年';
    str += d.getMonth() + 1 + '月';
    str += d.getDate() + '日';
    return str;
}
setInterval(function () {
    $('#time').html(currentTime)
}, 1000);
//判断按键

//移动窗口
function moveWin(id) {

    $('#' + id).mousedown(
        function (event) {
            var isMove = true;
            var abs_x = event.pageX - $("#" + id).parent().offset().left;
            var abs_y = event.pageY - $("#" + id).parent().offset().top;
            $(document).mousemove(function (event) {
                    if (isMove) {
                        var obj = $("#" + id).parent();
                        obj.css({'left': event.pageX - abs_x, 'top': event.pageY - abs_y});
                    }
                }
            ).mouseup(
                function () {
                    isMove = false;
                }
            );
        }
    );


}

//窗口左侧树形控制收缩菜单
function showmenu(sid) {
    try {
        var panel = document.querySelector(".menu" + sid+",#menu"+sid);

        if (panel.style.display == 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    } catch (e) {
    }
}
//处理改完名字
function saveName(obj) {
//	alert("改完名字");
//alert(Locking_focus+"--"+ Current_address);
    // Locking_focus=$("#Na"+Selected_id).attr('class');
    for (i = 0; i <= data_size; i++) {
        if (Selected_id != tArray[i][1] && $("#Na" + Selected_id).attr('value') == tArray[i][3] && Current_address == tArray[i][2]) {
            $("#Na" + Selected_id).val(Locking_focus);
            alert("错误：文件或文件夹重名");
        } else {
//		   for (k = 0; k <= data_size; k++){
            k = Looking_Position(Selected_id, 1, 0);
            //alert(Selected_id+" "+k);
            tArray[k][3] = $("#Na" + Selected_id).attr('value');
//            alert("xxxxz");
            if (tArray[k][4] == "F") {
                var EX_name = EX_name = Existing_types(Looking_EX(tArray[k][3]));

            }
            if (tArray[k][4] != "F") {
                EX_name = "";
            }
            //alert(k+"---- "+EX_name);

            $("#" + tArray[k][1]).attr('className', EX_name + ' Current ' + tArray[k][4] + " " + tArray[k][2]);
            $("#Na" + tArray[k][1]).val(tArray[k][3]);

            $("#re_" + tArray[k][1]).attr('className', EX_name + ' Current ' + tArray[k][4] + " " + tArray[k][2]);
            $("#re_Na" + tArray[k][1]).val(tArray[k][3]);


        }
    }

};
//改名中按回车
function noNumbers(e) {
//var keynum
//var keychar
//var numcheck

    if (window.event) // IE
    {
        keynum = e.keyCode
        if (e.keyCode == 13) {
            $("#Na" + Selected_id).blur();
        }

    }
//else if(e.which) // Netscape/Firefox/Opera
//  {
//  keynum = e.which
//  }

//keychar = String.fromCharCode(keynum)
//numcheck = /\d/
//return !numcheck.test(keychar)
}


//页面初始化
$(function () {
    moveWin('recycle_windows_banner');
    moveWin('Computer_windows_banner');
    moveWin('network_windows_banner');
    moveWin('startProp_windows_banner');
    moveWin('network_prop_banner');
    moveWin('control_panel_banner');
    var EX_name = "";
    for (i = 0; i < a_i - 1; i++) {
//没有数据的位置id为build+data_size数往下排
        if (i > data_size) {
            tArray[i][1] = "build" + (i);
            tArray[i][2] = "jsj";
            tArray[i][3] = "新建";
            tArray[i][4] = "D F";
        }
        if (tArray[i][4] == "F") {
            EX_name = EX_name = Existing_types(Looking_EX(tArray[i][3]));
        }
        if (tArray[i][4] != "F") {
            EX_name = "";
        }

//在计算机里建立驱动器、文件夹、文件
        $("#computer_r").append("<div class=" + "'" + EX_name + ' Current ' + tArray[i][4] + " " + tArray[i][2] + "'  id='" + tArray[i][1] + "' </div>");
//alert("<div class="+"'"+EX_name+' Current '+tArray[i][4]+" "+tArray[i][2]+"'  id='"+tArray[i][1]+"' </div>");
        $("#" + tArray[i][1]).append('<div class="i" ><input id="' + "Na" + tArray[i][1] + '" type="text" value="' + tArray[i][3] + '" onKeypress=' + '"return noNumbers(event)' + '"   onblur=saveName(this)></div>');


        $("#" + tArray[i][1]).append('<div class="Selected" ></div>');
        if (Current_address == tArray[i][2]) {
            $("#computer_r ." + Current_address).css("display", "block");
        } else {
            $("#computer_r ." + tArray[i][2]).css("display", "none");
        }

//在回收站里建立相同驱动器、文件夹、文件 id名字前+re_
        $("#recycle_r").append("<div class=" + "'" + EX_name + ' Current ' + tArray[i][4] + " " + tArray[i][2] + "'  id='re_" + tArray[i][1] + "' </div>");
        //alert("<div class="+"'"+EX_name+' Current '+tArray[i][4]+" "+tArray[i][2]+"'  id='re_"+tArray[i][1]+"' </div>");
//alert("<div class="+"'"+'Current '+tArray[i][4]+" "+tArray[i][2]+"'  id='"+tArray[i][1]+"' </div>");

        $("#re_" + tArray[i][1]).append('<div class="i" ><input id="' + "re_Na" + tArray[i][1] + '" type="text" value="' + tArray[i][3] + '" onKeypress=' + '"return noNumbers(event)' + '"   onblur=saveName(this)></div>');
        $("#re_" + tArray[i][1]).append('<div class="Selected" ></div>');
        $("#re_" + tArray[i][1]).css("display", "none");
    }
    $("#computer_r .del").css("display", "none");
    $("#computer_r .Eliminate").css("display", "none");
    $("#recycle_r .del").css("display", "block");
    //$("#computer_r .jsj").css("display", "block");

//隐藏各种菜单
    function Hidden_menu() {
        $('#computer_r_menu').css('display', 'none');
        $('#recycle_D_menu').css('display', 'none');
        $("#D_menu").css("display", "none");
        $("#F_menu").css("display", "none");
        $("#menuwin").css("display", "none");
        $('#taskbarbg_menu').css('display', 'none');
        $('#start_menu').css('display', 'none');
        $('#Display_menu').css('display', 'none');
        $('#Computer_menu').css('display', 'none');
        $('#recycle_menu').css('display', 'none');
        $('#network_menu').css('display', 'none');
        return "隐藏菜单成功";
    }


//左右点击隐藏菜单
    $('#recycle_windows,#network_windows,#desktop,#Computer_windows,#recycle_windows,#network_windows,#win,#taskbar,#Computer_go,#Computer_back,#computer_r,#computer_r .D,#computer_r .F,#recycle_r .D,#recycle_r .F,#startProp_windows,#network_prop').mousedown(function (e) {
        e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
        Hidden_menu();
    })
    $('#app .Computer').mousedown(function (e) {
        if (3 == e.which) {
            Hidden_menu();
            $('#Computer_menu').css('left', mouse_x);
            $('#Computer_menu').css('top', mouse_y);
            $('#Computer_menu').css('display', 'block');
        }
        return false;//阻止链接跳转
    })

    $('.recycle').mousedown(function (e) {
        if (3 == e.which) {
            Hidden_menu();
            $('#recycle_menu').css('left', mouse_x);
            $('#recycle_menu').css('top', mouse_y);
            $('#recycle_menu').css('display', 'block');
        }
        return false;//阻止链接跳转
    })

    $('.network').mousedown(function (e) {
        if (3 == e.which) {
            Hidden_menu();
            $('#network_menu').css('left', mouse_x);
            $('#network_menu').css('top', mouse_y);
            $('#network_menu').css('display', 'block');
        }
        return false;//阻止链接跳转
    })

    $('#win').mousedown(function (e) {

        if (3 == e.which) {

            $('#Display_menu').css('left', mouse_x);
            $('#Display_menu').css('bottom', mouse_y - mouse_y - mouse_y);
            $('#Display_menu').css('display', 'block');

        }
        return false;//阻止链接跳转
    })


    $('#start').mousedown(function (e) {
        if (3 == e.which) {
            Hidden_menu();
            $('#start_menu').css('left', mouse_x);
            $('#start_menu').css('display', 'block');


        }
        return false;//阻止链接跳转
    })
    $('#taskbar').mousedown(function (e) {
//alert(e.which) // 1 = 鼠标左键 left; 2 = 鼠标中键; 3= 鼠标右键
        if (3 == e.which) {
            $('#taskbarbg_menu').css('left', mouse_x);
            $('#taskbarbg_menu').css('display', 'block');
        }
        return false;//阻止链接跳转
    })
})


//点击事件


    function Hidden_menu() {
        $('#computer_r_menu').css('display', 'none');
        $('#recycle_D_menu').css('display', 'none');
        $("#D_menu").css("display", "none");
        $("#F_menu").css("display", "none");
        $("#menuwin").css("display", "none");
        $('#taskbarbg_menu').css('display', 'none');
        $('#start_menu').css('display', 'none');
        $('#Display_menu').css('display', 'none');
        $('#Computer_menu').css('display', 'none');
        $('#recycle_menu').css('display', 'none');
        $('#network_menu').css('display', 'none');
        return "隐藏菜单成功";
    }

//单击隐藏
    $(".Computer,.recycle,.network,#start").click(function () {
        $('#computer_r_menu').css('display', 'none');
        $('#recycle_D_menu').css('display', 'none');
        $("#D_menu").css("display", "none");
        $("#F_menu").css("display", "none");
        $("#menuwin").css("display", "none");
        $('#taskbarbg_menu').css('display', 'none');
        $('#start_menu').css('display', 'none');
        $('#Display_menu').css('display', 'none');
        $('#Computer_menu').css('display', 'none');
        $('#recycle_menu').css('display', 'none');
        $('#network_menu').css('display', 'none');
    });

//     $(".Computer").on("mousedown",function (e) {
//     e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
//     var preXaxis = e.clientX;
//     var preYaxis = e.clientY;
//         $(this).click(function (e) {
//             Folder_Record_Computer = ""
//             if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
//                 $('#Folder').css("border", "");
//             }
//             else {
//             }
//
//
//             var nowXaxis = e.clientX, nowYaxis = e.clientY;
//
//             system_work = "#Computer_windows";
//             if(preYaxis == nowYaxis && preXaxis == nowXaxis) {
//                 $("#Computer_windows").css("display", "block");
//                 $("#Computer_windows").css("z-index", "100");
//                 $("#recycle_windows").css("z-index", "50");
//                 $("#network_windows").css("z-index", "50");
//                 $("#startProp_windows").css("z-index", "50");
//             }
//             else{
//                 $("#Computer_windows").css("display", "none");
//                 $("#Computer_windows").css("z-index", "50");
//             }
//             e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
//         });
// });

    $(".recycle").click(function () {
        Folder_Record_recycle == "";
        if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
            $('#Folder').css("border", "");
        }
        else {
        }
        system_work = "#recycle_windows";
        $("#recycle_windows").css("display", "block");
        $("#Computer_windows").css("z-index", "50");
        $("#recycle_windows").css("z-index", "100");
        $("#network_windows").css("z-index", "50");
        $("#startProp_windows").css("z-index", "50");
    });
    $(".network").click(function () {
        Folder_Record_network == "";
        if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
            $('#Folder').css("border", "");
        }
        else {
        }
        system_work = "#network_windows";
        $("#network_windows").css("display", "block");
        $("#Computer_windows").css("z-index", "50");
        $("#recycle_windows").css("z-index", "50");
        $("#network_windows").css("z-index", "100");
        $("#startProp_windows").css("z-index", "50");
    });

    $('#start_menu li').on('mousedown', function (e) {
        if (e.which == 1) {
            Folder_Record_network == "";
            if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
                $('#Folder').css("border", "");
            }
            else {
            }
            system_work = "#startProp_windows";
            $("#Computer_windows").css("z-index", "50");
            $("#recycle_windows").css("z-index", "50");
            $("#network_windows").css("z-index", "50");
            $("#startProp_windows").css("display", "block");
            $("#startProp_windows").css("z-index", "100");
            $('#start_menu').css('display', 'none');
        }
    });
    $("#network_menu #netProp").on("click", function () {
        Folder_Record_Computer = ""
        if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
            $('#Folder').css("border", "");
        }
        else {
        }
        system_work = "#network_prop";
        $("#network_prop").css("display", "block");
        $("#network_prop").css("z-index", "100");
        $("#Computer_windows").css("z-index", "50");
        $("#recycle_windows").css("z-index", "50");
        $("#network_windows").css("z-index", "50");
        $("#startProp_windows").css("z-index", "50");
        $("#network_menu").css("display", "none")
    });

    /*-----------测试---------------------------------*/
    // $("#links #ctrlPanel").on("click",function () {
    //     Folder_Record_Computer=""
    //     if (Folder_Record_recycle==""&& Folder_Record_Computer==""&&Folder_Record_network==""){
    //         $('#Folder').css("border", "");
    //     }
    //     else{
    //     }
    //     system_work="#control_panel";
    //     $("#control_panel").css("display", "block");
    //     $("#control_panel").css("z-index", "100");
    //     $("#network_prop").css("z-index", "50");
    //     $("#Computer_windows").css("z-index", "50");
    //     $("#recycle_windows").css("z-index", "50");
    //     $("#network_windows").css("z-index", "50");
    //     $("#startProp_windows").css("z-index", "50");
    //     $("#menuwin").css("display","none")
    // })

    /*------------------------------/测试-----------------------*/
    $('#startProp_windows').on('click', function () {
        system_work = "#startProp_windows";
        $("#Computer_windows").css("z-index", "50");
        $("#recycle_windows").css("z-index", "50");
        $("#network_windows").css("z-index", "50");
        $("#startProp_windows").css("z-index", "100");
    })
    $("#Computer_windows").click(function () {
        system_work = "#Computer_windows";
        $("#Computer_windows").css("z-index", "100");
        $("#recycle_windows").css("z-index", "50");
        $("#network_windows").css("z-index", "50");
        $("#startProp_windows").css("z-index", "50");
    });

    $("#recycle_windows").click(function () {
        system_work = "#recycle_windows";
        $("#Computer_windows").css("z-index", "50");
        $("#recycle_windows").css("z-index", "100");
        $("#network_windows").css("z-index", "50");
        $("#startProp_windows").css("z-index", "50");
    });

    $("#network_windows").click(function () {
        system_work = "#network_windows";
        $("#Computer_windows").css("z-index", "50");
        $("#recycle_windows").css("z-index", "50");
        $("#network_windows").css("z-index", "100");
        $("#startProp_windows").css("z-index", "50");
    });


    Array.prototype.contains = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return true;
            }
        }
        return false;
    }


    /*构造窗口事件对象*/



    $("#win,#desktop,#start,#network_windows,#recycle_windows,#Computer_go,#Computer_back,.network,.recycle,.Computer,#startProp_windows").click(function () {
        //点击如果选择取消选择
        if (Selected_id != "") {
            //取消选择
            $("#" + Selected_id + " .Selected").css("background-image", "");
            Selected_id = "";
        }
        ;
    });
    $("#start").click(function () {
        $("#menuwin").css("display", "block");
    });
    $("#Folder").click(function () {
        $('#Folder').css("border", "");
        if (Folder_Record_Computer != "") {

            $("#Computer_windows").css("display", "block");
            Folder_Record_Computer = "";
//			alert ("C");
        }
        if (Folder_Record_recycle != "") {
            $("#recycle_windows").css("display", "block");
            Folder_Record_recycle = "";
//			alert ("R");
        }
        if (Folder_Record_network != "") {
            $("#network_windows").css("display", "block");
            Folder_Record_network = "";
//			alert ("R");
        }

    });
    $("#computer_r .D,#computer_r .F,#computer_r .Q").dblclick(function () {
        var str_Position = $("#" + $(this).attr('id')).attr('class').indexOf("F");

        if (str_Position == "-1") {
            if (Selected_id != "") {
                //取消选择
                $("#" + Selected_id + " .Selected").css("background-image", "");
                Selected_id = "";
            }
            ;
            if (next_address != "") {
//		    Trace_ad++;
                next_address = ""
                $("#Computer_go").css("background-position", "right bottom");
            }

            $("#address_txt").val($("#Na" + $(this).attr('id')).attr('value'));
            //zsccc="#Na"+$(this).attr('id');
            //alert(zsccc);
            //alert($("#Na"+$(this).attr('id')).attr('value'));
            //eval(document.getElementById('')).value
            Trace_ad = Trace_ad + 1;
            Trace[Trace_ad] = $(this).attr('id');
            Trace[Trace_ad + 1] = "";
            //         alert(Trace_ad);
//alert(Trace[Trace_ad-1]+"----"+Trace_ad);
            $("#Computer_back").css("background-position", "left top");
            //alert($(this).attr('id'));
            Before_address = Current_address;
            Current_address = $(this).attr('id');
            $("#address_txt").val($("#Na" + $(this).attr('id')).attr('value'));
// alert(Current_address);
            $("#computer_r ." + Before_address).css("display", "none");
            $("#computer_r ." + Current_address).css("display", "block");
            $("#Computer_windows .del").css("display", "none");
            $("#computer_r .Eliminate").css("display", "none");
        } else {
//				alert("文件菜单"+str_Position);
        }
    });


    $(".Open_dir").click(function () {
        //取消选择
        $("#" + Selected_id + " .Selected").css("background-image", "");
        Before_address = Current_address;
        Current_address = Selected_id;
        $("#address_txt").val($("#Na" + Current_address).attr('value'));
        if (next_address != "") {
//		   Trace_ad++;
            next_address = ""
            $("#Computer_go").css("background-position", "right bottom");
        }
        Trace_ad = Trace_ad + 1;
        Trace[Trace_ad] = Selected_id;
        Trace[Trace_ad + 1] = "";
        Selected_id = "";
        //         alert(Trace_ad);
//alert(Trace[Trace_ad-1]+"----"+Trace_ad);
        $("#Computer_back").css("background-position", "left top");
        //alert($(this).attr('id'));

// alert(Current_address);
        $('#D_menu').css('display', 'none');
        $("#computer_r ." + Before_address).css("display", "none");
        $("#computer_r ." + Current_address).css("display", "block");
        $("#Computer_windows .del").css("display", "none");
        $("#computer_r .Eliminate").css("display", "none");
    });


    $(".Rename_file").click(function () {
        //取消选择
        //alert("#Na"+Selected_id);
        $("#" + Selected_id + " .Selected").css("background-image", "");
        $('#D_menu').css('display', 'none');
        $('#F_menu').css('display', 'none');
        Locking_focus = $("#Na" + Selected_id).attr('value');
        //Selected_id="";
        //alert($("#Na"+Selected_id).attr('value'));
        //获得焦点
        $("#Na" + Selected_id).focus();
        //全选
        $("#Na" + Selected_id).select();

//		  $(Locking_focus).onBlur(function(){
//			  alert("jkadfjada");
//			  Locking_focus="";
//			});

        //         alert(Trace_ad);
//alert(Trace[Trace_ad-1]+"----"+Trace_ad);
        //alert($(this).attr('id'));

// alert(Current_address);


    });


    $(".Shear").click(function () {
        Shear_file = Selected_id;
        copy_file = "";
//alert("剪切"+Shear_file+"成功");
        $('#D_menu').css('display', 'none');
        $('#F_menu').css('display', 'none');
    });

    $(".D_copy").click(function () {
        Shear_file = "";
        copy_file = Selected_id;
//alert("复制"+copy_file+"成功");
        $('#D_menu').css('display', 'none');
        $('#F_menu').css('display', 'none');
//alert(Selected_id);
    });

    $(".Paste").click(function () {
        $('#computer_r_menu').css('display', 'none');
//Current_address
//剪切粘贴部分
        if (Shear_file != "") {
            if (Looking_lower(Current_address, Shear_file) == "1" || Current_address == Shear_file) {
                alert("不能移动到自己的下级目录");
            } else {

                //alert("粘贴判断成功"+Shear_file);
                for (i = 0; i <= data_size; i++) {
                    if (Shear_file == tArray[i][1]) {

                        var str_temp = $("#" + Shear_file).attr('class');
                        var str_len = $("#" + Shear_file).attr('class').length;
                        var str_parent = (tArray[i][2]).length;
                        var str_Position = $("#" + Shear_file).attr('class').indexOf(tArray[i][2]);
                        tArray[i][2] = Current_address;
//去掉类里的 父级名字 指定新的
                        var str_Result = str_temp.substring(0, str_Position) + str_temp.substring(str_Position + str_parent + 1, str_len);
//alert("总长："+str_len+" 去除长度"+str_parent+" 去除位置"+str_Position);
//alert(Current_address);
//alert(str_temp+"--"+str_Result);
//    	 tArray[i][2]=Current_address;
                        $("#" + Shear_file).attr('className', str_Result + " " + tArray[i][2]);
                        $("#re_" + Shear_file).attr('className', str_Result + " " + tArray[i][2]);
//		   alert("@@@@"+str_Result+" "+tArray[i][2]);
                        $("#computer_r ." + Current_address).css("display", "block");
                        $("#computer_r .del").css("display", "none");
                        $("#computer_r .Eliminate").css("display", "none");
                        Shear_file = "";
                        break;
                    } else {
//		alert("错误复制的文件或文件夹已不存在");
                    }
                }
            }
        }
//alert("复制"+copy_file);
//复制粘贴部分
        if (copy_file != "") {
            //alert(Looking_lower(Current_address,copy_file));
            if (Looking_lower(Current_address, copy_file) == "1" || Current_address == copy_file) {
                alert("不能复制到自己的下级目录");
            } else {
                for (i = 0; i <= data_size; i++) {
                    if (copy_file == tArray[i][1]) {
//		alert(copy_file+"copy!!!!!!!!");
                        var str_temp = $("#" + copy_file).attr('class');
                        var str_len = $("#" + copy_file).attr('class').length;
                        var str_parent = (tArray[i][2]).length;
                        var str_Position = $("#" + copy_file).attr('class').indexOf(tArray[i][2]);

                        //tArray[i][2]=Current_address;
//去掉类里的 父级名字 指定新的
                        var str_Result = str_temp.substring(0, str_Position) + str_temp.substring(str_Position + str_parent + 1, str_len);
//    	 tArray[i][2]=Current_address;
                        data_size = data_size + 1;
//		tArray[data_size][1]="build"+data_size;
                        tArray[data_size][2] = Current_address;
                        tArray[data_size][3] = Looking_Name(tArray[i][1]);
                        tArray[data_size][4] = tArray[i][4];
                        tArray[data_size][5] = tArray[i][5];
                        tArray[data_size][6] = tArray[i][6];
                        tArray[data_size][7] = tArray[i][7];
                        tArray[data_size][8] = tArray[i][8];
                        tArray[data_size][9] = tArray[i][9];
                        tArray[data_size][10] = tArray[i][10];
                        tArray[data_size][11] = tArray[i][11];

                        if (tArray[data_size][4] == "F") {
                            EX_name = Existing_types(Looking_EX(tArray[data_size][3]));
                        }
                        if (tArray[data_size][4] != "F") {
                            EX_name = "";
                        }

//计算机里的id修改内容
                        $("#" + tArray[data_size][1]).attr('className', EX_name + ' Current ' + tArray[data_size][4] + " " + tArray[data_size][2]);
                        $("#Na" + tArray[data_size][1]).val(tArray[data_size][3]);
                        $("#computer_r ." + Current_address).css("display", "block");

//在回收站里建立相同驱动器、文件夹、文件 id名字前+re_

                        $("#re_" + tArray[data_size][1]).attr('className', EX_name + ' Current ' + tArray[data_size][4] + " " + tArray[data_size][2]);
                        $("#re_Na" + tArray[data_size][1]).val(tArray[data_size][3]);

                        $("#re_" + tArray[data_size][1]).append('<div class="Selected" ></div>');
                        $("#re_" + tArray[data_size][1]).css("display", "none");

                        $("#computer_r .del").css("display", "none");
                        $("#computer_r .Eliminate").css("display", "none");
                        $("#recycle_r .del").css("display", "block");

//建设----
                        //alert(tArray[i][1]+tArray[data_size][1]);
                        Copy_sub(tArray[i][1], tArray[data_size][1]);
                        copy_file = "";
                        break;
                    } else {
//		alert("错误复制的文件或文件夹已不存在");
                    }
                }
            }
        }
//Selected_id;
//alert(Selected_id);
//建设-=-=
    });
    $(".New_dir").click(function () {

        $("#computer_r_menu").css("display", "none")
        data_size = data_size + 1;
//		tArray[data_size][1]="build"+data_size;
        tArray[data_size][2] = Current_address;
        tArray[data_size][3] = "新建文件夹" + data_size;
        tArray[data_size][4] = "D";
        tArray[data_size][5] = currentTime();
        tArray[data_size][6] = currentTime();
        tArray[data_size][7] = currentTime();
        tArray[data_size][8] = 0;
        tArray[data_size][9] = 0;
        tArray[data_size][10] = "Windows";
        tArray[data_size][11] = "block";
        Locking_focus = "新建文件夹" + data_size;
//计算机里的id修改内容
        $("#" + tArray[data_size][1]).attr('className', 'Current ' + tArray[data_size][4] + " " + tArray[data_size][2]);

        $("#Na" + tArray[data_size][1]).val(tArray[data_size][3]);
        $("#computer_r ." + Current_address).css("display", "block");

//在回收站里建立相同驱动器、文件夹、文件 id名字前+re_

        $("#re_" + tArray[data_size][1]).attr('className', 'Current ' + tArray[data_size][4] + " " + tArray[data_size][2]);

        $("#re_Na" + tArray[data_size][1]).val(tArray[data_size][3]);

        $("#re_" + tArray[data_size][1]).append('<div class="Selected" ></div>');
        $("#re_" + tArray[data_size][1]).css("display", "none");

        $("#computer_r .del").css("display", "none");
        $("#recycle_r .del").css("display", "block");
        $("#computer_r .Eliminate").css("display", "none");
        Selected_id = tArray[data_size][1];

        $("#Na" + tArray[data_size][1]).focus();
        //全选
        $("#Na" + tArray[data_size][1]).select();
    });


    $(".Del_file").click(function () {
        //取消选择
        $("#" + Selected_id + " .Selected").css("background-image", "");
//           Before_address=Current_address;
//           Current_address=Selected_id;
        //判断删除是否影响历史记录
        if (next_address != "" && next_address == Selected_id) {
            next_address = ""
            $("#Computer_go").css("background-position", "right bottom");

        }
        ;
//		   alert($("#"+Selected_id).attr('class'));
        $("#" + Selected_id).attr('className', $("#" + Selected_id).attr('class') + " del");
        $("#re_" + Selected_id).attr('className', $("#" + Selected_id).attr('class'));
        //alert($("#re_"+Selected_id).attr('class'));
        tArray[Looking_Position(Selected_id, 1, 0)][11] = "del"
        //alert(	tArray[Looking_Position(Selected_id,1,0)][11]);
        $('#D_menu').css('display', 'none');
        $('#F_menu').css('display', 'none');
        $("#computer_r #" + Selected_id).css("display", "none");
        $("#recycle_r #re_" + Selected_id).css("display", "block");
    });

//atr.indexOf("World") 返回字符串包含另一串的位置 没有-1
    $(".recycle_Eliminate").click(function () {

        //取消选择
        $("#" + recycle_Selected_id + " .Selected").css("background-image", "");
//找到class 中del类 去掉
        var str_temp = $("#" + recycle_Selected_id).attr('class');
        var str_len = $("#" + recycle_Selected_id).attr('class').length;
        var str_Position = $("#" + recycle_Selected_id).attr('class').indexOf("del");
//去掉类里的 del
        var str_Result = str_temp.substring(0, str_Position) + str_temp.substring(str_Position + 4, str_len);
//根据回收站里的id 算出正确id
        var str_idModify = recycle_Selected_id.substring(3, recycle_Selected_id.length);
//alert(str_Result);
        $("#" + recycle_Selected_id).attr('className', str_Result + " Eliminate");
        $("#" + str_idModify).attr('className', str_Result + " Eliminate");
        tArray[Looking_Position(str_idModify, 1, 0)][11] = "Eliminate"
        $("#" + recycle_Selected_id).css('display', 'none');
//           $("#"+str_idModify).css('display', 'block');
        $("#computer_r ." + Current_address).css("display", "block");
        $("#computer_r .del").css("display", "none");
        $("#computer_r .Eliminate").css("display", "none");
        $("#recycle_D_menu").css("display", "none");
    });

    $(".recycle_Eliminate_all").click(function () {
        var del_name = "";
        for (var x = 0; x <= data_size; x++) {
            //alert(tArray[x][11])
            del_name = Looking_Position("del", 11, x);
            if (del_name != -1) {
                x = del_name;
                //找到class 中del类 去掉
                var str_temp = $("#" + tArray[x][1]).attr('class');
                var str_len = $("#" + tArray[x][1]).attr('class').length;
                var str_Position = $("#" + tArray[x][1]).attr('class').indexOf("del");
//去掉类里的 del
                var str_Result = str_temp.substring(0, str_Position) + str_temp.substring(str_Position + 4, str_len);
//根据回收站里的id 算出正确id
                var str_idModify = "re_" + tArray[x][1];
//alert(str_Result);
                $("#" + tArray[x][1]).attr('className', str_Result + " Eliminate");
                $("#" + str_idModify).attr('className', str_Result + " Eliminate");
                tArray[x][11] = "Eliminate"
                //  alert(x+"  ");
                $("#re_" + tArray[x][1]).css('display', 'none');
            }
        }
        $("#computer_r .del").css("display", "none");
        $("#computer_r .Eliminate").css("display", "none");
        $("#recycle_D_menu").css("display", "none");

    });


    $(".recycle_reduction").click(function () {

        //取消选择
        $("#" + recycle_Selected_id + " .Selected").css("background-image", "");

//           Before_address=Current_address;
//           Current_address=Selected_id;
//找到class 中del类 去掉

        var str_temp = $("#" + recycle_Selected_id).attr('class');
//alert(str_temp);
        var str_len = $("#" + recycle_Selected_id).attr('class').length;
        var str_Position = $("#" + recycle_Selected_id).attr('class').indexOf("del");

//去掉类里的 del

        var str_Result = str_temp.substring(0, str_Position) + str_temp.substring(str_Position + 4, str_len);


//根据回收站里的id 算出正确id
        var str_idModify = recycle_Selected_id.substring(3, recycle_Selected_id.length);
//alert(str_Result);
        $("#" + recycle_Selected_id).attr('className', str_Result);
        $("#" + str_idModify).attr('className', str_Result);
        tArray[Looking_Position(str_idModify, 1, 0)][11] = "block"
//alert("aaa"+tArray[Looking_Position(str_idModify,1,0)][11]);
//alert($("#"+recycle_Selected_id).attr('class'));
//alert(str_temp+"-"+str_idModify+"-"+str_Result);
//alert(recycle_Selected_id);
//alert(Selected_id);
//		   $("."+Selected_id).css('display', 'block');

        $("#" + recycle_Selected_id).css('display', 'none');
//           $("#"+str_idModify).css('display', 'block');
        $("#computer_r ." + Current_address).css("display", "block");
        $("#computer_r .del").css("display", "none");
        $("#computer_r .Eliminate").css("display", "none");
        $("#recycle_D_menu").css("display", "none");

    });

//正在建设中


    $(".recycle_reduction_all").click(function () {
        var del_name = "";
        for (var x = 0; x <= data_size; x++) {
            //alert(tArray[x][11])
            del_name = Looking_Position("del", 11, x);
            if (del_name != -1) {
                x = del_name;
                //找到class 中del类 去掉
                var str_temp = $("#" + tArray[x][1]).attr('class');
                var str_len = $("#" + tArray[x][1]).attr('class').length;
                var str_Position = $("#" + tArray[x][1]).attr('class').indexOf("del");
//去掉类里的 del
                var str_Result = str_temp.substring(0, str_Position) + str_temp.substring(str_Position + 4, str_len);
//根据回收站里的id 算出正确id
                var str_idModify = "re_" + tArray[x][1];
//alert(str_Result);
                $("#" + tArray[x][1]).attr('className', str_Result + " block");
                $("#" + str_idModify).attr('className', str_Result + " block");
                tArray[x][11] = "Eliminate"
                //  alert(x+"  ");
                $("#re_" + tArray[x][1]).css('display', 'none');
            }
        }
        $("#computer_r ." + Current_address).css("display", "block");
        $("#computer_r .del").css("display", "none");
        $("#computer_r .Eliminate").css("display", "none");
        $("#recycle_D_menu").css("display", "none");
    });


    $("#Computer_back").click(function () {
// alert(" 数据指针= "+Trace_ad+" 0  "+Trace[0]+" 1 "+Trace[1]+" 2 "+Trace[2]+" 3 "+Trace[3]);
//------

//------
        $('#computer_r_menu').css('display', 'none');
        if (Trace_ad != 0) {
            $("#Computer_go").css("background-position", "right top");
            next_address = Current_address;
            Current_address = Before_address;
//alert(Trace_ad+Before_address);
            Trace_ad = Trace_ad - 1;
//	  alert(Trace_ad);
            if (Trace_ad != 0) {
                Before_address = Trace[Trace_ad - 1];
            } else {
                Before_address = "";
            }
            $("#address_txt").val($("#Na" + Trace[Trace_ad]).attr('value'));

            if (Current_address == "Root") {
                $("#address_txt").val("计算机");
            }
            $("#computer_r ." + next_address).css("display", "none");
            $("#computer_r ." + Current_address).css("display", "block");
            $("#Computer_windows .del").css("display", "none");
            $("#computer_r .Eliminate").css("display", "none");
        }

        if (Trace_ad == 0) {
            $("#Computer_back").css("background-position", "left bottom");
        }
    });

    $("#Computer_go").click(function () {
        $('#computer_r_menu').css('display', 'none');
//		alert(Trace_ad+" "+Trace[2]);
        if (next_address != "") {
            $("#Computer_back").css("background-position", "left top");
            Before_address = Current_address;
            Current_address = next_address;
            // alert(Trace[Trace_ad]);
//    alert(" 数据指针= "+Trace_ad+" 0  "+Trace[0]+" 1 "+Trace[1]+" 2 "+Trace[2]+" 3 "+Trace[3]);
            Trace_ad = Trace_ad + 1;
            next_address = Trace[Trace_ad + 1];
            $("#address_txt").val($("#Na" + Trace[Trace_ad]).attr('value'));
            if (Current_address == "Root") {
                $("#address_txt").val("计算机");
            }
//alert(--Trace_ad+Before_address);
            $("#computer_r ." + Before_address).css("display", "none");
            $("#computer_r ." + Current_address).css("display", "block");
            $("#Computer_windows .del").css("display", "none");
            $("#computer_r .Eliminate").css("display", "none");
        }
        if (next_address == "") {
            $("#Computer_go").css("background-position", "right bottom");
        }
    });

    $("#computer_r .D,#computer_r .F").click(function () {
        //选中
        if (Selected_id != "") {
            $("#" + Selected_id + " .Selected").css("background-image", "");
        }
        Selected_id = $(this).attr('id');
        //alert(Selected_id);
        $("#" + Selected_id + " .Selected").css("background-image", "url(images/After.png)");
    });

//文件夹右键菜单弹出
    $("#computer_r .D,#computer_r .F").mousedown(function (e) {
        if (3 == e.which) {
            //选中
            if (Selected_id != "") {
                $("#" + Selected_id + " .Selected").css("background-image", "");
            }
            Selected_id = $(this).attr('id');
//	 alert(Selected_id);
            $("#" + $(this).attr('id') + " .Selected").css("background-image", "url(images/After.png)");
            //var str_temp=$("#"+Selected_id).attr('class');
            //var str_len=$("#"+Selected_id).attr('class').length;
            var str_Position = $("#" + Selected_id).attr('class').indexOf("D");

            if (str_Position != "-1") {
                //alert("文件贾菜单"+str_Position);
                $('#D_menu').css('left', mouse_x);
                $('#D_menu').css('top', mouse_y);
                $('#D_menu').css('display', 'block');
            } else {
                //	alert("文件菜单");
                $('#F_menu').css('left', mouse_x);
                $('#F_menu').css('top', mouse_y);
                $('#F_menu').css('display', 'block');
            }
        }
        return false;//阻止链接跳转
    });

    $("#computer_r .Q").mousedown(function (e) {
        if (3 == e.which) {

            alert("驱动器菜单");
//		$('#D_menu').css('left', mouse_x);
//    	$('#D_menu').css('top', mouse_y);
//	    $('#D_menu').css('display', 'block');

        }
        return false;//阻止链接跳转
    });


    $("#computer_r").mousedown(function (e) {
        if (3 == e.which) {
            //选中
            if (Selected_id != "") {
                $("#" + Selected_id + " .Selected").css("background-image", "");
            }
//     Selected_id=$(this).attr('id');
//	 alert(Selected_id);

            $('#computer_r_menu').css('left', mouse_x);
            $('#computer_r_menu').css('top', mouse_y);
            $('#computer_r_menu').css('display', 'block');
        }
        return false;//阻止链接跳转
    });


//回收站右键菜单弹出
    $("#recycle_r .D,#recycle_r .F").mousedown(function (e) {
        if (3 == e.which) {
            recycle_Selected_id = ($(this).attr('id'));
//	 alert(Selected_id);
//$("#"+$(this).attr('id')+" .Selected").css("background-image", "url(images/After.png)");
            $('#recycle_D_menu').css('left', mouse_x);
            $('#recycle_D_menu').css('top', mouse_y);
            $('#recycle_D_menu').css('display', 'block');
        }
        return false;//阻止链接跳转
    });



//右侧三个按钮
function min(obj) {
    //$(obj).parent().parent().parent().css('display','none');
//	if ($(obj).parents("div[name='windows']")=="#recycle_windows"){
    system_work = "#" + $($(obj).parents("div[name='windows']")).attr('id');
//	alert (system_work);

    if (system_work == "#recycle_windows") {
        Folder_Record_recycle = $(obj).parents("div[name='windows']");
//alert ("恭喜你还是有作用的！r");
    }
    if (system_work == "#Computer_windows") {
        Folder_Record_Computer = $(obj).parents("div[name='windows']");
    }
    if (system_work == "#network_windows") {
        Folder_Record_network = $(obj).parents("div[name='windows']");
    }
//	alert (Folder_Record_recycle+"ccccccccc");
//	}
//	Folder_Record=$(obj).parents("div[name='windows']")
    $('#Folder').css("border", "1px solid #666");
    $(obj).parents("div[name='windows']").hide();

//	alert ($($(obj).parents("div[name='windows']")).css("list-style-type"));

}
function Reduction(obj) {
    //$(obj).parent().parent().parent().css('display','none');
    var windowsId = $(obj).parents("div[name='windows']");
    if ($(windowsId).css("width") == '101%') {
        $(windowsId).css("top", "100px");
        $(windowsId).css("left", "100px");
        $(windowsId).css("width", "600px");
        $(windowsId).css("height", "400px");
        $(".windows_shadow").css("width", "608px");
        $(".windows_shadow").css("height", "408px");
        $(".windows_shadow").css("display", "block");
//		alert($('.windows_shadow').css("width"));
    }
    else {
        $(windowsId).css("width", "101%");
//		var comwidth = $("#Computer_windows").css("width")
//        alert($("#Computer_windows").css("width"));
        $(windowsId).css("height", "95%");
        $(windowsId).css("top", "0");
        $(windowsId).css("left", "0");
        $(".windows_shadow").css("display", "none");
//		$("#Computer_windows").css("width", comwidth+40);
    }
}
function Close(obj) {
    //$(obj).parent().parent().parent().css('display','none');
    system_work = "#" + $($(obj).parents("div[name='windows']")).attr('id');


    if (system_work == "#recycle_windows") {
        Folder_Record_recycle = "";
        system_work == "";
        $("#Search_recycle_txt").val("搜索回收站");
        $("#recycle_txt").val("回收站");
//    alert ("回收站");
    }
    if (system_work == "#Computer_windows") {
        Folder_Record_Computer = "";
        $("#Search_txt").val("搜索计算机");
        $("#address_txt").val("计算机");
//	alert($("#address_txt").attr('value'));
        $("#computer_r ." + Current_address).css("display", "none");
        $("#computer_r .Root").css("display", "block");
        $("#Computer_go").css("background-position", "right bottom");
        $("#Computer_back").css("background-position", "left bottom");
        system_work == "";
        Trace[0] = "Root";
        Current_address = "Root";
        Before_address = "";
        next_address = "";
        Trace_ad = 0;
//	alert ("计算机");
    }
    if (system_work == "#network_windows") {
        Folder_Record_network = "";
        $("#Search_network_txt").val("搜索网络");
        $("#network_txt").val("网络");
        system_work == "";
    }

//		alert (system_work+"zzzzzzzzz"+obj);
    $(obj).parents("div[name='windows']").hide();
//alert (system_work+Folder_Record_recycle+Folder_Record_Computer);
}
function shuxing() {

}
$(".test12").click(function () {
    alert("hhahaha");
});

function Hidden_menu() {
    $('#computer_r_menu').css('display', 'none');
    $('#recycle_D_menu').css('display', 'none');
    $("#D_menu").css("display", "none");
    $("#F_menu").css("display", "none");
    $("#menuwin").css("display", "none");
    $('#taskbarbg_menu').css('display', 'none');
    $('#start_menu').css('display', 'none');
    $('#Display_menu').css('display', 'none');
    $('#Computer_menu').css('display', 'none');
    $('#recycle_menu').css('display', 'none');
    $('#network_menu').css('display', 'none');
    return "隐藏菜单成功";
}


Array.prototype.contains = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}


// /*构造窗口事件对象*/
// function WinEve(option) {
//     this.clickID = option.clickID;
//     this.targetID = option.targetID;
//
// }
// WinEve.prototype = {
//     "winArr": ["#recycle_windows", "#network_windows", "#desktop", "#Computer_windows", "#recycle_windows", "#network_windows", "#win,#taskbar", "#Computer_go", "#Computer_back", "#computer_r", "#computer_r .D", "#computer_r .F", "#recycle_r .D", "#recycle_r .F", "#startProp_windows", "#network_prop"]
//     ,
//     // "delMenu" : ["#menuwin"]
//     // ,
//     "init": function () {
//         var that = this;
//         $(this.clickID).on("click", function (e) {
//
//
//             Folder_Record_network == "";
//             if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
//                 $('#Folder').css("border", "");
//             }
//             else {
//             }
//             system_work = that.targetID;
//             $(that.winArr).each(function (i, e) {
//                 $(e).css("z-index", "50")
//             })
//             // $(that.delMenu).each(function (i,e) {
//             //     $(e).css("display" , "none");
//             // })
//             Hidden_menu();
//
//             $(that.targetID).css("z-index", "100");
//             $(that.targetID).css("display", "block");
//             moveWin($(that.targetID + ">div").eq(0).attr("id"));
//
//             e.stopPropagation();
//         });
//         $(this.targetID).on("click", function (e) {
//
//             system_work = that.targetID;
//             $(that.winArr).each(function (i, e) {
//                 $(e).css("z-index", "50")
//             })
//
//
//             $(that.targetID).css("z-index", "100");
//
//             // $(that.delMenu).each(function (i,e) {
//             //     $(e).css("display" , "none");
//             // })
//             Hidden_menu();
//         });
//         this.pushWinArr();
//
//     },
//     "pushWinArr": function () {
//         if (!this.winArr.contains(this.targetID))
//             this.winArr.push(this.targetID);
//     },
//     "bindDOM": function () {
//         /*-------------------------------------------*/
//     }
// }
//
//
// var ctrlPanel = new WinEve({"clickID": "#links #ctrlPanel", "targetID": "#control_panel"});
// ctrlPanel.init();
//
//
// var com = new WinEve({"clickID": ".Computer", "targetID": "#Computer_windows"});
// com.init();
//
// // 这个才是需要手动添加的弹出窗口的key
//
//
// var selfStyle = new WinEve({"clickID": "#Titl_b", "targetID": "#theme_bg"});
// selfStyle.init();
//
// var userCstyle = new WinEve({"clickID": "#Titl_u", "targetID": "#userCounter"});
// userCstyle.init();
//
// var userC_1_style = new WinEve({"clickID": "#Titl_u1", "targetID": "#userCounter_1"});
// userC_1_style.init();
//
// var user_passWrd_style = new WinEve({"clickID": ".OpenPasWd", "targetID": "#user_passWrd"});
// user_passWrd_style.init();
//
// var user_pWd_del_style = new WinEve({"clickID": "#DelPasWd", "targetID": "#user_pWd_del"});
// user_pWd_del_style.init();
//
// var user_gaiTu_style = new WinEve({"clickID": ".ChangeTu", "targetID": "#user_gaiTu"});
// user_gaiTu_style.init();
//
// // 这个才是需要手动添加的弹出窗口的key
//
// /*
//  * 构造窗口内容对象，用于菜单属性
//  * */
// var props_content = document.querySelector(".Content");
// var props_title = document.querySelector("#props_toolBar");
// var props_det = document.querySelector("#props_detail");
// function MenuProps(arr) {
//     this.arr = arr;
// }
// MenuProps.prototype = {
//     "ensure": "<button>确认</button>",
//     "cancer": "<button>取消</button>",
//     "apply": "<button>应用</button>",
//     "bindDOM": function () {
//
//         for (var index in this.arr) {
//
//             for (var title in this.arr[index])
//
//                 $(props_title).append(title);
//             $(props_det).append(this.arr[index][title]);
//         }
//     },
//     "bindEvent": function () {
//         $(props_title).children("li").on("click", function () {
//
//             $(props_title).children("li").each(function (i, e) {
//
//                 var target = $(e).data("target");
//                 $(target).css("display", "none");
//             })
//             $($(this).data("target")).css("display", "block");
//
//         })
//     }
// }
// var prop_taskBar = [{
//     '<li data-target="#prop_taskBar">任务栏</li>': '<div id="prop_taskBar">' +
//     '<div id="taskBar_style">' +
//     '<span id="title">任务栏外观</span>' +
//     '<div style="width: 100%;">' +
//     '<input type="checkbox" name="" id="" checked>锁定任务栏<br/>' +
//     '<input type="checkbox" name="" id="">自动隐藏任务栏<br/>' +
//     '<input type="checkbox" name="" id="">使用小图标<br/>' +
//     '任务栏上的位置：' +
//     '<select name="" id="">' +
//     '    <option value="">左侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
//     '<option value="">右侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
//     '<option value="">底侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
//     '<option value="">顶侧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>' +
//     '</select><br>' +
//     '任务栏按钮：' +
//     '<select name="" id="">' +
//     '    <option value="">始终合并、隐藏标签</option>' +
//     '<option value="">当任务栏被占满是合并</option>' +
//     '    <option value="">从不合并</option>' +
//     '   </select>' +
//     '   </div>' +
//     '    </div>' +
//     '    <div id="notification_area">' +
//     '    <span>通知区域</span>' +
//     '    <div>' +
//     '    <span>自定义通知区域中出现的图标和通知。</span>' +
//     '&nbsp;' +
//     '&nbsp;' +
//     '&nbsp;' +
//     '&nbsp;' +
//     '&nbsp;' +
//     '&nbsp;' +
//     '<button>自定义...</button>' +
//     '</div>' +
//     '</div>' +
//     '<div id="view_desktop"><span>使用Aero Peek预览桌面</span>' +
//     '<div><span>当你将鼠标移动到任务栏的末端的“显示桌面”按钮时，会暂时查看桌面。</span>' + '<br>' +
//     '<input type="checkbox" id="sel" checked><label for="sel">使用Areo Peek预览桌面</label>' +
//     '</div></div>' + '<a href="">如何定义该任务栏？</a>' +
//     '    </div>'
// }
//     ,
//     {
//         '<li data-target="#prop_startMenu">开始菜单</li>': '<div id="prop_startMenu" style="display: none;">' +
//         '<div id="process">' +
//         '<span id="title">要自定义链接、图标和开始菜单中的<br>外观和行为，请单击“自定义”。</span>' + '<button>自定义...</button>' +
//         '<br><br>' + '电源按钮操作：' + '<select name="" id="">' +
//         '<option value="">关机</option>' +
//         '<option value="">注销</option>' +
//         '<option value="">切换用户</option></select>' +
//         '</div>' +
//         '    <div id="privacy">' +
//         '    <span>隐私</span>' +
//         '    <div>' +
//         '<input type="checkbox" checked>' +
//         '存储并显示最近在开始菜单中打开的程序<br>' +
//         '<input type="checkbox" checked>' +
//         '存储并显示最近在开始菜单和任务栏打开的项目' +
//         '</div>' +
//         '</div>' +
//         '<a href="">如何更改开始菜单的外观？</a>' +
//         '    </div>'
//     }
//     ,
//     {
//         '<li data-target="#prop_toolBar">工具栏</li>': '<div id="prop_toolBar" style="display: none;">' +
//         '<p>选择要添加到任务栏的工具栏</p>' +
//         '<div id="toolBar_style">' +
//         '<div style="width: 100%;">' +
//         '<input type="checkbox" name="" id="">地址<br/>' +
//         '<input type="checkbox" name="" id="">链接<br/>' +
//         '<input type="checkbox" name="" id="">TBC输入面板<br/>' +
//         '<input type="checkbox" name="" id="">LuDaShi<br>' +
//         '<input type="checkbox" name="" id="">桌面' +
//         '   </div>' +
//         '    </div>' +
//         '    </div>'
//     }
// ];
//
//
// var pt = new MenuProps(prop_taskBar);
// // for(var title in prop_taskBar){
// //     alert(title)
// // $(props_title).appendChild(title);
// // $(props_det).appendChild(this.props_detail[title]);
//
// pt.bindDOM();
// pt.bindEvent();
//
//
// /*/构造对象结束*/
//
// /*刷新操作开始*/
// $("#Display_menu #refresh").on("click", function () {
//     window.location.reload();
// })
//
//
// /*控制面板內容设置高度*/
// var allHeight = 0;
// $("#ControlBaner").children().each(function (i, e) {
//
//     allHeight += $(this).height();
//
// })
// $("#ControlBaner").css("height", allHeight / 2 + "px");
// /*-----------------------------*/
//
//
//
//
//
// /*构造主题对象*/
// function Theme(theme) {
//     this.desktopBg = theme.desktopBg;
//     this.winColor = theme.winColor;
//     this.voice = theme.voice;
//     this.prot_program = theme.prot_program;
// }
// Theme.prototype = {}
// /*/构造主题对象*/
//
//
// /*构造窗口菜单对象*/
// var arr = [
//     {
//         "组织": [
//             {
//                 "剪切": []
//             },
//             {
//                 "复制": []
//             },
//             {
//                 "粘贴": []
//             },
//             {
//                 "布局": [
//                     {
//                         "菜单栏": [{
//                             "a": [{
//                                 "dsad" : []
//                             },{
//                                 "asdas" : []
//                             }]
//                         }]
//                             // {
//                             //     "asda" : []
//                             // }]
//                     },
//                     {
//                         "细节窗格": []
//                     },
//                     {
//                         "预览窗格": []
//                     }
//                 ]
//             }
//         ]
//     }
// ];
//
// // ------测试用------
//
// function WinMenu(menuArr) {
//     this.menuArr = menuArr;
// }
// WinMenu.prototype = {
//
//
//     "bindDOM": function () {
//         var ul = $("<ul style='z-index: 1;'></ul>");
//         var left = 0;
//         for (var outMenu in this.menuArr) {
//             for (var menuName in this.menuArr[outMenu]) {
//
//                 var li = $("<li>" + menuName + "</li>");
//
//                 if (this.menuArr[outMenu][menuName].length > 0){
//                     var u = this.callBackQuery(this.menuArr[outMenu][menuName]);
//                     u.css("left" , left);
//                     left += 64;
//                     li.append(u);
//                 }
//
//                 ul.append(li);
//
//
//             }
//         }
//
//
//         return ul;
//     },
//     "callBackQuery": function (arr) {
//         var ul = $("<ul></ul>");
//         for (var innerMenu in arr) {
//             for (var menuName in arr[innerMenu]) {
//                 var li = $("<li>" + "&nbsp&nbsp&nbsp&nbsp&nbsp" + menuName + "</li>");
//
//                 if (arr[innerMenu][menuName].length > 0) {
//                     li = $("<li>" + "&nbsp&nbsp&nbsp&nbsp&nbsp" + menuName + "<img src='images/sub_menu.png'' align ='right'/>" + "</li>");
//                     li.append(this.callBackQuery(arr[innerMenu][menuName]));
//
//                 }
//                 ul.append(li);
//
//             }
//
//
//         }
//         var ulHeight = 0;
//         ul.children("li").each(function (i, e) {
//
//             ulHeight += 26;
//         });
//
//         ul.css("height", ulHeight);
//         return ul;
//     }
// }
//
// var winmenu = new WinMenu(arr);
// $("#ControlBaner").after(winmenu.bindDOM())
// /*/构造窗口菜单对象*/
// // var json = {"啊" : 4};
// // alert(json.啊)
//
//
//
// /*窗口左侧手风琴菜单*/
// function LeftMenu(menuArr) {
//     this.menuArr = menuArr;
//     // this.id = id;
// }
// var a = [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []}];
// LeftMenu.prototype = {
//     "postfix" : 13
//     ,
//     // "idPost" : 1
//     // ,
//     "init" : function () {
//         var leftFrame =$('<div class="navigation_pane" >\
//             <div id="left_main" class="left_main"></div>\
//             </div>');
//         // $(this.id).append(leftFrame);
//
//         for(var menuObj in this.menuArr) {
//             // console.log(menuObj)
//             if (!isNaN(menuObj)) {
//                 var title = this.menuArr[menuObj].title;
//
//                 //  var test =   $(' <img src=" '+title.imgUrl+' ">');
//                 // var test = $('<img src="'+title.imgUrl+'" '+' align ="left" height="16" width="16" />');
//
//
//                 var node = $('<div class="leftblankline"></div>\
//                                <div class="leftbox">\
//                                 <div class="leftbox_t"></div>\
//                                    <div class="leftbox_title">\
//                                       <a href="#" onclick="showmenu(' + this.postfix + ')"><img src="' + title.imgUrl + '">  ' + title.name + ' </a>\
//                                    </div>\
//                                         <div class="leftbox_m menu' + this.postfix + '" style="padding-left: 17px;">\
//                                         </div>\
//                           </div>');
//
//                 // console.log(node)
//                 // var node = $('<div class="leftblankline"></div>\
//                 //     <div class="leftbox">\
//                 //         <div class="leftbox_t"></div>\
//                 //             <div class="leftbox_title">\
//                 //                 <a href="#" onclick="showmenu('+this.postfix+')">\
//                 //     <img src="'+title.imgUrl+'" '+' align ="left" height="16" width="16" />'+title.name+'</a>\
//                 //                 </div>\
//                 //                     <div class="leftbox_m menu"'+this.postfix +'></div></div>');
//
//                 leftFrame.find("#left_main").append(node);
//
//                 if (this.menuArr[menuObj].content.length > 0) {
//                     this.bindDOM(leftFrame.find(".menu"+this.postfix), this.menuArr[menuObj].content);
//                 }
//                else this.postfix++;
//
//             }
//
//         }
//         // console.log(leftFrame)
//         /*前面的按数组对象写，然后对于触发对象另构建一个类（对象是一个键值对）*/
//         return leftFrame;
//
//
//
//     },
//     "bindDOM" : function (jqueryNode,arr) {
//         this.postfix++;
//         for(var menuObj in arr){
//             if(!isNaN(menuObj)) {
//                 var title = arr[menuObj].title;
//
//                 var node = $('<div class="leftblankline"></div>\
//                                <div class="leftbox">\
//                                 <div class="leftbox_t"></div>\
//                                    <div class="leftbox_title">\
//                                       <a href="#" onclick="showmenu(' + this.postfix + ')"><img src="' + title.imgUrl + '">  ' + title.name + ' </a>\
//                                    </div>\
//                                         <div class="leftbox_m menu' + this.postfix + '" style="padding-left: 17px">\
//                                         </div>\
//                           </div>');
//
//                 jqueryNode.append(node);
//
//                 if (arr[menuObj].content.length > 0) {
//                     this.bindDOM(jqueryNode.find(".menu"+this.postfix), arr[menuObj].content);
//                 }
//                else this.postfix++;
//             }
//         }
//
//     }
// }
// /*/窗口左侧手风琴菜单*/
//
//
// /*左侧手风琴菜单测试*/
// // var lf  = new LeftMenu([{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
// //     "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},
// //         {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
// //             "content" : []}]},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
// //     "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
// //         "content" : []},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
// //         "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},
// //             {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []}]}]}]}]);
// // $(document.body).append(lf.init());
// //
// // for(var item in Array.prototype ){
// //     console.log(item)
// // }
// // console.log(Array.prototype)
//
// /*窗口右侧对象*/
//
//
//
//
//
//
//
// /*构造窗口对象*/
// function Win(option) {
//     this.ID = option.ID;
//     this.triggerID = option.triggerID;
//     this.toolBar = new WinEve({"clickID": option.triggerID, "targetID": option.ID});
//     this.winMenu = new WinMenu(option.toolBarItems)
//     this.currentLocation = option.currentLocation;
//     this.seekLocation = option.seekLocation;
//     this.leftMenu = new LeftMenu(option.leftMenuItems);
// }
// Win.prototype = {
//     "baseFrame": function () {
//         return '<div id="' + this.ID.substring(1) + '" class="moveBar" name="windows" style="	height: 500px;' +
//             'width: 700px;' +
//             'display: none;' +
//             'position: absolute;' +
//             'top: 140px;' +
//             'left: 140px;">' +
//             '<div id="' + this.ID.substring(1) + '_banner" style="cursor: default;' +
//             'width: 100%;' +
//             'height: 30px;' +
//             'z-index: 999;"></div>' +
//             '<div class="windows_lt"></div>' +
//             '<div class="windows_rt"></div>' +
//             '<div class="windows_lb"></div>' +
//             '<div class="windows_rb"></div>' +
//             '<div class="windows_shadow"></div>' +
//
//             '<div class="Goback">' +
//             '<ul>' +
//             '<li id="Computer_back"></li>' +
//             '<li id="Computer_go"></li>' +
//             '</ul></div>' +
//             '<div class="address_bar"><input name="address_txt" type="text" value="' + this.currentLocation + '" id="address_txt" /></div>' +
//             '<div class="Search_bar">' +
//             '<input name="Search_txt" type="text" value="搜索' + this.seekLocation + '" id="Search_txt" /></div>' +
//
//             '<div id="' + this.ID.substring(1) + '_Content" class="Content">' + '</div>' + '<div class="onbutton">' +
//             '<ul>' +
//             '<li class="Minimization" onclick="min(this)"><a href="#"></a></li>' +
//             ' <li class="Reduction" onclick="Reduction(this)"><a href="#"></a></li>' +
//             ' <li class="Close" onclick="Close(this)"><a href="#"></a></li>' +
//             ' </ul>' +
//             ' </div>'
//     }
//
//     ,
//     "bindDOM": function () {
//
//
//         $(document.body).append(this.baseFrame());
//         $(this.ID + "_Content").append(this.winMenu.bindDOM()).append(this.leftMenu.init());
//         // $(this.ID + "_Content ul li").on("mouseenter",function () {
//         //     $(this).children("ul").css("display","block");
//         // }).on("mouseleave",function () {
//         //     $(this.ID+"_Content ul ul").css("display","none");
//         // });
//
//         this.toolBar.init();
//
//     }
// }
// /*!/构造窗口对象*/
//
// var win = new Win({
//     "triggerID": "#word", "ID": "#netAndInter", "currentLocation": "网络和internet", "seekLocation": "网络和internet",
//     "toolBarItems": [
//         {
//             "组织": [
//                 {
//                     "剪切": []
//                 },
//                 {
//                     "复制": []
//                 },
//                 {
//                     "粘贴": []
//                 },
//                 {
//                     "布局": [
//                         {
//                             "菜单栏": [{
//                                 "a": [{
//                                     "dsad" : []
//                                 },{
//                                     "asdas" : []
//                                 }]
//                             }]
//                             // {
//                             //     "asda" : []
//                             // }]
//                         },
//                         {
//                             "细节窗格": []
//                         },
//                         {
//                             "预览窗格": []
//                         }
//                     ]
//                 }
//             ]
//         }, {
//             "组织": [
//                 {
//                     "剪切": []
//                 },
//                 {
//                     "复制": []
//                 },
//                 {
//                     "粘贴": []
//                 },
//                 {
//                     "布局": [
//                         {
//                             "菜单栏": [{
//                                 "a": [{
//                                     "dsad" : []
//                                 },{
//                                     "asdas" : []
//                                 }]
//                             }]
//                             // {
//                             //     "asda" : []
//                             // }]
//                         },
//                         {
//                             "细节窗格": []
//                         },
//                         {
//                             "预览窗格": []
//                         }
//                     ]
//                 }
//             ]
//         }
//     ],
//     "leftMenuItems" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//         "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//             "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//                 "content" : []},
//             {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//                 "content" : []}]},
//             {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
//                 "content" : []}]},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
//         "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//             "content" : []},{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏"},
//             "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},
//                 {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//                     "content" : [{"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},"content" : []},
//                         {"title" : {"imgUrl" : "images/Collection.png","name" : "收藏夹"},
//                             "content" : []}]}]}]}]
// });
// win.bindDOM();
// // console.log(WinEve.prototype.winArr)
// // new WinEvent({"clickID" : "#word","targetID" : "#netAndInter"}).init()
//
//
// // var ctrlPanel = new WinEvent({"clickID" : "#links #ctrlPanel","targetID" : "#control_panel"});
// // ctrlPanel.init();
//
// /*右侧栏对象构建*/
// function RightContent() {
//
// }
// /*/右侧栏对象构建*/
//
//
//
// /*修改桌面背景*/


/*桌面图标移动*/

// $("#app li").each(function (i,ele) {
//
//     $(ele).css("top",i*56+(i+1)*20);
//     // e.onmousedown = function () {
//     //     alert(1)
//     //     document.onmouseover = function (event) {
//     //         var yais = e.clientY;
//     //         var xais = e.clientX;
//     //         $(e).css({
//     //             "left" : xais,
//     //             "top" : yais
//     //         })
//     //     }
//     // }
//
//
//
//     $(ele).children().on("mousedown",function (e) {
//         // var firstFlag = false;//记录第一次移动
//          e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
//              var xaxis = e.clientX,yaxis = e.clientY;
//          var xgrap = Math.abs(xaxis - parseInt($(ele).css("left")) + 30),
//              ygrap = Math.abs(yaxis - parseInt($(ele).css("top")) + 15);
//          // alert(xgrap);
//         // alert(parseInt($(ele).css("left")))
//         // alert(xaxis)
//         $(document).on("mousemove",function (e) {
//             var nowYaxis = e.clientY,nowXaxis = e.clientX;
//             var yMistate = Math.abs(nowYaxis - yaxis),
//                 xMistate = Math.abs(nowXaxis - xaxis),
//                 left = nowXaxis - xgrap +30,
//                 top = nowYaxis - ygrap +15
//             if(yMistate > 2 ||xMistate > 2){
//                     $(ele).css({
//                         "left": left,
//                         "top": top
//                     });
//                     if(left < 30)
//                         $(ele).css("left",40)
//                 if(top < 15)
//                     $(ele).css("top",20)
//             }
//             // var yaxis = e.clientY;
//             // var xaxis = e.clientX;
//             // var nowXaxis = parseInt($(ele).css("left")),
//             //     nowYaxis = parseInt($(ele).css("top"));
//             //
//             // var yMistate = Math.abs(nowYaxis - yaxis),
//             //     xMistate = Math.abs(nowXaxis - xaxis);
//             // if((yMistate > ($(ele).height() + 1) || xMistate > ($(ele).width() + 1))) {
//             //     firstFlag = true;
//             //
//             // }
//             // if(firstFlag){
//             //     $(ele).css({
//             //         "left": xaxis,
//             //         "top": yaxis
//             //     });
//             // }
//             e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
//         });
//     });
//     $(document).on("mouseup",function (e) {
//
//
//
//         $(document).off("mousemove");
//         e.stopPropagation();
//     })
//
// })
//
//
// logoMove(".Computer","#Computer_windows");
// logoMove(".network","#network_windows")
//
// /*桌面图标排序*/
// $("#sortName").on("click",function () {
//     var arr = [];
//     $("#app li").each(function (i,e) {
//
//     })
// });
// /*/桌面图标排序*/


/*所有程序*/
 [{"exe" : {"imgUrl" : "","name" : ""}},
     {"dir" : {"imgUrl" : "","name" : "","child" : [{"exe" : {"imgUrl" : "","name" : ""}}]}}]
 function allProgram(arr,$obj,flag,layer) {
     var paddingLeft = flag? layer*16:0;
     layer++;
     var ul = $('<ul style="list-style: none;display: none;"></ul>');
     $obj.append(ul);
     arr.forEach(function (val,index) {
        for(var title in val){
            var li = $('<li><a href="#"><img src="'+val[title].imgUrl+'" alt="" style="height: 16px;width: 18px;padding-left: '+paddingLeft+'px;">'+val[title].name+'</a></li>');
            ul.append(li);
            li.on("click",function (e) {
                e.stopPropagation();
            })
            if(title == "dir"){
                var children =  val[title].child;
                li.on("click",function (e) {
                   console.log($(this))
                        if ($(this).children("ul").css("display") == "none")
                            $(this).children("ul").css("display", "block");
                        else
                            $(this).children("ul").css("display", "none");
                        e.stopPropagation();

                });
                allProgram(children,li,true,1);
            }
        }
     });

 }












/*/所有程序*/
allProgram([{"exe" : {"imgUrl" : "images/computer.png","name" : "我的电脑"}},
    {"dir" : {"imgUrl" : "images/Folder.png","name" : "新建文件夹",
        "child" : [{"exe" : {"imgUrl" : "images/computer.png","name" : ""}},
            {"exe" : {"imgUrl" : "images/computer.png","name" : ""}}]}}],$("#allProgram"))
$("#allProgram").on("click",function (e) {
    $(this).children("ul")
        .css("display","block")
        .end().children("a")
        .css("display","none")
        .end().siblings()
        .css("display","none")
        .end().next(("#menuBackward"))
        .css("display","block");
    e.stopPropagation();
});
$("#menuBackward").on("click",function (e) {
    $(this).siblings().css("display","block");
    $(this).css("display","none");
    $("#allProgram").find("ul").css("display","none")
        .end().children("a")
        .css("display","block");
    e.stopPropagation();
})

/*/所有程序*/

// var a = 1;
// // 如果在Node的REPL环境，可以写成global.a
// // 或者采用通用方法，写成this.a
// alert(this.a) // 1
//
// let b = 2;
// alert(this == window) // undefined
// let [foo] = [];
// let [bar, foo] = [1];
// alert(foo)

// let [x = 1, y = x] = [2];
// console.log(x,y)
//
// let foo;
// ({foo} = {foo: 1}); // 成功
// console.log(foo)
// let arr1 = [1, 2, 3];
// let {0 : d , 1 : f ,2 : g,length : leng} = {0 : arr1[0],1 : arr1[1], 2 : arr1[2], length : arr1.length }
// console.log(leng)
// tag`First line\nSecond line`
//
// function tag(strings) {
//     console.log(strings[0]);
//     // "First line\\nSecond line"
// }
// console.log(String.raw`Hi\n${2+3}!`)
// console.log(Number.isInteger(Number("15")));
// console.log(typeof Number.EPSILON.toFixed(20))
// let [f,g,h] = "12345";
// console.log(h);
//     console.log(new Array(3))

// const dom = new Proxy({}, {
//     get(target, property) {
//         return function(attrs = {}, ...children) {
//             // console.log(property)
//             console.log(attrs)
//             const el = document.createElement(property);
//             for (let prop of Object.keys(attrs)) {
//                 el.setAttribute(prop, attrs[prop]);
//             }
//             for (let child of children) {
//                 if (typeof child === 'string') {
//                     child = document.createTextNode(child);
//                 }
//                 el.appendChild(child);
//             }
//             return el;
//         }
//     }
// });
// const el = dom.div({},
//     'Hello, my name is ',
//     dom.a({href: '//example.com'}, 'Mark'),
//     '. I like:',
//     dom.ul({},
//         dom.li({}, 'The web'),
//         dom.li({}, 'Food'),
//         dom.li({}, '…actually that\'s it')
//     )
// );
// console.log(el)


// var promise = new Promise(function(resolve, reject) {
//     // ... some code
//     var params = "params"
//     if (true){
//         resolve(params);
//         console.log("resolved")
//     } else {
//         reject();
//         console.log("rejected")
//     }
// });
// promise.then(function(value) {
//     // success
//     console.log(value+"  resolved after proceed")
// }, function(error) {
//     // failure
// });




// var name = "The Window";
// var object = {
//     name : "My Object",
//     getNameFunc : function(){
//         var that = this;
//         return function(){
//             return that.name;
//         };
//     }
// };
// alert(object.getNameFunc()());


// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
//     console.log('....')
// });
//
// promise.then(function() {
//     console.log('Resolved.');
// });
//
// console.log('Hi!');

function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            resolve(image);
            console.log("图片加载完成")
        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}
 loadImageAsync("images/Collection.png").then(function (val) {
     console.log(val)
 })