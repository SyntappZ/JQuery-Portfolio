$(document).ready(()=>{

    
let contact = $('#cBtn');
    contact.hover(()=>{
    
        contact.animate({
            left:-300,
            top:-300,
            width:400,
            height:600,
        }, 400,).css({
            'background-color': 'transparent',
            'border': 'solid #FF8F00 1px',
            'color': '#FFf',
            'cursor':'default'
            
        });
        $('.hoverContact').css({
            'display': 'block',
        })
    })


let proBtn = $('#projectBtn');
let homeBtn = $('#homeBtn');
let aboutBtn = $('#aboutBtn');
    proBtn.click(()=>{
        pageBorder(proBtn, homeBtn, aboutBtn)
        imgScale('scale(1)', 0); 
        frontFadeOut(0);
        imgpageSlide(2000, 600);
        coverSlide(-1000, 1100);
        projectEdge(0, 2300);
        
    })
    homeBtn.click(()=>{
        pageBorder(homeBtn, proBtn, aboutBtn)
        
    })
    aboutBtn.click(()=>{
        pageBorder(aboutBtn, proBtn, homeBtn)
        imgScale('scale(1)', 0); 
        frontFadeOut(0);
        imgpageSlide(2000, 600);
        setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), 1400)
        aboutBar(40, 1600)
    })


    
            
       
    function imgScale(scale){
        $('#imgpage').css('transform', scale);
    }
    function frontFadeOut(fODel){
        $('.frontWrap').delay(fODel).fadeOut(600);
    }
    function frontFadeIn(fIDel){
        $('.frontWrap').delay(fIDel).fadeIn(600);
    }
    function imgpageSlide(dir, iSDel){
        $('#imgpage').delay(iSDel).animate({left:dir})
    }
    function coverSlide(x, cSDel){
        $('#cover').delay(cSDel).animate({top:x})
    }
    function projectEdge(edge, eDel){
        $('#leftEdge').delay(eDel).animate({left:edge},300);
        $('#rightEdge').delay(eDel).animate({right:edge},300);
    }


    function pageBorder(btn1, btn2, btn3){
        btn1.css('border-bottom', 'solid 4px #FF8F00')
        btn2.css('border-bottom', 'none')
        btn3.css('border-bottom', 'none')
}

      

    //about

    function aboutInfo(mIscale, op){
        $('.myInfo').css({
            'transform': mIscale,
            'opacity': op
        });
    }

    function aboutBar(bot, aBDel){
        $('.infoBar').delay(aBDel).animate({bottom: bot})
    }
    



})