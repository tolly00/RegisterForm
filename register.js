

function validation(){

let firstname=document.getElementById("firstname").value;
let lastname=document.getElementById("lastname").value;
let pass=document.getElementById("password").value;
let cpass=document.getElementById("cpassword").value;

 if(firstname === ""){
     document.getElementById("msgfirst").innerText='fill the firstname field';
     return false;
     
    }
 if(lastname == ""){
    document.getElementById("msglast").innerText='fill the lastname field';
    return false;
    
    }
    if(pass == ""){
        document.getElementById("msgpass").innerText='fill the password field';
        return false;
        
    }
    if(cpass == ""){
        document.getElementById("msgcpass").innerText='fill the confirm password field';
        return false;
        
    }
}