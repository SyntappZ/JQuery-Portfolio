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

let boxS = '2px 2px 10px 5px rgba(0, 0, 0, 0.137)';
let proBtn = $('#projectBtn');
let homeBtn = $('#homeBtn');
let aboutBtn = $('#aboutBtn');
    proBtn.click(()=>{
        if( $('#imgpage').offset().left === 2000){//from about
            pageBorder(proBtn, homeBtn, aboutBtn);
            arrowLinks('0', 'scale(0.8)')
            aboutBar(-1100, 500);
            setTimeout(aboutInfo.bind(null, 'scale(0.7)', '0'), 900);
            coverSlide(-1000, 1300);
            projectEdge(0, 2000);
            setTimeout(projectWrap.bind(null, '1', 'scale(1)'), 2500);
            setTimeout(boxShadow.bind(null, boxS), 2800);
            nextButton(3100, 110);
            setTimeout(cred.bind(null, '1'), 3400);
        }else{//from home
            pageBorder(proBtn, homeBtn, aboutBtn);
            imgScale('scale(1)', 0); 
            frontFadeOut(0);
            imgpageSlide(2000, 600);
            coverSlide(-1000, 1100);
            projectEdge(0, 2300);
            setTimeout(projectWrap.bind(null, '1', 'scale(1)'), 2700);
            nextButton(3000, 110);
            setTimeout(cred.bind(null, '1'), 3300);
        }
      
        
    })
    homeBtn.click(()=>{
        if($('#cover').offset().top === -1000){//from projects
            pageBorder(homeBtn, proBtn, aboutBtn)
            projectEdge(-40);
            setTimeout(cred.bind(null, -40), 300)
            nextButton(800, -50);
            setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), 1300);
            coverSlide(0, 1700);
            imgpageSlide(0, 2300);
            setTimeout(imgScale.bind(null, 'scale(1.1)'), 2700);
            frontFadeIn(3200);

        }else{//from about
            pageBorder(homeBtn, proBtn, aboutBtn)
            arrowLinks('0', 'scale(0.8)')
            aboutBar(-1100, 300);
            setTimeout(aboutInfo.bind(null, 'scale(0.7)', '0'), 900);
            imgpageSlide(0, 1700);
            setTimeout(imgScale.bind(null, 'scale(1.1)'), 2700);
            frontFadeIn(2800);

        }
        
        
    })
    aboutBtn.click(()=>{//from projects
        if($('#cover').offset().top === -1000){
            pageBorder(aboutBtn, proBtn, homeBtn);
            projectEdge(-40);
            setTimeout(cred.bind(null, -40), 300)
            nextButton(500, -50);
            setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), 1000);
            coverSlide(0, 1700);
            setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), 2600);
            aboutBar(40, 2800)
            setTimeout(arrowLinks.bind(null, '1', 'scale(1)'), 3500)
        }else{//from home 
            pageBorder(aboutBtn, proBtn, homeBtn)
            imgScale('scale(1)', 0); 
            frontFadeOut(0);
            imgpageSlide(2000, 600);
            setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), 1500)
            aboutBar(40, 1800)
            setTimeout(arrowLinks.bind(null, '1', 'scale(1)'), 2500)
        }
        
      
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
        $('.infoBar').delay(aBDel).animate({bottom: bot},500)
    }
    
    function arrowLinks(o, t){
        $('.arrow').css({
            'opacity': o,
            'transform': t
        });
    }

    //projects

    function projectEdge(edge, eDel){
        $('#leftEdge').delay(eDel).animate({left:edge},600);
        $('#rightEdge').delay(eDel).animate({right:edge},600);
    }
    function projectWrap(pwop, pws){
        $('.projectWrap').css({
            'opacity': pwop,
            'transform': pws
        },500)
    }
    function boxShadow(box){
        $('.proImg').css('boxShadow', box)
    }
    function nextButton(bDel, bottom){
        $('#nextBtn').delay(bDel).animate({bottom: bottom})
    }
    function cred(cOp){
        $('#cred').css('opacity', cOp);
    }
   
    let dailyG =  $('.image').attr("src", "img/pro1.png");
    let rapidJs = $('.image').attr("src", "img/pro2.png");
    let sClothes = $('.image').attr("src", "img/pro3.png");
   
    $('#nextBtn').click(()=>{
       if($('.image').attr() === dailyG){
        rapidJs
       }
       
        
    })

    
       





    



})