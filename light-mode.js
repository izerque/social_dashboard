let toggle= document.querySelector('#toggle_switch');
let body=document.getElementsByTagName('body')[0];
let switcher=document.getElementsByClassName('switcher')[0];
let headerbox=document.querySelector('#header_box');
let headTitle=document.querySelector('#head-title');
let card= document.getElementsByClassName('card');


console.log(card);

function carFunc(){
    card.forEach(card.classList.toggle('card_light'));
    return 0;

}




toggle.addEventListener( 'click' , function(event){
    console.log(body)
    toggle.classList.toggle('light_mode');
    body.classList.toggle('lighter');
    switcher.classList.toggle('day');
    headerbox.classList.toggle('dayHead');
    headTitle.classList.toggle('heading_light');
    card.classList.toggle('card_light')
    

});