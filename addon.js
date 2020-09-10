var r=(Math.random()*500)%255;
var g=(Math.random()*500)%255;
var b=(Math.random()*500)%255;
var a=(Math.random()%0.4)+0.6;
var f="RGBA("+r+","+g+","+b+","+a+")";

$("marquee").css("color",f);

$(".text_increse").click(function(){
    var x=$("html").css("font-size");
    var y=x[0]+x[1];
    if(y<=20)
    {
        x=String(Number(y)+1)+"px";
        $("html").css("font-size",x);
    }
});
$(".text_decrese").click(function(){
    var x=$("html").css("font-size");
    var y=x[0]+x[1];
    if(y>=12)
    {
        x=String(Number(y)-1)+"px";
        $("html").css("font-size",x);
    }
});

$(".text_reset").click(function(){
    $("html").css("font-size","16px");
});

