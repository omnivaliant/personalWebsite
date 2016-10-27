window.onload = function start(){
    
    setTimeout(function (){
        $("p.name").animate({top:'-20px'}, "slow")
    },1200);
    setTimeout(function (){
        $("p.intro-text").animate({top:'-50px'}, "slow")
    },1200);
    setTimeout(function () {
        $("img.img-circle").animate({height:'auto',width: '10%'}, "slow")
    },1200);
    setTimeout(function () {
        $("a.icon-label").fadeIn(1200);
    },2000);
}
