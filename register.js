
let firstname=document.getElementById("firstname").value;
let lastname=document.getElementById("lastname").value;

function validation(){
 if(firstname == ""){
     document.getElementById("msgfirst").innerText='fill the firstname field';
     return false;
     ;
 }
 if(lastname == ""){
    document.getElementById("msglast").innerText='fill the lastname field';
    return false;
    ;
}
}