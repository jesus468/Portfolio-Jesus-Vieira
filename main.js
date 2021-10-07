const textoIn = document.querySelector('h1');
const yo = document.getElementById('yo');


window.onload = function(){
    const carga = document.getElementById("contenedor_carga");
    
    carga.style.visibility = 'hidden';
    carga.style.opacity = '0';

    if (window.onload){
        

        textoIn.classList.add("getting_in");
    }
}
window.addEventListener('scroll', f) 

function f (){
    const scroll = document.documentElement.scrollTop;
    console.log(scroll);

    if (scroll > 300){        
        yo.style.opacity = 0 ;
        textoIn.style.opacity = 0;
    }if (scroll < 300){
        yo.style.opacity = 1 ;
        textoIn.style.opacity = 1;
    }
}
/*################################### mover a Inicio #####################################*/

const btnUp = document.querySelector("#backUp")
const star = document.getElementById('estrella')

btnUp.addEventListener("click", yoUp)
function yoUp(){ 
    window.scrollTo({   
        top: 0,
        behavior: "smooth"
    })
}
star.addEventListener('mouseenter', estrella);
function estrella(){
    star.classList.add("estrella");
    star.classList.remove("estrellaB");
}
star.addEventListener('mouseout', estrellaB);
function estrellaB() {
    star.classList.remove("estrella");
    star.classList.add("estrellaB");

}
/*############################ ABOUT ME IMAGEN ANIMATION ###################################*/
const tag1 = document.getElementById('tag1');
const tag2 = document.getElementById('tag2');
const oYo = document.getElementById('oYo');
const udemy = document.getElementById('udemy');

window.addEventListener('scroll', mov1);
function mov1 (){
    const scroll = document.documentElement.scrollTop;
    if (scroll > 100){
        tag1.classList.add('tag1');
        tag1.style.opacity = "1" ;
    }
    if (scroll > 250){
        oYo.style.opacity = 1;
        oYo.classList.add('oYo');
    }
    if (scroll > 300 ){
        udemy.style.opacity = 1;
        udemy.classList.add('udemy');
    }
    if (scroll > 520){
        tag2.classList.add("tag2");
        tag2.style.opacity= 1;
    }
    
}

/*############################### STUDY IMAGEN ANIMATION ###################################*/
const stuPhy = document.getElementById('stuPhy');
const papel = document.getElementById('papel')
const stuCss = document.getElementById('stuCss');

window.addEventListener('scroll', mov2);
function mov2 (){
    const scroll = document.documentElement.scrollTop;
    if (scroll > 920 ){
        stuCss.classList.add('stuCss');
        stuCss.style.opacity = "1" ;
    }if (scroll > 1200 ){
        stuPhy.classList.add("stuPhy");
        stuPhy.style.opacity= 1;
        
    }if (scroll > 1600){
        papel.classList.add("papel");
        papel.style.opacity= 1;   
    }
}
/*######################### carousel (slider)####################*/
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', sliderTo2 );
function sliderTo2(){
    slider.style.marginLeft = "-100%";
    slider.style.transition =  "all 0.5s"
    if (slider.style.marginLeft === "-100%"){
        btn1.style.opacity = 1 ;
        btn2.style.opacity = 0;
        
    }
}
btn1.addEventListener('click', sliderTo1)
function sliderTo1(){
    slider.style.marginLeft = "0%";
    slider.style.transition =  "all 0.5s"
    if (slider.style.marginLeft === "0%" ){
        btn1.style.opacity = 0 ;
        btn2.style.opacity = 1;
        
    }
}

/*#################################### CONSTACTOS ##########################################*/

const face = document.querySelector('#face')
const insta = document.querySelector('#insta')
const correo = document.querySelector('#correo')
const remoteco = document.querySelector('#remoteco')

const faceA = document.querySelector('#faceA')
const instaA = document.querySelector('#instaA')
const correoA = document.querySelector('#correoA')
const remotecoA = document.querySelector('#remotecoA')


face.addEventListener('mouseenter', ()=> {
    faceA.classList.add('faceA');
    faceA.style.visibility = "visible"; 
})
faceA.addEventListener('mouseout',()=>{
    faceA.style.visibility = "hidden";
    faceA.classList.remove('faceA');
})

insta.addEventListener('mouseenter', ()=> {
    instaA.classList.add('instaA');
    instaA.style.visibility = "visible"; 
})
instaA.addEventListener('mouseout', ()=> {
    instaA.classList.remove('instaA');
    instaA.style.visibility = "hidden";
})

correo.addEventListener('mouseenter', ()=> {
    correoA.classList.add('correoA');
    correoA.style.visibility = "visible"; 
})
correoA.addEventListener('mouseout', ()=> {
    correoA.classList.remove('correoA');
    correoA.style.visibility = "hidden";
})

remoteco.addEventListener('mouseenter', ()=> {
    remotecoA.classList.add('remotecoA');
    remotecoA.style.visibility = "visible"; 
})
remotecoA.addEventListener('mouseout', ()=> {
    remotecoA.classList.remove('remotecoA');
    remotecoA.style.visibility = "hidden";
})

