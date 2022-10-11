let sifra
let sifra2
let password
let password2

sifra = document.getElementById('pwd')
sifra2 = document.getElementById('cpwd')

sifra.addEventListener('input', (e) =>{
    password  = sifra.value 
    click();
})   
sifra2.addEventListener('input', (e) =>{
    password2  = sifra2.value 
    click();
})   

let click = () => {
    if(password==password2){
        sifra.style.border = "1px solid green"
        sifra2.style.border = "1px solid green"
    }else{
        sifra.style.border = "1px solid red"
        sifra2.style.border = "1px solid red"
    }
}