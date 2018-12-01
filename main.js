$(document).ready(()=>{

let inprogress = false;    
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
        $('#com').css('display', 'none')
        $('.hoverContact').css({
            'display': 'block',
        })
    })


    function contactShrink(){
        contact.animate({
            left:0,
            top:0,
            width:150,
            height:40,
        },400, ()=>{
            contact.css({
                'background-color': '#FF8F00',
                'border': 'none',
                'color': '#000',
                'cursor':'pointer'
            });
        })
        $('.far fa-comment-alt').css('display', 'block')
        $('.hoverContact').css({
            'display': 'none',
        })
    }

let i = 1;
let proBtn = $('#projectBtn');
let homeBtn = $('#homeBtn');
let aboutBtn = $('#aboutBtn');

let timing = [
    400,
    800,
    1200,
    1600,
    2000,
    2400,
    2800,
    3200,
    3500
]


    proBtn.click(()=>{
        if(!inprogress){
            inprogress = true;
            if( $('#imgpage').offset().left === 2000){//from about
                pageBorder(proBtn, homeBtn, aboutBtn);
                arrowLinks('0', 'scale(0.8)');
                aboutBar(-1100, timing[0]);
                setTimeout(aboutInfo.bind(null, 'scale(0.7)', '0'), timing[1]);
                coverSlide(-1000, timing[2]);
                projectEdge(0, timing[4]);
                setTimeout(projectWrap.bind(null, '1', 'scale(1)'), timing[5]);
                nextButton(110, timing[6]);
                setTimeout(cred.bind(null, '1'), timing[7]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[8])
                
            }else{//from home
                pageBorder(proBtn, homeBtn, aboutBtn);
                contactShrink();
                imgScale('scale(1)', 0); 
                frontFadeOut(0);
                imgpageSlide(2000, timing[0]);
                coverSlide(-1000, timing[1]);
                projectEdge(0, timing[3]);
                setTimeout(projectWrap.bind(null, '1', 'scale(1)'), timing[4]);
                nextButton(110, timing[5]);
                setTimeout(cred.bind(null, '1'), timing[6]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[7])
            }
        }
       
      
        
    })
    homeBtn.click(()=>{
        if(!inprogress){
            inprogress = true;
            if($('#cover').offset().top === -1000){//from projects
                pageBorder(homeBtn, proBtn, aboutBtn);
                    if( $('.edge').width() === 300){
                        projectEdge(-300);
                    }else{
                        projectEdge(-40);
                    }
                setTimeout(cred.bind(null, -40), timing[0]);
                nextButton(-50, timing[1]);
                setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), timing[2]);
                coverSlide(0, timing[3]);
                imgpageSlide(0, timing[4]);
                setTimeout(imgScale.bind(null, 'scale(1.1)'), timing[6]);
                frontFadeIn(timing[7]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[8])
            }else{//from about
                pageBorder(homeBtn, proBtn, aboutBtn);
                arrowLinks('0', 'scale(0.8)');
                aboutBar(-1100, timing[0]);
                setTimeout(aboutInfo.bind(null, 'scale(0.7)', '0'),timing[1]);
                imgpageSlide(0, timing[2]);
                setTimeout(imgScale.bind(null, 'scale(1.1)'), timing[4]);
                frontFadeIn(timing[5]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[6])
            }
        }
       
        
        
    })
    aboutBtn.click(()=>{//from projects
        if(!inprogress){
            inprogress = true;
            if($('#cover').offset().top === -1000){
                pageBorder(aboutBtn, proBtn, homeBtn);
                    if( $('.edge').width() === 300){
                        projectEdge(-300);
                    }else{
                        projectEdge(-40);
                    }
                setTimeout(cred.bind(null, -40), timing[0]);
                nextButton(-50, timing[1]);
                setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), timing[2]);
                coverSlide(0, timing[3]);
                setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), timing[5]);
                aboutBar(40, timing[6]);
                setTimeout(arrowLinks.bind(null, '1', 'scale(1)'), timing[7]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[8])
            }else{//from home 
                pageBorder(aboutBtn, proBtn, homeBtn);
                contactShrink();
                imgScale('scale(1)', 0); 
                frontFadeOut(0);
                imgpageSlide(2000, timing[0]);
                setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), timing[2]);
                aboutBar(40, timing[3]);
                setTimeout(arrowLinks.bind(null, '1', 'scale(1)'), timing[4]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[5])
            }
        }
       
        
      
    })


    
            
       
    function imgScale(scale){
        $('#imgpage').css('transform', scale);
    }
    function frontFadeOut(fODel){
        $('.frontWrap').delay(fODel).fadeOut(300);
    }
    function frontFadeIn(fIDel){
        $('.frontWrap').delay(fIDel).fadeIn(300);
    }
    function imgpageSlide(dir, iSDel){
        $('#imgpage').delay(iSDel).animate({left:dir},300)
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
        $('.infoBar').delay(aBDel).animate({bottom: bot},300)
    }
    
    function arrowLinks(o, t){
        $('.arrow').css({
            'opacity': o,
            'transform': t
        });
    }

    //projects

    function projectEdge(edge, eDel){
        $('#leftEdge').delay(eDel).animate({left:edge},300);
        $('#rightEdge').delay(eDel).animate({right:edge},300);
    }
    function projectWrap(pwop, pws){
        $('.projectWrap').css({
            'opacity': pwop,
            'transform': pws
        },500)
    }
    
    function nextButton(bottom, bDel){
        $('#nextBtn').delay(bDel).animate({bottom: bottom})
    }
    function cred(cOp){
        $('#cred').css('opacity', cOp);
    }
   
    let picArr = [
        "img/pro1.png",
        "img/pro2.png",
        "img/pro3.png"
    ]
   
   
    $('#nextBtn').click(()=>{
        proInfo(40);
       projectChange(picArr[i]);
       i++
        if(i === picArr.length){
            i = 0;
        }
    })
    function projectChange(x){
        $('.proImg').css({
            transform: 'scale(0.8)',
            opacity: '0'
        })
        setTimeout(changeImg.bind(null, x),500);
        setTimeout(fadeDelay, 800);

    }

    function changeImg(img){
        $('.image').attr("src", img);
    }
        
    function fadeDelay(){
        $('.proImg').css({
            transform: 'scale(1)',
            opacity: '1'
        })
}


$('#info').click(()=>{
  proInfo(300);
})

function proInfo(w){
    $('.edge').animate({
        width: w
    },300)
}


    



})