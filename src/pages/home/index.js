/* eslint-disable */
import './index.less';

import $ from "jquery/dist/jquery.min.js"

$(window).load(function(){
    var windowHeight = document.documentElement.clientHeight;
    
    carousel_fn();
    returnTop_fn();
    sectionOneAnimate_fn();
    sectionTwoAnimate_fn();
    sectionThreeAnimate_fn();
    sectionFourAnimate_fn();
    sectionFiveAnimate_fn();

    function carousel_fn(){
        var carousel_wrap = $('.carousel_wrap')
        var carousel_item = $('.carousel_item');
        var arrLeft = $('.carousel_wrap>.arrLeft')
        var arrRight = $('.carousel_wrap>.arrRight')
        var bannerArr = ['p1', 'p2', 'p3 carousel_active', 'p4', 'p5'];
        var flag = true;
        var timer = null;
        init();
        // autoCarousel();

        //给轮播容器绑定移入移出事件，显示隐藏箭头
        carousel_wrap.on('mouseover', function () {
            clearInterval(timer);
            arrLeft.css('display', 'block')
            arrRight.css('display', 'block')
        })

        carousel_wrap.on('mouseout', function () {
            autoCarousel();
            arrLeft.css('display', 'none')
            arrRight.css('display', 'none')
        })

        //点击右箭头
        arrRight.on('click', function () {
            if (flag === true) {
                flag = false;
                clearInterval(timer)
                bannerArr.unshift(bannerArr.pop());
                init()
                setTimeout(function () {
                    flag = true;
                }, 500)
            } else {
                return
            }

        })
        //点击左箭头
        arrLeft.on('click', function () {
            if (flag === true) {
                flag = false;
                clearInterval(timer)
                bannerArr.push(bannerArr.shift());
                init()
                setTimeout(function () {
                    flag = true;
                }, 500)
            } else {
                return
            }

        })

        function autoCarousel() {
            timer = setInterval(function () {
                bannerArr.unshift(bannerArr.pop());
                init()
            }, 2000)
        }

        function init() {

            for (var i = 0; i < carousel_item.length; i++) {
                carousel_item.eq(i).removeClass();
                carousel_item.eq(i).addClass("carousel_item");
                carousel_item.eq(i).addClass(bannerArr[i]);
            }
        }
    }

    function sectionOneAnimate_fn(){
        var wrap_title_h1 = $('.wrap_section_one>.section_title>h1')
        var wrap_title_div = $('.wrap_section_one>.section_title>div')

        var wrap_middle_img = $('.wrap_section>.wrap_middle>a')
        var wrap_left_img = $('.wrap_section>.wrap_left>a')
        var wrap_right_img = $('.wrap_section>.wrap_right>a')
        var wrap_left_info = $('.wrap_section>.wrap_left>.info_box')
        var wrap_left_info_p = wrap_left_info.find('p')
        var wrap_left_info_div = wrap_left_info.find('div')
        var wrap_middle_info_box = $('.wrap_section>.wrap_middle>.info_box')
        var wrap_middle_info_one_p = wrap_middle_info_box.eq(0).find('p')
        var wrap_middle_info_one_div = wrap_middle_info_box.eq(0).find('div')
        var wrap_middle_info_two_p = wrap_middle_info_box.eq(1).find('p')
        var wrap_middle_info_two_div = wrap_middle_info_box.eq(1).find('div')
        var wrap_right_info = $('.wrap_section>.wrap_right>.info_box')
        var wrap_right_info_p = wrap_right_info.find('p')
        var wrap_right_info_div = wrap_right_info.find('div')

        var wrap_middle_arr = ['wrap_middle_img1', 'wrap_middle_img2', 'wrap_middle_img3']
        var wrap_left_right_arr = ['wrap_left_img', 'wrap_right_img']
        var wrap_title_arr = ['wrap_title_toBottom', 'wrap_title_letter']

        for (var i = 0; i < wrap_middle_img.length; i++) {
            wrap_middle_img.eq(i).addClass(wrap_middle_arr[i])
        }
        wrap_left_img.addClass(wrap_left_right_arr[0])
        wrap_right_img.addClass(wrap_left_right_arr[1])
        wrap_left_info.css('left',0)
        wrap_left_info.css('opacity',1)
        wrap_title_h1.addClass(wrap_title_arr[0])
        wrap_title_div.addClass(wrap_title_arr[1])

        
        wrap_left_img.on('mouseover', function () {
            $(this).css('opacity',.7)
            wrap_left_info_p.css('color', '#b4a078')
            wrap_left_info_div.css('width', '100px')
        })
        wrap_left_img.on('mouseout', function () {
            $(this).css('opacity', 1)
            wrap_left_info_p.css('color','black')
            wrap_left_info_div.css('width','0px')

        })

        wrap_middle_img.eq(1).on('mouseover', function () {
            $(this).css('opacity', .7)
            wrap_middle_info_one_p.css('color', '#b4a078')
            wrap_middle_info_one_div.css('width', '100px')
        })
        wrap_middle_img.eq(1).on('mouseout', function () {
            $(this).css('opacity', 1)
            wrap_middle_info_one_p.css('color','black')
            wrap_middle_info_one_div.css('width','0px')
        })

        wrap_middle_img.eq(2).on('mouseover', function () {
            $(this).css('opacity', .7)
            wrap_middle_info_two_p.css('color', '#b4a078')
            wrap_middle_info_two_div.css('width', '100px')
        })
        wrap_middle_img.eq(2).on('mouseout', function () {
            $(this).css('opacity', 1)
            wrap_middle_info_two_p.css('color','black')
            wrap_middle_info_two_div.css('width','0px')
        })

        wrap_right_img.on('mouseover', function () {
            $(this).css('opacity', .7)
            wrap_right_info_p.css('color', '#b4a078')
            wrap_right_info_div.css('width', '100px')
        })
        wrap_right_img.on('mouseout', function () {
            $(this).css('opacity', 1)
            wrap_right_info_p.css('color','black')
            wrap_right_info_div.css('width','0px')

        })
    }


    function sectionTwoAnimate_fn(){
        
        var wrap2_left_arr = ['wrap2_left_top_img', 'wrap2_left_bottom_img', 'wrap2_right_top_img', 'wrap2_right_bottom_img']
        var wrap2_left_mouse_arr = ['wrap2_left_top_img_mouse', 'wrap2_left_bottom_img_mouse', 'wrap2_right_top_img_mouse', 'wrap2_right_bottom_img_mouse']
        var wrap2_left_info_arr = ['wrap2_left_top_info', 'wrap2_left_bottom_info', 'wrap2_right_top_info', 'wrap2_right_bottom_info']
        var wrap2_left_mask_arr = ['wrap2_left_bottom_mask', 'wrap2_right_right_mask']
        var wrap2_title_arr = ['wrap_title_toBottom', 'wrap_title_letter']
        var wrap2_title_h1 = $('.wrap_section_two>.section_title>h1')
        var wrap2_title_div = $('.wrap_section_two>.section_title>div')
        var wrap2_left_top_img = $('.wrap_section>.wrap_left>.left_top>a')
        var wrap2_left_bottom_img = $('.wrap_section>.wrap_left>.left_bottom>a')
        var wrap2_right_top_img = $('.wrap_section>.wrap_right>.right_left>a').eq(0)
        var wrap2_right_bottom_img = $('.wrap_section>.wrap_right>.right_left>a').eq(1)
        var wrap2_left_top_info = $('.wrap_section>.wrap_left>.left_top>.info_box');
        var wrap2_left_bottom_info = $('.wrap_section>.wrap_left>.left_bottom>.info_box');
        var wrap2_right_top_info = $('.wrap_section>.wrap_right>.right_right>.info_box').eq(0)
        var wrap2_right_bottom_info = $('.wrap_section>.wrap_right>.right_right>.info_box').eq(1)
        var wrap2_left_top_info_p1 = wrap2_left_top_info.find('p').eq(0)
        var wrap2_left_top_info_div = wrap2_left_top_info.find('div')
        var wrap2_left_bottom_info_p1 = wrap2_left_bottom_info.find('p').eq(0)
        var wrap2_left_bottom_info_div = wrap2_left_bottom_info.find('div')
        var wrap2_right_top_info_p1 = wrap2_right_top_info.find('p').eq(0)
        var wrap2_right_top_info_div = wrap2_right_top_info.find('div')
        var wrap2_right_bottom_info_p1 = wrap2_right_bottom_info.find('p').eq(0)
        var wrap2_right_bottom_info_div = wrap2_right_bottom_info.find('div')

        var wrap2 = $('.wrap_section_two')
        var wrap2_left_bottom_mask = $('.wrap_section>.wrap_left .bgMask')
        var wrap2_right_right_mask = $('.wrap_section>.wrap_right .bgMask')
        var wrap2_left_bottom_mask_div = $('.wrap_section>.wrap_left .bgMask>div')
        var wrap2_right_right_mask_div = $('.wrap_section>.wrap_right .bgMask>div')

        $(window).on('scroll', function () {
            var wrap2_top = wrap2.offset().top;
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop + windowHeight >= wrap2_top) {
                setTimeout(sectionTwoAnimate, 1000)

            }
        })

        function sectionTwoAnimate(){
            wrap2_left_top_img.addClass(wrap2_left_arr[0])
            wrap2_left_bottom_img.addClass(wrap2_left_arr[1])
            wrap2_right_top_img.addClass(wrap2_left_arr[2])
            wrap2_right_bottom_img.addClass(wrap2_left_arr[3])
            wrap2_left_top_info.addClass(wrap2_left_info_arr[0])
            wrap2_left_bottom_info.addClass(wrap2_left_info_arr[1])
            wrap2_right_top_info.addClass(wrap2_left_info_arr[2])
            wrap2_right_bottom_info.addClass(wrap2_left_info_arr[3])
            wrap2_left_bottom_mask.addClass(wrap2_left_mask_arr[0])
            wrap2_right_right_mask.addClass(wrap2_left_mask_arr[1])
            wrap2_title_h1.addClass(wrap2_title_arr[0])
            wrap2_title_div.addClass(wrap2_title_arr[1])
        }
        


        wrap2_left_top_img.on('mouseover', function () {
            $(this).addClass(wrap2_left_mouse_arr[0])
            wrap2_left_top_info_p1.css('color','#b4a078')
            wrap2_left_top_info_div.css('width', '100px')
            wrap2_left_top_info_div.css('background-color', '#b4a078')
        })
        wrap2_left_top_img.on('mouseout', function () {
            $(this).removeClass(wrap2_left_mouse_arr[0])
            wrap2_left_top_info_p1.css('color', 'black')
            wrap2_left_top_info_div.css('width', '50px')
            wrap2_left_top_info_div.css('background-color', 'black')
        })
        wrap2_left_bottom_img.on('mouseover', function () {
            $(this).addClass(wrap2_left_mouse_arr[1])
            wrap2_left_bottom_mask_div.css('width', '100%')
            wrap2_left_bottom_info_p1.css('color', '#b4a078')
            wrap2_left_bottom_info_div.css('background-color', '#b4a078')
            wrap2_left_bottom_info_div.css('width', '100px')

        })
        wrap2_left_bottom_img.on('mouseout', function () {
            $(this).removeClass(wrap2_left_mouse_arr[1])
            wrap2_left_bottom_mask_div.css('width', '0')
            wrap2_left_bottom_info_p1.css('color', '#fff')
            wrap2_left_bottom_info_div.css('background-color', '#fff')
            wrap2_left_bottom_info_div.css('width', '50px')
        })
        wrap2_right_top_img.on('mouseover', function () {
            $(this).addClass(wrap2_left_mouse_arr[2])
            wrap2_right_right_mask_div.css('height', '100%')
            wrap2_right_top_info_p1.css('color', '#b4a078')
            wrap2_right_top_info_div.css('background-color', '#b4a078')
            wrap2_right_top_info_div.css('width', '100px')
        })
        wrap2_right_top_img.on('mouseout', function () {
            $(this).removeClass(wrap2_left_mouse_arr[2])
            wrap2_right_right_mask_div.css('height', '0')
            wrap2_right_top_info_p1.css('color', '#fff')
            wrap2_right_top_info_div.css('background-color', '#fff')
            wrap2_right_top_info_div.css('width', '50px')
        })
        wrap2_right_bottom_img.on('mouseover', function () {
            $(this).addClass(wrap2_left_mouse_arr[3])
            wrap2_right_bottom_info_p1.css('color', '#b4a078')
            wrap2_right_bottom_info_div.css('background-color', '#b4a078')
            wrap2_right_bottom_info_div.css('width', '100px')
        })
        wrap2_right_bottom_img.on('mouseout', function () {
            $(this).removeClass(wrap2_left_mouse_arr[3])
            wrap2_right_bottom_info_p1.css('color', '#fff')
            wrap2_right_bottom_info_div.css('background-color', '#fff')
            wrap2_right_bottom_info_div.css('width', '50px')
        })

        

    }

    function sectionThreeAnimate_fn(){
        var wrap3_title_arr = ['wrap_title_toBottom', 'wrap_title_letter']
        var wrap3 = $(".wrap_section_three");
        var wrap3_title_h1 = $('.wrap_section_three>.section_title>h1')
        var wrap3_title_div = $('.wrap_section_three>.section_title>div')
        var wrap3_imgBox = $('.wrap_section_three>.section_img_box')
        var wrap3_imgBox_img = $('.wrap_section_three>.section_img_box>a>img')

        wrap3_imgBox.on('mouseover', function () {
            wrap3_imgBox_img.css('transform','scale(1)')
            wrap3_imgBox_img.css('opacity',.8) 
        })
        wrap3_imgBox.on('mouseout', function () {
            wrap3_imgBox_img.css('transform', 'scale(.95)')
            wrap3_imgBox_img.css('opacity', 1) 
        })

        $(window).on('scroll', function () {
            var wrap3_top = wrap3.offset().top;
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop + windowHeight >= wrap3_top) {
                setTimeout(sectionThreeAnimate, 1000)

            }
        })

        function sectionThreeAnimate() {
            wrap3_imgBox_img.css('transition', "1s ease-in-out")
            wrap3_imgBox_img.css('transform', 'scale(.95)')
            wrap3_imgBox_img.css('opacity', 1) 
            wrap3_title_h1.addClass(wrap3_title_arr[0])
            wrap3_title_div.addClass(wrap3_title_arr[1])
        }

    }

    function sectionFourAnimate_fn(){
        var wrap4_title_arr = ['wrap_title_toBottom', 'wrap_title_letter']
        var wrap4 = $(".wrap_section_four");
        var wrap4_title_h1 = $('.wrap_section_four>.section_title>h1')
        var wrap4_title_div = $('.wrap_section_four>.section_title>div')
        var wrap4_imgBox = $('.wrap_section_four>.section_img_box')
        var wrap4_imgBox_img = $('.wrap_section_four>.section_img_box>a>img')

        wrap4_imgBox.on('mouseover', function () {
            wrap4_imgBox_img.css('transform','scale(1)')
            wrap4_imgBox_img.css('opacity',.8) 
        })
        wrap4_imgBox.on('mouseout', function () {
            wrap4_imgBox_img.css('transform', 'scale(.95)')
            wrap4_imgBox_img.css('opacity', 1) 
        })

        $(window).on('scroll', function () {
            var wrap4_top = wrap4.offset().top;
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop + windowHeight >= wrap4_top) {
                setTimeout(sectionFourAnimate, 1000)

            }
        })

        function sectionFourAnimate() {
            wrap4_imgBox_img.css('transition', "1s ease-in-out")
            wrap4_imgBox_img.css('transform', 'scale(.95)')
            wrap4_imgBox_img.css('opacity', 1) 
            wrap4_title_h1.addClass(wrap4_title_arr[0])
            wrap4_title_div.addClass(wrap4_title_arr[1])
        }

    }

    function sectionFiveAnimate_fn(){
        var wrap5_title_arr = ['wrap_title_toBottom', 'wrap_title_letter']
        var wrap5_title_h1 = $('.wrap_section_five>.section_title>h1')
        var wrap5_title_div = $('.wrap_section_five>.section_title>div')
        var wrap5 = $('.wrap_section_five');
        var wrap5_left = wrap5.find('.section_img_box_left')
        var wrap5_right = wrap5.find('.section_img_box_right')
        var wrap5_left_mask = wrap5.find('.section_img_box_left .mask')
        var wrap5_right_mask = wrap5.find('.section_img_box_right .mask')
        var wrap5_left_img = wrap5.find('.section_img_box_left>a>img')
        var wrap5_left_p = wrap5.find('.section_img_box_left>a>p')
        var wrap5_left_span = wrap5.find('.section_img_box_left>a>span')
        var wrap5_right_img = wrap5.find('.section_img_box_right>a>img')
        var wrap5_right_p = wrap5.find('.section_img_box_right>a>p')
        var wrap5_right_span = wrap5.find('.section_img_box_right>a>span')

        wrap5_left.on('mouseover', function () {
            wrap5_left_mask.css("width",'100%');
            wrap5_left_mask.css("height", '100%');
            wrap5_left_img.css('transform',"scale(1.1)")
            wrap5_left_p.css('transition', "color .5s ease-in-out")
            wrap5_left_p.css('color', "#b4a078")
            wrap5_left_span.css('background-color', "#b4a078")
        })
        wrap5_left.on('mouseout', function () {
            wrap5_left_mask.css("width", '400px');
            wrap5_left_mask.css("height", '100px');
            wrap5_left_img.css('transform', "scale(1)")
            wrap5_left_p.css('color', "#fff")
            wrap5_left_span.css('background-color', "#fff")
        })
        wrap5_right.on('mouseover', function () {
            wrap5_right_mask.css("width",'100%');
            wrap5_right_mask.css("height", '100%');
            wrap5_right_img.css('transform',"scale(1.1)")
            wrap5_right_p.css('transition', "color .5s ease-in-out")
            wrap5_right_p.css('color', "#b4a078")
            wrap5_right_span.css('background-color', "#b4a078")
        })
        wrap5_right.on('mouseout', function () {
            wrap5_right_mask.css("width", '400px');
            wrap5_right_mask.css("height", '100px');
            wrap5_right_img.css('transform', "scale(1)")
            wrap5_right_p.css('color', "#fff")
            wrap5_right_span.css('background-color', "#fff")
        })

        $(window).on('scroll', function () {
            var wrap5_top = wrap5.offset().top;
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop + windowHeight >= wrap5_top) {
                setTimeout(sectionFiveAnimate, 1000)

            }
        })

        function sectionFiveAnimate() {
            wrap5_title_h1.addClass(wrap5_title_arr[0])
            wrap5_title_div.addClass(wrap5_title_arr[1])
        }
    }

    function returnTop_fn(){
        var returnTop=$('.returnTop');
        $(window).on('scroll',function(){
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 100) {
                returnTop.css('opacity','.5')
            }else{
                returnTop.css('opacity','0')
            }
        })
        
        returnTop.on('click', function () {
            clearInterval(timer)
            var scrollTop = document.documentElement.scrollTop;
            var num = 0;
            num = scrollTop;
            var timer = null;
            if (scrollTop > 100) {
                timer = setInterval(function () {
                    num -= Math.ceil(num / 10);
                    if (num <= 0) {
                        clearInterval(timer)
                    } else {
                        document.documentElement.scrollTop = num;
                    }
                }, 10)
            }

        })
    }

    
})


