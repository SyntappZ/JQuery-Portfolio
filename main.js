$(document).ready(()=>{


//contact

let inprogress = false;    
let contact = $('#cBtn');
    contact.hover(()=>{
    if($(window).width() < 1050 && $(window).width() > 750){
        contact.animate({
            left:-70,
            top:-150,
            width:400,
            height:450,
        }, 400,).css({
            'background-color': 'transparent',
            'border': 'solid #FF8F00 1px',
            'color': '#FFf',
            'cursor':'default'
            
        });
        $('#aBtn').css('margin-top', '-70px');
    }
    else if($(window).width() < 750){
        contact.animate({
            left:0,
            top:-250,
            width:innerWidth,
            height:600,
        }, 200,).css({
            'background-color': '#FF8F00',
            'border': 'solid #FF8F00 1px',
            'color': '#000',
            'cursor':'default'
            
        });
     
    }else{
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
    }

    
       
    
       
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


//--------------------------- nav buttons -----------------
let i = 1;
let proBtn = $('#projectBtn');
let homeBtn = $('#homeBtn');
let aboutBtn = $('#aboutBtn');

//timing
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

//projects button
    proBtn.click(()=>{
        if(!inprogress){
            inprogress = true;
            if( $('#imgpage').offset().left === 2000){    //from about
                pageBorder(proBtn, homeBtn, aboutBtn);
                if($(window).width() < 1050 && $(window).width() > 750){
                    techSkills('30px', '0');
                    coverSlide(-1500, timing[2]);
                    aboutBar(-1600, timing[0]);
                
                
                }else{
                    techSkills('250px', '0');
                    coverSlide(-1000, timing[2]);
                    aboutBar(-1100, timing[0]);
                }
                arrowLinks('0', 'scale(0.8)');
                setTimeout(aboutInfo.bind(null, 'scale(0.7)', '0'), timing[1]);
                projectEdge(0, timing[4]);
                setTimeout(projectWrap.bind(null, '1', 'scale(1)'), timing[5]);
                if($(window).width() < 750){
                    nextButton(70, timing[6]);
                }else{
                    nextButton(110, timing[6]);
                }
               setTimeout(() => {
                workingOn('1');
               }, timing[6]);
                setTimeout(cred.bind(null, '1'), timing[7]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[8])
                
            }else{      //from home
                if($(window).width() < 1050 && $(window).width() > 750){
                    $('#aBtn').css('margin-top', '20px');
                    coverSlide(-1500, timing[1]);
                }else{
                    coverSlide(-1000, timing[1]);
                }
                pageBorder(proBtn, homeBtn, aboutBtn);
                contactShrink();
                imgScale('scale(1)', 0); 
                frontFadeOut(0);
                imgpageSlide(2000, timing[0]);
                projectEdge(0, timing[3]);
                setTimeout(projectWrap.bind(null, '1', 'scale(1)'), timing[4]);
                if($(window).width() < 750){
                    nextButton(70, timing[5]);
                }else{
                    nextButton(110, timing[5]);
                }
                setTimeout(() => {
                    workingOn('1');
                   }, timing[5]);
                setTimeout(cred.bind(null, '1'), timing[6]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[7])
            }
        }
        
    })

//home button
    homeBtn.click(()=>{
        if(!inprogress){
            inprogress = true;
            if($('#cover').offset().top === -1000){   //from projects
                pageBorder(homeBtn, proBtn, aboutBtn);
                workingOn('0');
                projectEdge(-40);
                setTimeout(cred.bind(null, -40), 0);
                nextButton(-50, 0);
                infoBox('0', '140px');
                setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), timing[0]);
                coverSlide(0, timing[1]);
                imgpageSlide(0, timing[2]);
                setTimeout(imgScale.bind(null, 'scale(1.1)'), timing[4]);
                frontFadeIn(timing[5]);
                setTimeout(()=>{
                    inprogress = false;
                },timing[6])

            }else if($('#cover').offset().top > -1000){    //from about
                pageBorder(homeBtn, proBtn, aboutBtn);
                if($(window).width() < 1050 && $(window).width() > 750){
                    techSkills('30px', '0');
                    aboutBar(-1600, timing[0]);
                }else{
                    techSkills('250px', '0');
                    aboutBar(-1100, timing[0]);
                }
                arrowLinks('0', 'scale(0.8)');
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

  //about button
    aboutBtn.click(()=>{   //from projects
        if(!inprogress){
            inprogress = true;
            if($('#cover').offset().top === -1000 || $('#cover').offset().top === -1500){
                pageBorder(aboutBtn, proBtn, homeBtn);
                projectEdge(-40);
                workingOn('0');
                setTimeout(cred.bind(null, -40), 0);
                nextButton(-50, 0);
                infoBox('0', '140px');
                setTimeout(projectWrap.bind(null, '0', 'scale(0.8)'), timing[0]);
                coverSlide(0, timing[1]);
                setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), timing[3]);
                aboutBar(40, timing[4]);
                setTimeout(arrowLinks.bind(null, '1', 'scale(1)'), timing[5]);
                if($(window).width() < 1050 && $(window).width() > 750){
                    setTimeout(techSkills.bind(null, '100px', '1'),timing[6])
                }else{
                    setTimeout(techSkills.bind(null, '270px', '1'),timing[6])
                }
                
                setTimeout(()=>{
                    inprogress = false;
                },timing[7])

            }else{      //from home 
                if($(window).width() < 1050 && $(window).width() > 750){
                    $('#aBtn').css('margin-top', '20px');
                }
                pageBorder(aboutBtn, proBtn, homeBtn);
                contactShrink();
                imgScale('scale(1)', 0); 
                frontFadeOut(0);
                imgpageSlide(2000, timing[0]);
                setTimeout(aboutInfo.bind(null, 'scale(1)', '1'), timing[2]);
                aboutBar(40, timing[3]);
                setTimeout(arrowLinks.bind(null, '1', 'scale(1)'), timing[4]);
                if($(window).width() < 1050 && $(window).width() > 750){
                    setTimeout(techSkills.bind(null, '100px', '1'),timing[5])
                }else{
                    setTimeout(techSkills.bind(null, '270px', '1'),timing[5])
                }
                setTimeout(()=>{
                    inprogress = false;
                },timing[6])
            }
        }
       
        
      
    })


    
    //--------------------- home functions --------------------------      
       
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

      

    //------------------------- about functions -------------------------

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
    function techSkills(tp, opac){
        $('.techskills').css({
            'top': tp,
            'opacity': opac
        });
    }

    //--------------------- projects functions -----------------------

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
        closeInfo();
        
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
        if($(window).width() < 1050 && $(window).width() > 750){
            infoBox('1', '0');
        }
        else if($(window).width() < 750){
            zIndex('1')
            setTimeout(() => {
                infoBox('1', '0');
            }, 400);
        }else{
            infoBox('1', '100px');
        }

       
        setTimeout(infoChanger, timing[0]);
    })


    //visit button
    $('#visit').click(()=>{
       project();
    })

    //github button
    $('#git').click(()=>{
        project();
     })
     
     //back button
     $('#backBtn').click(()=>{
        infoboxScale('scale(0)')
        setTimeout(() => {
            infoBox('0', '0');
        }, 400);
        setTimeout(() => {
            infoboxScale('scale(1)')
            zIndex('0');
        }, 1200);
     })

     function zIndex(z){
        $('.infobox').css('z-index', z)
     }
    
   

//project info changer
    let dailyPro = '<p>Daily Guide is a personal project i made just to make the daily choices easier its made with html/css and vanilla javascript. this is the first site that i done javascript on my own and not with help from tutorials, i now know how to use random in javascript, also it really helped me understand arrays more i learnt how to use choose what information is showed from the array depending on the day of the week, i also learnt how to make a slide out nav and a page loader while making this project. this page is fully responsive tablet and phone it helped me understand how to change the functionality of the page for the different page sizes.</p>'
    let rapid = '<p>Rapid Javascript was my first ever javascript project it was a follow along tutorial on youtube and then turned it into my own game of javascript words that get harder as you progress and i added changes like a button to it to change the difficulty and start and end screens. buildiing this project helped me understand how to use countdowns and how if statements work also i understand arrays a bit better now, i also know how to grab dom elements with javascript now too.</p>'
    let sClothes = '<p>Syntappz Clothes was my first clothes site i learnt quite a lot about javascript making this site this is the most javascript i have wrote on my own before my jquery portfolio, i would say this was my first proper site, i learnt how to use a loop to make the same animation happen to multiple objects which saved some code writing and this has made me understand loops a bit more, i learnt a lot about animations making this site and using setTimeout to make them run at diffent times, i also understand how to use parameters a lot better in functions now and using images in javascript too. i have not made this site responsive as this was made just to learn javascript, maybe i will look into that in the future.</p>'
    function project(){
        if(picArr[i] === picArr[1]){
            $('#visit a').attr('href', 'https://daily-guide.tk/');
            $('#git a').attr('href', 'https://github.com/SyntappZ/Daily-Guide');
           
        }
        else if(picArr[i] === picArr[2]){
            $('#visit a').attr('href', 'https://rapid-javascript.tk/');
            $('#git a').attr('href', 'https://github.com/SyntappZ/Rapid-Javascript');
            
        }
        else{
            $('#visit a').attr('href', 'https://syntappz-clothes.tk/');
            $('#git a').attr('href', 'https://github.com/SyntappZ/syntappz-clothes');
           
        }
    }

    function pInfo(app){
        if($('.pInfo').css('opacity') === '1'){
         null
        }else{
            $('.pInfo').append(app).css({
                opacity: '1',
                transform: 'scale(1)'
            })
           
        }
       
    }

    function closeInfo(){
        $('.pInfo').css({
            opacity: '0',
            transform: 'scale(0.6)'
        })
         setTimeout(() => {
             $('.pInfo p').remove();
         }, timing[0]);
      }
        
    

    function infoChanger(){
        if(picArr[i] === picArr[1]){
            pInfo(dailyPro);
        }
        else if(picArr[i] === picArr[2]){
            pInfo(rapid);
        }else{
            pInfo(sClothes);
        }
        
    }


    function infoBox(iop, il){
        if($('.infobox').css('opacity') === '1'){
            closeInfo()
            setTimeout(()=>{
                $('.infobox').css({
                    opacity: iop,
                    left: il
                })
            }, timing[0])
        
        }else{
            $('.infobox').css({
                opacity: iop,
                left: il
            })
        }
    }

    function infoboxScale(scl){
        $('.infobox').css('transform',scl)
    }

    function workingOn(o){
        $('.working-on').css('opacity', o)
    }
    
    $('.working-on').click(()=>{
        let url = 'https://pedantic-mirzakhani-d1a2a7.netlify.com';
        window.open(url, '_blank');

    })
  
})