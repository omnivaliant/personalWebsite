window.onload = function start(){
    
    setTimeout(function (){
        $("p.name").animate({height:'auto',top:'-10px'}, "slow")
    },1200);
    setTimeout(function (){
        $(".description").animate({height:'auto',top:'-50px'}, "slow")
    },1200);
    setTimeout(function () {
        $("img.img-circle").animate({height:'auto',width: '10%'}, "slow")
    },1200);
    setTimeout(function () {
        $(".social").fadeIn(1200);
    },2000);
}
