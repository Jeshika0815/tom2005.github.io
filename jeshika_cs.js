const times = new Date();
const day = times.getMonth();
const hou = times.getHours();

window.onload = function bgc(){
let ten = document.querySelector("#backgc");
if(hou>=6 && hou<7){
    ten.style.backgroundColor = "#FFCC00";
}
if(hou>=7 && hou<15){
    ten.style.backgroundColor = "#99CCFF";
}
else if(hou>=15 && hou<17){
    ten.style.backgroundColor = "#FFCC66";
}
else{
    ten.style.backgroundColor = "#3366ff";
}

}
window.addEventListener('DOMContentLoaded',function (){
    let hello = document.querySelector("#als");
    if(day < 9 ){
        if(hou >= 3 && hou < 10){
            hello.innerHTML = `<h1 class="tit">おはようございます</h1>`;
        }else if(hou >= 10 && hou <18){
            hello.innerHTML = `<h1 class="tit">こんにちは</h1>`;
        }else{hello.innerHTML = `<h1 class="tit">こんばんは</h1>`;}
    }
    else{
        if(hou >= 6 && hou <10){
            hello.innerHTML = `<h1 class="tit">おはようございます</h1>`;
        }else if(hou >= 10 && hou <18){
            hello.innerHTML = `<h1 class="tit">こんにちは</h1>`;
        }else{hello.innerHTML = `<h1 class="tit">こんばんは</h1>`;}
    }
});
/*window.addEventListener('contextmenu',function(e){
    e.preventDefault();
    let ctm = document.getElementById("menu");
    ctm.style.display="block";
    ctm.style.left=e.pageX+"px";
    ctm.style.top=e.pageY+"px";
});
window.addEventListener('click',function(e){
    e.preventDefault();
    let ctm = document.getElementById("menu");
    ctm.style.display="none";
});
*/