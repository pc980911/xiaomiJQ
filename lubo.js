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
    // btn.triggerHandler("mouseenter");

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
    })


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

    // let back = $(".fixed .BTN");//获取返回顶部的小盒子
    // $(window).scroll(function () {
    //     let bh = back.scroll();
    //     console.log(bh);
    //     if (bh > 1200) {
    //         back.fadeIn("slow", function () {
    //
    //         })
    //     } else {
    //         back.fadeOut("slow", function () {
    //
    //         })
    //     }
    })
})