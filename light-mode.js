let toggle= document.querySelector('#toggle_switch');
let body=document.getElementsByTagName('body')[0];
let switcher=document.getElementsByClassName('switcher')[0];
let headerbox=document.querySelector('#header_box');
let headTitle=document.querySelector('#head-title');
let cards= document.getElementsByClassName('card');
let overview=document.querySelector('#overviewL');
let numbers= document.getElementsByClassName('number');
let overL =document.querySelector('#over');
let cards2= document.getElementsByClassName('card2');
let numbers2= document.getElementsByClassName('number2');


console.log(cards);
console.log(overL);

function carFunc(){
    
}




toggle.addEventListener( 'click' , function(event){
    console.log(body)
    toggle.classList.toggle('light_mode');
    body.classList.toggle('lighter');
    switcher.classList.toggle('day');
    headerbox.classList.toggle('dayHead');
    headTitle.classList.toggle('heading_light');
    console.log('>>>', cards)
    for( let card of cards ){
        card.classList.toggle('card_light');
    }
    for( let number of numbers ){
        number.classList.toggle('number_light');
    }
    for( let number2 of numbers2 ){
        number2.classList.toggle('number_light');
    }
    
    overview.classList.toggle('over_container_light');
    overL.classList.toggle('heading_light');
    for( let card2 of cards2 ){
        card2.classList.toggle('card_light');
    }
    

});