$(document).ready(function(){
    // 첫번째 애니메이션
    let introduce = "문제해결을 즐기고 꾸준히 성장하는 Front-End Developer 이철호 입니다."
    setTimeout(() =>{
        for(let i =0;i<introduce.length;i++){
            setTimeout(() =>{
                $('.introduce').append(introduce[i])
            },i * 100)
        }
    },2500)
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        // 헤더 등장
        if($(window).scrollTop() >= $('.second_section').offset().top){
            $('.header').css({display: "flex"})
        }else{
            $('.header').css({display: "none"})
        }
        // About Me
        if($(window).scrollTop() >= $('.introduce').offset().top){
            $('.second_section .about_profile').css({transform: "translatex(0%)"})
            $('.second_section .about_info').css({transform: "translatex(0)"})
        }
        else{
            $('.second_section .about_profile').css({transform: "translatex(-100%)"})
            $('.second_section .about_info').css({transform: "translatex(100%)"})
        }

        // skills 효과
        if($(window).scrollTop() >= $('.about_desc').offset().top){
            for(let i=0;i<$('.skills_box').length;i++){
                setTimeout(()=>{
                    $('.skills_box').eq(i).css({transform: 'translateY(0px)',opacity: "1"})
                },100 * i)
            }
        }else{
            $('.skills_box').css({transform: 'translateY(30px)',opacity: ".2"})
        }
        // 첫번째 포트폴리오
        if($(window).scrollTop() >= $('.third_section h2').offset().top){
            $('.fourth_section .prot_img_box').css({transform: "translatex(0%)"})
            $('.fourth_section .prot_info_box').css({transform: "translatex(0)"})
        }
        else{
            $('.fourth_section .prot_img_box').css({transform: "translatex(-100%)"})
            $('.fourth_section .prot_info_box').css({transform: "translatex(100%)"})
        }
        // 두번째 포트폴리오
        if($(window).scrollTop() >= $('.fourth_section .prot_box').offset().top){
            $('.fifth_section .prot_img_box').css({transform: "translatex(0%)"})
            $('.fifth_section .prot_info_box').css({transform: "translatex(0)"})
        }
        else{
            $('.fifth_section .prot_img_box').css({transform: "translatex(-100%)"})
            $('.fifth_section .prot_info_box').css({transform: "translatex(100%)"})
        }
        // contact 효과
        if($(window).scrollTop() >= $('.fifth_section .prot_box').offset().top){
            for(let i=0;i<$('.footer .email_box a').length;i++){
                setTimeout(()=>{
                    $('.footer .email_box a').eq(i).css({transform: 'translateY(0px)',opacity: "1"})
                },100 * i)
            }
        }else{
            $('.footer .email_box a').css({transform: 'translateY(30px)',opacity: ".2"})
        }
    })
    

})