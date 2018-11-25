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
        $('#imgpage').css('transform', 'scale(1)')
            $('.frontWrap').fadeOut(600,()=>{
                $('#imgpage').animate({left:2000})
            })
            
    })
function pageBorder(btn1, btn2, btn3){
        btn1.css('border-bottom', 'solid 4px #FF8F00')
        btn2.css('border-bottom', 'none')
        btn3.css('border-bottom', 'none')
}





})