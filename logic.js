var sign = "X";

function restart(){
    location.reload();
}

function printx(number){
    
    var i = document.getElementById("r"+number);
    if(i.innerHTML== ""){
    i.innerHTML=sign;
    checkSign();
    document.getElementById("player").innerHTML ="<center>"+sign +"\'s    Trun now"+"</center>";
    winner();
    }
}

function checkSign(){
    if(sign=="X"){
        sign="O";
    }
    else{
        sign="X";
    }
}

function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}

function get(no){
    return document.getElementById("r"+no);
}

function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m){
        get(a).style.color="red";
        get(b).style.color="red";
        get(c).style.color="red";
        return true;
    }
    else{
        return false;
    }
}

function makeNone(){
    get("1").style.pointerEvents="none";
    get("2").style.pointerEvents="none";
    get("3").style.pointerEvents="none";
    get("4").style.pointerEvents="none";
    get("5").style.pointerEvents="none";
    get("6").style.pointerEvents="none";
    get("7").style.pointerEvents="none";
    get("8").style.pointerEvents="none";
    get("9").style.pointerEvents="none";
}

function winner(){
    if(checkmove(1,2,3,"X") || checkmove(4,5,6,"X") || checkmove(7,8,9,"X") || checkmove(1,4,7,"X")
    || checkmove(2,5,8,"X") || checkmove(3,6,9,"X") || checkmove(1,5,9,"X") || checkmove(3,5,7,"X")){
        makeNone();
        document.getElementById("winner").innerHTML="<center>"+"Winner is X"+"</center>";

    }
    else if(checkmove(1,2,3,"O") || checkmove(4,5,6,"O") || checkmove(7,8,9,"O") || checkmove(1,4,7,"O")
    || checkmove(2,5,8,"O") || checkmove(3,6,9,"O") || checkmove(1,5,9,"O") || checkmove(3,5,7,"O")){
        makeNone();
        document.getElementById("winner").innerHTML="<center>"+"Winner is O"+"</center>";
    }
    else if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!=""){
        document.getElementById("winner").innerHTML="<center>"+"Game is Drawn"+"</center>";
    }
}