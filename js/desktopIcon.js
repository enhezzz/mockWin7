/**
 * Created by 105 on 2017/7/31.
 */
    $("#app li").each(function (i,ele) {
        var fold = parseInt((i+1)*76/(window.innerHeight - 42));
        // console.log(window.innerHeight)
    $(ele).css({
            "top": i * 56 + (i + 1) * 20,
            "left": fold * 58 + 40
        }
    );
    // e.onmousedown = function () {
    //     alert(1)
    //     document.onmouseover = function (event) {
    //         var yais = e.clientY;
    //         var xais = e.clientX;
    //         $(e).css({
    //             "left" : xais,
    //             "top" : yais
    //         })
    //     }
    // }



    $(ele).children().on("mousedown",function (e) {
        // var firstFlag = false;//记录第一次移动
        e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
        var xaxis = e.clientX,yaxis = e.clientY;
        var xgrap = Math.abs(xaxis - parseInt($(ele).css("left")) + 30),
            ygrap = Math.abs(yaxis - parseInt($(ele).css("top")) + 15);
        // alert(xgrap);
        // alert(parseInt($(ele).css("left")))
        // alert(xaxis)
        $(document).on("mousemove.myPlugin",function (e) {
            var nowYaxis = e.clientY,nowXaxis = e.clientX;
            var yMistate = Math.abs(nowYaxis - yaxis),
                xMistate = Math.abs(nowXaxis - xaxis),
                left = nowXaxis - xgrap +30,
                top = nowYaxis - ygrap +15
            if(yMistate > 2 ||xMistate > 2){
                $(ele).css({
                    "left": left,
                    "top": top
                });
                if(left < 30)
                    $(ele).css("left",40);
                if(top < 15)
                    $(ele).css("top",20);
                if(top > (window.innerHeight + 15 -110))
                    $(ele).css("top",window.innerHeight + 15 -110);
            }
            // var yaxis = e.clientY;
            // var xaxis = e.clientX;
            // var nowXaxis = parseInt($(ele).css("left")),
            //     nowYaxis = parseInt($(ele).css("top"));
            //
            // var yMistate = Math.abs(nowYaxis - yaxis),
            //     xMistate = Math.abs(nowXaxis - xaxis);
            // if((yMistate > ($(ele).height() + 1) || xMistate > ($(ele).width() + 1))) {
            //     firstFlag = true;
            //
            // }
            // if(firstFlag){
            //     $(ele).css({
            //         "left": xaxis,
            //         "top": yaxis
            //     });
            // }
            e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
        });
    });
    $(document).on("mouseup",function (e) {



        $(document).off(".myPlugin");
        e.stopPropagation();
    });

});
/*桌面图标移动防触发打开---------------------------------------------------------------------------------------------*/
function logoMove(clickSrc,targetSrc) {
    $(clickSrc).on("mousedown",function (e) {
        e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
        var preXaxis = e.clientX;
        var preYaxis = e.clientY;
        $(this).click(function (e) {
            Folder_Record_Computer = ""
            if (Folder_Record_recycle == "" && Folder_Record_Computer == "" && Folder_Record_network == "") {
                $('#Folder').css("border", "");
            }
            else {
            }


            var nowXaxis = e.clientX, nowYaxis = e.clientY;

            system_work = "#Computer_windows";
            // alert(preYaxis == nowYaxis && preXaxis == nowXaxis)
            if(preYaxis == nowYaxis && preXaxis == nowXaxis) {
                $(targetSrc).css("display", "block");
                $(targetSrc).css("z-index", "100");
            }
            else{
                $(targetSrc).css("display", "none");
                $(targetSrc).css("z-index", "50");
            }
            e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
        });
    });
}
/*/桌面图标移动-----------------------------------------------------------------------------------*/


logoMove(".Computer","#Computer_windows");
logoMove(".network","#network_windows");
logoMove(".recycle","#recycle_windows");

/*桌面图标排序------------------------------------------------------------------------------------*/
$("#sortName").on("click",function (e) {
    e.stopPropagation? e.stopPropagation() :　e.cancelBubble = true;
    Hidden_menu();
    // $("#app li").each(function (i,e) {
    //     $
    // })
    var desktopApp = $("#app li").toArray();
    // console.log(desktopApp)
    for(var i = 1 ; i < desktopApp.length ; i ++ ){
        for(var j = 0 ; j < desktopApp.length - i ; j ++ ){

            // console.log($(desktopApp[j]).children("a")[0].innerText > $(desktopApp[j+1]).children("a")[0].innerText)
            if ($(desktopApp[j]).children("a")[0].innerText > $(desktopApp[j+1]).children("a")[0].innerText){
                var temp = desktopApp[j];
                desktopApp[j] = desktopApp[j+1];
                desktopApp[j+1] = temp;
            }
        }
    }
    $(desktopApp).each(function (i,ele) {
        var fold = parseInt((i+1)*76/(window.innerHeight - 42));
        $(ele).css({
                "top": i * 56 + (i + 1) * 20,
                "left": fold * 58 + 40
            }
        );
    });

});
/*/桌面图标排序*/