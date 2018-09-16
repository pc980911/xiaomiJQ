$(function () {
    //购物车效果

    $(".right").mouseenter(function () {
        $(".none").clearQueue().slideDown();
    });
    $(".right").mouseleave(function () {
        $(".none").clearQueue().slideUp();
    });

    //侧边选项卡

    let lis = $(".fd");
    let card = $(".fd ul");

    lis.mouseenter(function () {
        let i = $(this).index();
        card.css({"display": "none"});
        card.eq(i).css({"display": "block"});
    });
    lis.mouseleave(function () {
        card.css({"display": "none"});
    })

    //商品选项卡

    let btn = $(".home .head-h a");
    let box_j = $(".home .content .content_r .case");

    btn.mouseenter(function () {
        let i = $(this).index() - 1;
        box_j.css({"display": "none"}).eq(i).css({"display": "flex"});
        btn.removeClass("a_on").eq(i).addClass("a_on");

    });

    //轮播图

    let imgs = $(".zhe img");
    let dots = $(".banner .dot li");
    let left = $(".banner .leftBth");
    let right = $(".banner .rightBth");
    let banner = $(".zhe");
    let now = 0;
    // console.log(imgs, dots, left, right, banner);

    let t = setInterval(move, 2000);

    function move() {
        now++;
        if (now === dots.length) {
            now = 0;
        }
        dots.removeClass("spot").eq(now).addClass("spot");
        imgs.css({opacity: 0}).eq(now).css({opacity: 1});
    }

    function moveL() {
        now--;
        if (now < 0) {
            now = dots.length;
        }
        dots.removeClass("spot").eq(now).addClass("spot");
        imgs.css({opacity: 0}).eq(now).css({opacity: 1});
    }

    left.click(function () {
        moveL();
    });
    right.click(function () {
        move();
    });

    banner.mouseenter(function () {
        clearInterval(t);
    });
    banner.mouseleave(function () {
        t = setInterval(move, 2000);
    });
    dots.click(function () {
        let index = $(this).index();
        imgs.css("opacity", "0").eq(index).css("opacity", "1");
        dots.removeClass("spot").eq(index).addClass("spot");
    });

    //小米倒计时
    let spans = $(".phone .left .ph_nav .box");
    times(spans);

    function times(spans) {
        setInterval(setDate, 1000);

        function setDate() {
            let arr = fn();
            spans.get().forEach(function (e, i) {
                spans.eq(i).html(arr[i]);
            })
        }

        function fn() {
            let arr = [];
            let now = new Date();
            let future = new Date(2018, 9, 1, 18, 0, 0);
            let time = Math.floor((future.getTime() - now.getTime()) / 1000);

            let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
            arr.push(hour);
            let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / (60));
            arr.push(m);
            let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % (60));
            arr.push(s);

            return arr;
        }
    }

    // 小米闪购

    let btnR1 = $(".bolt .head-b .arrow-r");
    let btnL1 = $(".bolt .head-b .arrow-l");
    let box1 = $(".bolt .content .biger_c");
    let widthr1 = box1.width() / 2;
    let time1 = 0;
    btnL1.click(function () {
        time1++;
        if (time1 === 2) {
            time1 = 1;
        }
        box1.css("transform", `translate(${-widthr1 * time1}px)`);
    })
    btnR1.click(function () {
        time1--;
        if (time1 === -1) {
            time1 = 0;
        }
        box1.css("transform", `translate(${-widthr1 * time1}px)`);
    })

    //为你推荐
    let btnR = $(".rec .head-r .arrow-r");
    let btnR_c = $(".rec .head-r .arrow-r i");
    let btnL = $(".rec .head-r .arrow-l");
    let btnL_c = $(".rec .head-r .arrow-l i");
    let box = $(".rec .content-r .max_r");
    let widthr = box.width() / 3;
    // console.log(btnR, btnL, box, widthr);
    let time = 0;
    btnL.click(function () {
        btnR_c.css("color", "#b0b0b0");
        btnL_c.css("color", "#ff6700");
        time++;
        if (time === 3) {
            time = 2;
            btnL_c.css("color", "#e0e0e0");
        }
        box.css("transform", `translate(${-widthr * time}px)`);
    });

    btnR.click(function () {
        btnR_c.css("color", "#ff6700");
        btnL_c.css("color", "#b0b0b0");
        time--;
        if (time === -1) {
            btnR_c.css("color", "#e0e0e0");
            btnL_c.css("color", "#b0b0b0");
            time = 0;
        }
        box.css("transform", `translate(${-widthr * time}px)`)
    })

    // 置顶

    let back = $(".fixed .BTN");//获取返回顶部的小盒子
    back.click(function () {
        $(window).scrollTop(0);
    });
    $(window).scroll(function () {
        let bh = $(window).scrollTop();
        if (bh > 1200) {
            back.fadeIn("slow");
        } else {
            back.fadeOut("slow");
        }
    });

    //视频移入移出

    let imgv = $(".video .content-v .box-v img");
    let play = $(".video .content-v .box-v .play");

    imgv.mouseenter(function () {
        let i = $(this).parents().index();
        play.eq(i).css({border: "2px solid #ff6700", background: "#ff6700"})
    });
    imgv.mouseleave(function () {
        let i = $(this).parents().index();
        play.eq(i).css({border: "2px solid #fff", background: "rgba(0, 0, 0, 0.6)"})
    });

    //小轮播图

    function small(boxSm, widthSm, dotSm, leftBth, rightBth) {
        let flag = true;
        let nowS = 0;
        let nextS = 0;
        boxSm.first().css({left: "0"});

        function moveR() {
            if (nextS === boxSm.length - 1) {
                nextS=0;
            }
            nextS++;
            boxSm.eq(nextS).css({left: widthSm + "px"});
            boxSm.eq(nowS).animate({left: -widthSm}, 1000);
            boxSm.eq(nextS).animate({
                left: "0"
            } ,1000,function () {
                flag = true;
            });
            dotSm.eq(nowS).removeClass("uu-selected");
            dotSm.eq(nextS).addClass("uu-selected");
            nowS = nextS;
        }

        function moveL() {
            if (nextS === 0) {
                nextS=boxSm.length - 1;
            }
            nextS--;
            boxSm.eq(nextS).css({left: -widthSm + "px"});
            boxSm.eq(nowS).animate({left: widthSm+"px"},1000);
            boxSm.eq(nextS).animate({left: "0"}, 1000,function () {
                flag = true;
            });
            dotSm.eq(nowS).removeClass("uu-selected");
            dotSm.eq(nextS).addClass("uu-selected");
            nowS = nextS;
        }

        leftBth.click(function () {
            if (!flag) {
                return;
            }
            if (nextS === 0) {
                return;
            }
            flag=false;
            moveL();

        });
        rightBth.click(function () {
            if (!flag) {
                return;
            }
            if (nextS === boxSm.length - 1) {
                return;
            }
            flag=false;
            moveR();
        });

        // 鼠标点击轮播点
        dotSm.click(function () {
            let i = $(this).index();
            boxSm.siblings().css({left: widthSm + "px"}).eq(i).css({left: "0"});
            dotSm.siblings().removeClass("uu-selected").eq(i).addClass("uu-selected");
            nextS = i;
            nowS = i;
        })
    }

    let boxSm = $(".nav .content-o .box-o-1 .biger .navSm");
    let widthSm = boxSm.width();
    let dotSm = $(".box-o-1 #uu ul li");
    let leftBth = $(".nav .content-o .box-o-1 .o-leftBth");
    let rightBth = $(".nav .content-o .box-o-1 .o-rightBth");
    small(boxSm, widthSm, dotSm, leftBth, rightBth);

    let boxSm1 = $(".nav .content-o .box-o-2 .biger .navSm");
    let widthSm1 = boxSm.width();
    let dotSm1 = $(".box-o-2 #uu ul li");
    let leftBth1 = $(".nav .content-o .box-o-2 .o-leftBth");
    let rightBth1 = $(".nav .content-o .box-o-2 .o-rightBth");
    small(boxSm1, widthSm1, dotSm1, leftBth1, rightBth1);

    let boxSm2 = $(".nav .content-o .box-o-3 .biger .navSm");
    let widthSm2 = boxSm.width();
    let dotSm2 = $(".box-o-3 #uu ul li");
    let leftBth2 = $(".nav .content-o .box-o-3 .o-leftBth");
    let rightBth2 = $(".nav .content-o .box-o-3 .o-rightBth");
    small(boxSm2, widthSm2, dotSm2, leftBth2, rightBth2);

    let boxSm3 = $(".nav .content-o .box-o-4 .biger .navSm");
    let widthSm3 = boxSm.width();
    let dotSm3 = $(".box-o-4 #uu ul li");
    let leftBth3 = $(".nav .content-o .box-o-4 .o-leftBth");
    let rightBth3 = $(".nav .content-o .box-o-4 .o-rightBth");
    small(boxSm3, widthSm3, dotSm3, leftBth3, rightBth3);


});