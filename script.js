const passwordBox=document.getElementById("password");
const Length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqsrtuvwxyz";
const number="0123456789";
const symbol="@#$!{[]></-=(&^*_-+?|}";

const allCahrs=upperCase+lowerCase+symbol+number;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    
    while(Length>password.length){
    password+=allCahrs[Math.floor(Math.random()*allCahrs.length)];
    }
    passwordBox.value=password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
