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
            if($('#cover').offset().top === -1000){   //from projects
                pageBorder(homeBtn, proBtn, aboutBtn);
                    if( $('.edge').width() === 300){
                        projectEdge(-300);
                    }else{
                        projectEdge(-40);
                    }
                setTimeout(cred.bind(null, -40), 0);
                nextButton(-50, 0);
                setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), timing[0]);
                coverSlide(0, timing[1]);
                imgpageSlide(0, timing[2]);
                setTimeout(imgScale.bind(null, 'scale(1.1)'), timing[4]);
                frontFadeIn(timing[5]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[6])

            }else{       //from about
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
    aboutBtn.click(()=>{     //from projects
        if(!inprogress){
            inprogress = true;
            if($('#cover').offset().top === -1000){
                pageBorder(aboutBtn, proBtn, homeBtn);
                    if( $('.edge').width() === 300){
                        projectEdge(-300);
                    }else{
                        projectEdge(-40);
                    }
                setTimeout(cred.bind(null, -40), 0);
                nextButton(-50, 0);
                setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), timing[0]);
                coverSlide(0, timing[1]);
                setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), timing[3]);
                aboutBar(40, timing[4]);
                setTimeout(arrowLinks.bind(null, '1', 'scale(1)'), timing[5]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[6])

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


    
    //home        
       
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
        },timing[0])
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
   
   //next button
    $('#nextBtn').click(()=>{
       projectChange(picArr[i]);
       i++
        if(i === picArr.length){
            i = 0;
        }
        
        edgeInfo(null, '0')
        setTimeout(removePara, 400);
    })


    function projectChange(x){
        $('.proImg').css({
            transform: 'scale(0.8)',
            opacity: '0'
        })
        setTimeout(changeImg.bind(null, x),timing[1]);
        setTimeout(fadeDelay, timing[2]);

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


   

   
//project buttons

     //info button
     $('#info').click(()=>{
        proInfo(300);
        insideWidth(270);
        project();
    })


    //visit button
    $('#visit').click(()=>{
       project();
    })

    //github button
    $('#git').click(()=>{
        project();
     })
     

     function insideWidth(a){
         $('.insideEdge').animate({
             width:a
         })
     }

    function proInfo(w){
        $('.edge').animate({
            width:w
        },timing[0]);
    }


    let dailyPro = '<p>Daily Guide is a personal project im making just to make the daily choices easier its made with html/css and vanilla javascript. this is the first site that i done javascript on my own and not with help from tutorials, i now know how to use random in javascript, also it really helped me understand arrays more i learnt how to use choose what information is showed from the array depending on the day of the week, i also learnt how to make a slide out nav and a page loader while making this project. this page is fully responsive tablet and phone it helped me understand how to change the functionality of the page for the different page sizes.</p>'
    let rapid = '<p>Rapid Javascript was my first ever javascript project it was a follow along tutorial on youtube and then turned it into my own game of javascript words that get harder as you progress and i added changes like a button to it to change the difficulty and start and end screens. buildiing this project helped me understand how to use countdowns and how if statements work also i understand arrays a bit better now, i also know how to grab dom elements with javascript now too.</p>'
    let sClothes = '<p>Syntappz Clothes was my first clothes site i learnt quite a lot about javascript making this site this is the most javascript i have wrote on my own before my jquery portfolio, i would say this was my first proper site, i learnt how to use a loop to make the same animation happen to multiple objects which saved some code writing and this has made me understand loops a bit more, i learnt a lot about animations making this site and using setTimeout to make them run at diffent times, i also understand how to use parameters a lot better in functions now and using images in javascript too. i have not made this site responsive as this was made just to learn javascript, maybe i will look into that in the future.</p>'
    function project(){
        if(picArr[i] === picArr[1]){
            $('#visit a').attr('href', 'https://daily-guide.tk/');
            $('#git a').attr('href', 'https://github.com/SyntappZ/Daily-Guide');
           setTimeout(edgeInfo.bind(null, dailyPro, '1'), 400);
        }
        else if(picArr[i] === picArr[2]){
            $('#visit a').attr('href', 'https://rapid-javascript.tk/');
            $('#git a').attr('href', 'https://github.com/SyntappZ/Rapid-Javascript');
            setTimeout(edgeInfo.bind(null, rapid, '1'), 400);
        }
        else{
            $('#visit a').attr('href', 'https://syntappz-clothes.tk/');
            $('#git a').attr('href', 'https://github.com/SyntappZ/syntappz-clothes');
            setTimeout(edgeInfo.bind(null, sClothes, '1'), 400);
        }
    }

    function edgeInfo(app, eOp){
        $('#eInfo').append(app);
        $('.edgeInfo').css('opacity', eOp);
    }
    function removePara(){
        $('#eInfo p').remove();
    }
})